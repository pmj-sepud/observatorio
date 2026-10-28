/**
 * caixas.js — Catálogo do Observatório de Planejamento Urbano (fonte única de dados).
 *
 * Toda a página é gerada a partir daqui. Para incluir um documento, basta
 * acrescentar um objeto em `documentos` da caixa correspondente:
 *
 *   { titulo: "Lei Complementar nº 470/2017 (LOT)", tipo: "Lei", ano: 2017,
 *     status: "vigente", bairro: "Todos", link: "https://..." }
 *
 * `status` aceita: "vigente", "em-elaboracao" ou "arquivado".
 * A contagem de documentos de cada caixa é calculada automaticamente.
 */
window.OBSERVATORIO = {
  atualizacao: "2026-10-27",
  caixas: [
    {
      id: "upl", sigla: "UPL", cor: "#2563eb",
      nome: "Planejamento Territorial, Legislação e Expansões Urbanas",
      descricao: "Instrumentos normativos, leis ordinárias, PDDS, LOT, expansões urbanas (AEUs) e outorgas.",
      documentos: []
    },
    {
      id: "umo", sigla: "UMO", cor: "#4f46e5",
      nome: "Mobilidade Urbana Inteligente, Infraestrutura e Tráfego",
      descricao: "Engenharia de tráfego, contagens YOLO, simulação SUMO, rede de passeios públicos e binários.",
      documentos: []
    },
    {
      id: "upr", sigla: "UPR", cor: "#0d9488",
      nome: "Projetos Estratégicos, Arquitetura e Equipamentos Públicos",
      descricao: "Anteprojetos, Parque Linear Porto Cachoeira, reuso de patrimônio histórico e orla.",
      documentos: []
    },
    {
      id: "sbn", sigla: "SBN", cor: "#059669",
      nome: "Sustentabilidade, Soluções Baseadas na Natureza e Clima",
      descricao: "Adaptação climática (PlanClima), SbN, jardins de chuva, canteiros pluviais e calçadas drenantes.",
      documentos: []
    },
    {
      id: "uin", sigla: "UIN", cor: "#d97706",
      nome: "Instrumentos Urbanísticos, Licenciamento e Matriz de Impacto",
      descricao: "Estudos de Impacto de Vizinhança (EIV), Matriz de Impacto, EVA e Operações Urbanas Consorciadas.",
      documentos: []
    },
    {
      id: "ug", sigla: "PE/UG", cor: "#9333ea",
      nome: "Inteligência Geográfica, Dados e Indicadores Urbanos",
      descricao: "Geoprocessamento (SIMGeo), pesquisas de caminhabilidade, estatísticas IBGE e Revista Lente Urbana.",
      documentos: []
    },
    {
      id: "procedimentos", sigla: "PRC", cor: "#be123c",
      nome: "Procedimentos da SEPUR",
      descricao: "Fluxos de trabalho, manuais, instruções normativas, modelos de documentos e rotinas internas da Secretaria.",
      documentos: []
    }
  ]
};
