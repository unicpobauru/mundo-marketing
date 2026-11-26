-- Mundo Marketing · mural de Sugestões da Videoteca
-- Todos os logados veem o mural e enviam; cada um apaga a própria; admin marca como atendida e apaga qualquer uma.
create table if not exists public.sugestoes (
  id bigint generated always as identity primary key,
  usuario uuid not null default auth.uid() references auth.users(id) on delete cascade,
  nome text,
  tipo text not null check (tipo in ('falta','ideia')),
  texto text not null check (char_length(texto) between 1 and 800),
  feito boolean not null default false,
  criado_em timestamptz not null default now()
);
alter table public.sugestoes enable row level security;

drop policy if exists "sugestoes: logados veem" on public.sugestoes;
create policy "sugestoes: logados veem" on public.sugestoes for select to authenticated using (true);

drop policy if exists "sugestoes: enviar a própria" on public.sugestoes;
create policy "sugestoes: enviar a própria" on public.sugestoes for insert to authenticated with check (usuario = auth.uid() and feito = false);

drop policy if exists "sugestoes: admin atualiza" on public.sugestoes;
create policy "sugestoes: admin atualiza" on public.sugestoes for update to authenticated using (public.sou_admin()) with check (public.sou_admin());

drop policy if exists "sugestoes: apagar a própria ou admin" on public.sugestoes;
create policy "sugestoes: apagar a própria ou admin" on public.sugestoes for delete to authenticated using (usuario = auth.uid() or public.sou_admin());
