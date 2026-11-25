# Mundo Marketing · UniCPO

Portal interno do marketing da UniCPO: Videoteca, Manual do Criativo, Kit de marca, páginas por setor e busca geral. Português por padrão, com botão para trocar para espanhol.

É um site estático, só HTML, CSS e JavaScript, sem etapa de build.

## Como o portal é construído

O portal tem três peças:

1. **Registro de áreas** (`dados/areas.js`): lista todas as áreas, em quais setores aparecem e em que grupo da página inicial ficam. A página inicial, "Para o seu setor" e a Busca são montadas a partir dele.
2. **Dados de cada área** (`dados/<área>.js`): os itens daquela área (textos em PT e ES, categorias, links, vídeos). Algumas áreas geram itens sozinhas a partir do catálogo da Videoteca.
3. **Motor de coleções** (`assets/colecao.js`): desenha qualquer área com busca, filtros, cartões e janela de detalhe. Formatos disponíveis: cartões, perguntas frequentes, glossário A–Z, mural por data, galeria de fotos, perfis e kit de marca.

Todas as áreas abrem em `area/index.html?id=<área>`. A Videoteca e o Manual do Criativo têm páginas próprias.

| Pasta | Conteúdo |
| --- | --- |
| `index.html` | Página inicial (áreas + últimas novidades) |
| `dados/areas.js` | Registro de áreas |
| `dados/*.js` | Dados de cada área |
| `area/` | Página única que mostra qualquer área |
| `videoteca/` | Videoteca (`data.js` é o catálogo; `thumbs/` são as miniaturas) |
| `manual/` | Manual do Criativo em PT e ES |
| `setores/` | O que cada setor encontra no portal |
| `busca/` | Busca em todas as áreas, no Manual e nos vídeos |
| `assets/portal.css`, `assets/portal.js` | Visual, barra do portal e troca de idioma |
| `assets/colecao.js` | Motor de coleções |
| `assets/fotos/` | Fotos (professores vieram do Gravações Técnicas) |

### Áreas e de onde vem o conteúdo

| Área | Fonte |
| --- | --- |
| Videoteca | Catálogo da Videoteca (905 vídeos) |
| Manual do Criativo | Documento do claude.ai, cópia de 28/09/2026 |
| Kit de marca | Cores e fontes dos materiais recentes (a confirmar); logos e modelos a preencher |
| Tutoriais | Escritos a partir do funcionamento da Videoteca, do portal e do Gravações Técnicas |
| Banco de fotos | Fotos dos coordenadores (autorização a confirmar) + exemplos |
| Mural de novidades | Páginas que o marketing criou no claude.ai, por data |
| Glossário | Termos de marketing |
| Materiais por curso | Cursos e turmas do Gravações Técnicas (25/11/2026) + contagem de vídeos; programa e valores a preencher |
| Provas sociais | Calculadas da Videoteca; números institucionais a preencher |
| Central de dúvidas | Manual do Criativo + apresentação do Mapa UniCPO; várias respostas a preencher pelo CS |
| Tutoriais para o aluno | Vídeos da Videoteca (matrícula, documentos, chegada, Manual de Sobrevivência) |
| Perfil dos professores | Coordenadores do Gravações Técnicas + professores frequentes na Videoteca; bio a preencher |
| Guia e agenda de gravação | Manual do Criativo + funcionamento do Gravações Técnicas |
| Guia do visitante | Mapa UniCPO, Tour 3D e vídeos da Videoteca |

Itens com a etiqueta **A preencher**, **A confirmar** ou **Exemplo** ainda precisam de conteúdo ou validação.

### Como mudar conteúdo
- **Item novo numa área:** abra `dados/<área>.js`, copie um item e troque os textos.
- **Área nova:** crie `dados/<nova>.js` (copie um existente) e acrescente uma linha em `dados/areas.js`.
- **Traduzir:** todo texto pode ser `{pt:'...', es:'...'}`. Nas páginas fixas, use `data-es="..."`.

## Videoteca: achar vídeo por print

Na Videoteca, o botão **Achar por print** (ou Ctrl+V com um print) mostra os 10 vídeos mais parecidos. Tudo roda no navegador; o print não é enviado a lugar nenhum.

| Arquivo | O que é |
| --- | --- |
| `videoteca/print-busca.js` | Motor: calcula a "impressão digital" de uma imagem e compara com a base |
| `videoteca/print-tela.js` | A tela (arrastar, colar, resultados) |
| `videoteca/print-indice.js` | A base com as impressões digitais de todos os quadros (gerada, não editar) |
| `ferramentas/gerar-indice-print.js` | Gera a base usando o mesmo código do site |

Precisão medida em 400 vídeos (código do site, no navegador):

| Tipo de print | 1º lugar | Entre os 10 primeiros |
| --- | --- | --- |
| Direto (WhatsApp) | 97,5% | 100% |
| Instagram (com botões e legenda) | 97% | 99,8% |
| Cortado / com zoom | 83% | 98% |
| Momento do vídeo diferente dos quadros guardados | 41% | 64% |

**Quando o catálogo mudar**, gere a base de novo: `node ferramentas/gerar-indice-print.js` (precisa de Node e Playwright).

### Quadros extras e leitura de legendas (em andamento)

Regra de quadros: **15 para vídeos de até 1 minuto**; acima disso, **1 quadro a cada 4 segundos**, com teto de 60.
As legendas dos vídeos são dinâmicas (uma palavra por vez, no meio da tela). Por isso a leitura olha a faixa central
2 vezes por segundo nos primeiros 2 minutos, deixa só o texto branco e guarda apenas palavras que existem em português
ou espanhol. Vídeos marcados como "sem legenda" no catálogo são pulados.

Para rodar tudo em lotes, salvando no GitHub a cada lote: `bash ferramentas/quadros/rodar_tudo.sh`
(precisa de `apt install ffmpeg tesseract-ocr tesseract-ocr-spa tesseract-ocr-por wspanish wbrazilian`).

Hoje a base usa os 5 quadros das miniaturas. Com 15 quadros, o caso mais difícil (print de outro momento do vídeo) melhora, e as legendas lidas ajudam a descobrir países e a reorganizar vídeos.

1. Instale ffmpeg e tesseract (instruções no topo de `ferramentas/quadros/gerar_quadros.py`).
2. Teste com poucos vídeos: `python3 ferramentas/quadros/gerar_quadros.py --baixar --limite 5`
   - ou, com os vídeos numa pasta do computador: `--pasta "caminho/da/pasta"`
3. Rode para todos (sem `--limite`). Ele continua de onde parou se for interrompido.
4. Gere a base de novo: `node ferramentas/gerar-indice-print.js` (fica com cerca de 6 MB).
5. Revise `ferramentas/quadros/saida/sugestoes-paises.csv`: vídeos em que a legenda cita um país, cidade ou gentílico diferente do que está no catálogo. Nada muda no catálogo sem revisão.
6. O texto de todas as legendas fica em `ferramentas/quadros/saida/legendas.json`, para reorganizar categorias depois.

## Ver no computador
Na pasta do projeto:

```bash
python3 -m http.server 8000
```

Depois abra http://localhost:8000.

## Publicar com acesso privado (opção em análise: Cloudflare Pages + Cloudflare Access)

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
