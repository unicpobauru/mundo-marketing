-- Mundo Marketing · tabelas do Supabase
-- Como usar: no Supabase, abra "SQL Editor" → "New query", cole TUDO e clique em "Run".
-- Pode rodar de novo sem problema (não apaga nada que já exista).

-- 1. Perfil de cada pessoa (criado sozinho quando alguém é convidado)
create table if not exists public.perfis (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  nome text,
  setor text,                                   -- marketing, comercial, cs, academico, recepcao...
  papel text not null default 'membro'          -- 'admin' pode ver todos os perfis
    check (papel in ('membro','admin')),
  criado_em timestamptz not null default now()
);

create or replace function public.novo_perfil() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.perfis (id, email, nome)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'nome', split_part(new.email, '@', 1)))
  on conflict (id) do nothing;
  return new;
end $$;

drop trigger if exists ao_criar_usuario on auth.users;
create trigger ao_criar_usuario after insert on auth.users
  for each row execute function public.novo_perfil();

-- nome escolhido na tela "Crie sua senha" também vai para o perfil
create or replace function public.atualiza_nome() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.raw_user_meta_data->>'nome' is not null then
    update public.perfis set nome = new.raw_user_meta_data->>'nome' where id = new.id;
  end if;
  return new;
end $$;

drop trigger if exists ao_atualizar_usuario on auth.users;
create trigger ao_atualizar_usuario after update of raw_user_meta_data on auth.users
  for each row execute function public.atualiza_nome();

-- perfis de quem já existia antes desta tabela
insert into public.perfis (id, email, nome)
select id, email, coalesce(raw_user_meta_data->>'nome', split_part(email, '@', 1)) from auth.users
on conflict (id) do nothing;

-- 2. Academy: aulas concluídas
create table if not exists public.academy_progresso (
  usuario uuid not null references auth.users(id) on delete cascade default auth.uid(),
  aula text not null,                           -- "curso/aula", ex.: "integracao/boas-vindas"
  concluida_em timestamptz not null default now(),
  primary key (usuario, aula)
);

-- 3. Mural: novidades já vistas (para o selo NEW)
create table if not exists public.mural_visto (
  usuario uuid not null references auth.users(id) on delete cascade default auth.uid(),
  item text not null,
  visto_em timestamptz not null default now(),
  primary key (usuario, item)
);

-- 4. Segurança (RLS): cada pessoa só lê e muda o que é dela
alter table public.perfis enable row level security;
alter table public.academy_progresso enable row level security;
alter table public.mural_visto enable row level security;

create or replace function public.sou_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.perfis where id = auth.uid() and papel = 'admin');
$$;

drop policy if exists "perfil: ver o próprio (admin vê todos)" on public.perfis;
create policy "perfil: ver o próprio (admin vê todos)" on public.perfis
  for select to authenticated using (id = auth.uid() or public.sou_admin());

drop policy if exists "progresso: só o próprio" on public.academy_progresso;
create policy "progresso: só o próprio" on public.academy_progresso
  for all to authenticated using (usuario = auth.uid()) with check (usuario = auth.uid());

drop policy if exists "mural: só o próprio" on public.mural_visto;
create policy "mural: só o próprio" on public.mural_visto
  for all to authenticated using (usuario = auth.uid()) with check (usuario = auth.uid());

-- (o papel 'admin' é dado à mão no Table Editor: tabela perfis → coluna papel → admin)
