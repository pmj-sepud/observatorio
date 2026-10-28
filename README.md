# Observatório de Planejamento Urbano — SEPUR Joinville

Repositório e observatório com as 8 caixas temáticas do planejamento urbano
(conforme a planilha `relatorio_caixas_conversas_urbanas-v2.xlsx`).
Publicado em https://pmj-sepud.github.io/observatorio/ e acessível pelo card
"Observatório de Planejamento Urbano" do [Portal BI](https://pmj-sepud.github.io/portal-bi/).

## Como cadastrar documentos

Tudo vem de `assets/js/caixas.js`.

1. Coloque o PDF em `arquivos/Caixa N/` de **cada** caixa onde ele aparece na planilha,
   com o nome igual ao ID (ex.: `arquivos/Caixa 1/C1-02.pdf`).
2. Cadastre o documento uma vez em `DOCS`:

```js
"C1-02": { titulo: "Responsabilidades UPL", unidade: "UPL", conteudo: "...",
           palavras: "Plano Diretor, ...", tipo: "Apresentação",
           status: "vigente", arquivo: true }
```

3. Inclua o ID em `docs` de cada caixa onde ele deve aparecer. O link para
   `arquivos/Caixa N/<ID>.pdf` é montado automaticamente.

4. Atualize o índice de páginas da busca (requer `pip install pypdf`):
   `python ferramentas/gerar_paginas.py`. Ele grava `assets/js/paginas.js`, usado
   para mostrar em quais páginas de cada PDF o termo buscado aparece.

`status`: `vigente`, `em-elaboracao` ou `arquivado`. A contagem de cada caixa é automática.

Ao alterar `caixas.js` ou `portal.css`, troque o `?v=` correspondente em `index.html`
(ex.: `?v=20261029`) para que os navegadores não usem a versão antiga em cache.
