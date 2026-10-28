# Observatório de Planejamento Urbano — SEPUR Joinville

Repositório e observatório com as 7 caixas temáticas do planejamento urbano.
Publicado em https://pmj-sepud.github.io/observatorio/ e acessível pelo card
"Observatório de Planejamento Urbano" do [Portal BI](https://pmj-sepud.github.io/portal-bi/).

## Como cadastrar documentos

Tudo vem de `assets/js/caixas.js`. Acrescente um objeto em `documentos` da caixa:

```js
{ titulo: "Lei Complementar nº 470/2017 (LOT)", tipo: "Lei", ano: 2017,
  status: "vigente", bairro: "Todos", link: "https://..." }
```

`status`: `vigente`, `em-elaboracao` ou `arquivado`. A contagem de cada caixa é automática.
