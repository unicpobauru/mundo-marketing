# Mundo Marketing · UniCPO

Portal interno do marketing da UniCPO: Videoteca, Manual do Criativo, Kit de marca, páginas por setor e busca geral. Português por padrão, com botão para trocar para espanhol.

É um site estático, só HTML, CSS e JavaScript, sem etapa de build.

## Estrutura

| Pasta | Conteúdo |
| --- | --- |
| `index.html` | Página inicial |
| `videoteca/` | Videoteca (`data.js` é o catálogo; `thumbs/` são as miniaturas) |
| `manual/` | Manual do Criativo em PT e ES |
| `kit-de-marca/` | Kit de marca (em montagem) |
| `setores/` | Comercial, CS, Acadêmico e Recepção |
| `busca/` | Busca no portal e nos vídeos |
| `assets/portal.css` | Visual compartilhado |
| `assets/portal.js` | Barra do portal, rodapé e troca de idioma |

### Como traduzir um texto
- Texto curto: escreva em português e coloque o espanhol em `data-es`: `<h2 data-es="Para tu sector">Para o seu setor</h2>`
- Bloco grande: dois blocos, um com `data-lang="pt"` e outro com `data-lang="es" hidden`.

### Como adicionar uma área na busca
Acrescente uma linha na lista `PAGES` dentro de `busca/index.html`.

## Ver no computador
Na pasta do projeto:

```bash
python3 -m http.server 8000
```

Depois abra http://localhost:8000.

## Publicar com acesso privado (Cloudflare Pages + Cloudflare Access)

O Cloudflare Access é grátis até 50 pessoas. Cada pessoa entra com o próprio e-mail e recebe um código; quem não está na lista não abre o site.

### 1. Colocar o código no GitHub
1. Na conta GitHub da empresa, crie um repositório **privado** chamado `mundo-marketing`.
2. Envie esta pasta para o repositório.

### 2. Publicar no Cloudflare Pages
1. Crie uma conta em dash.cloudflare.com com um e-mail da empresa.
2. Vá em **Workers & Pages → Create → Pages → Connect to Git** e escolha o repositório `mundo-marketing`.
3. Em *Build settings*: Framework preset **None**, Build command **vazio**, Build output directory **`/`**.
4. Clique em **Save and Deploy**. O site fica em `mundo-marketing.pages.dev` (ou parecido).
5. Cada alteração enviada ao GitHub publica o site de novo sozinha.

### 3. Fechar o acesso (Cloudflare Access)
1. No painel do Cloudflare, abra **Zero Trust** e escolha o plano **Free**.
2. Vá em **Access → Applications → Add an application → Self-hosted**.
3. Em *Application domain*, coloque o endereço do site (`mundo-marketing.pages.dev`). Adicione também `*.mundo-marketing.pages.dev`, para fechar as versões de pré-visualização.
4. Crie uma *Policy* com *Action* **Allow** e, em *Include*, escolha **Emails** com o e-mail de cada pessoa autorizada. Se todos tiverem e-mail do mesmo domínio da empresa, use **Emails ending in** com `@dominio-da-empresa`.
5. Salve. A partir daí, quem abrir o site precisa digitar o e-mail e o código que chega por e-mail.

Para tirar o acesso de alguém, remova o e-mail da policy.

## O que muda em relação à Videoteca no claude.ai
- Funciona igual: busca, filtros, prévia, carrinho, download e versões de 16 MB.
- Não funciona no portal: o **mural de sugestões** e o **contador de downloads** (ordenar por "Mais baixados"). Os dois dependem do claude.ai e ficam escondidos aqui.
- Os vídeos continuam no Google Drive. Para assistir ou baixar, a pessoa precisa ter acesso às pastas do Drive.

## Atualizar o conteúdo
- **Videoteca:** substitua `videoteca/data.js` e `videoteca/thumbs/` pelos arquivos novos.
- **Manual do Criativo:** a versão editável continua no claude.ai. Quando ela mudar, atualize `manual/index.html`.
