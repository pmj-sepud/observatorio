/**
 * caixas.js — Catálogo do Observatório de Planejamento Urbano (fonte única de dados).
 * Origem: planilha relatorio_caixas_conversas_urbanas-v2.xlsx.
 *
 * Toda a página é gerada a partir daqui. Cada documento é cadastrado uma única
 * vez em `DOCS` (chave = ID da planilha) e as caixas listam os IDs em `docs`,
 * pois um mesmo documento pode aparecer em várias caixas:
 *
 *   "C1-01": { titulo: "...", conteudo: "...", unidade: "UPL", palavras: "LOT, ...",
 *              tipo: "Apresentação", status: "vigente", arquivo: true }
 *
 * Os PDFs ficam em `arquivos/Caixa N/`, com o nome igual ao ID, em cada caixa
 * onde o documento aparece (ex.: arquivos/Caixa 7/C7-04.pdf). Com
 * `arquivo: false`, o documento aparece na lista como "Sem arquivo".
 * `status` aceita: "vigente", "em-elaboracao" ou "arquivado".
 * A contagem de documentos de cada caixa é calculada automaticamente.
 */
(function () {
  var DOCS = {
    "C1-01": {
      titulo: "Estrutura UPL, Responsabilidades UPL", unidade: "UPL",
      conteudo: "Estrutura e Atribuições da Unidade de Planejamento (UPL); Expansões Urbanas e Organização dos Bairros; Eixos de Revisão da LOT (Lei de Ordenamento Territorial); Uso do NotebookLM para Legislação Urbanística",
      palavras: "LOT, Glossário, Zoneamento, Procedimentos",
      tipo: "Apresentação", status: "vigente", arquivo: true
    },
    "C1-02": {
      titulo: "Responsabilidades UPL", unidade: "UPL",
      conteudo: "Marco Legal e Política Urbana, Instrumentos Urbanísticos e Legislação de Joinville, Dinâmica Prática e Simulação",
      palavras: "Jogo, Gestão Democrática da Cidade, Institutos Jurídicos e Políticos, Institutos Tributários e Financeiros, Planos Setoriais, Parcelamento, Uso e Ocupação do Solo, Plano Diretor, Constituição Federal, Estatuto da Cidade",
      tipo: "Apresentação", status: "vigente", arquivo: false
    },
    "C5-01": {
      titulo: "Instrumentos Urbanísticos", unidade: "UIN",
      conteudo: "Apresentação de instrumentos urbanísticos",
      palavras: "OODC, OOAU, TDC, OUC, EIV, Estudo de Impacto de Vizinhança, Outorga",
      tipo: "Apresentação", status: "vigente", arquivo: false
    },
    "C6-01": {
      titulo: "Projetos de pesquisas, Assessores técnicos", unidade: "NAT",
      conteudo: "Bairro a Bairro 2026, Anteprojeto de Lei Incentivo ao Centro, Pesquisa Eixos de Adensamento, Diretrizes para implantação de Parques Lineares Urbanos na AUPC, Diretrizes para implantação de Parques Esponja - AUIO e adjacências",
      palavras: "Bairro a bairro, Centro, Adensamentos, Diretrizes, Parques Lineares, AUPC, AUIO",
      tipo: "Apresentação", status: "vigente", arquivo: true
    },
    "C7-01": {
      titulo: "Estrutura UPE, Responsabilidades UPE", unidade: "UPE",
      conteudo: "Projetos e Produtos UPE, Linhas de Atuação e Ciclo de Pesquisa UPE, Funcionamento de Pesquisa SEPUR",
      palavras: "Pesquisa, Procedimentos",
      tipo: "Apresentação", status: "vigente", arquivo: true
    },
    "C7-02": {
      titulo: "Estrutura UPR, Responsabilidades UPR", unidade: "UPR",
      conteudo: "Projetos e Produtos UPR, Procedimentos UPR, Projetos especiais, Projetos estratégicos",
      palavras: "Projetos especiais, Procedimentos",
      tipo: "Apresentação", status: "vigente", arquivo: true
    },
    "C7-03": {
      titulo: "Estrutura UAD, Responsabilidades UAD", unidade: "UAD",
      conteudo: "Projetos e Produtos UAD, Procedimentos UAD",
      palavras: "Administrativo, Procedimentos",
      tipo: "Apresentação", status: "vigente", arquivo: true
    },
    "C7-04": {
      titulo: "Estrutura UGP, Responsabilidades UGP", unidade: "UGP",
      conteudo: "Projetos e Produtos UGP, Procedimentos UGP",
      palavras: "Geoprocessamento, Procedimentos, Instrumentos urbanísticos, SIMGeo",
      tipo: "Apresentação", status: "vigente", arquivo: true
    },
    "C7-05": {
      titulo: "Estrutura UMO, Responsabilidades UMO", unidade: "UMO",
      conteudo: "Estrutura Organizacional e Missão da UMO, Smart Mobility: Transformando Dados em Decisões, Eficiência Viária e Infraestrutura Estratégica, Mobilidade Ativa e Qualificação Urbana, Gestão de Processos e Desburocratização",
      palavras: "Smart mobility, Obras e duplicações, Eficiência viária, Qualificação urbana, Mobilidade, Mobilidade ativa",
      tipo: "Apresentação", status: "vigente", arquivo: true
    },
    "C7-06": {
      titulo: "Estrutura GAB, Responsabilidades GAB", unidade: "GAB",
      conteudo: "Estratégia, gestão, diretoria",
      palavras: "Estratégia, Gestão, Diretoria",
      tipo: "Apresentação", status: "vigente", arquivo: true
    },
    "C8-01": {
      titulo: "Smart City Curitiba - 2026", unidade: "UPE", ano: 2026,
      conteudo: "Urbanismo Sustentável e Mobilidade, Qualificação Central, Retrofit e Preservação do Patrimônio, Design, Inovação e Resolução de Problemas",
      palavras: "SBN, Desenvolvimento Urbano e Soluções Baseadas na Natureza (SBN), Fórum de Mobilidade Urbana e Gestão por Dados, Criatividade, Arte Urbana e Diagnóstico Digital, Reabilitação Urbana, Retrofit, Instrumentos Urbanísticos e Incentivos, Design",
      tipo: "Relatório de evento", status: "vigente", arquivo: false
    }
  };

  var CAIXAS = [
    {
      id: "upl", sigla: "UPL", cor: "#2563eb", unidades: "UPL, UPE, UGP",
      nome: "Planejamento Territorial, Legislação e Expansões",
      descricao: "Propostas de revisão da LOT, diretrizes para AEU Sul, Fazenda Pirabeiraba, Polo Intermodal Babitonga e alinhamento de perímetros urbanos.",
      docs: ["C1-01", "C1-02", "C5-01"]
    },
    {
      id: "umo", sigla: "UMO", cor: "#4f46e5", unidades: "UMO, UPR",
      nome: "Mobilidade Urbana Inteligente, Infraestrutura e Tráfego",
      descricao: "Projetos viários (duplicações, pontes), Smart Mobility, SUMO, Linha da Inovação, transporte coletivo e segurança viária.",
      docs: ["C7-05", "C7-06", "C8-01"]
    },
    {
      id: "upr", sigla: "UPR", cor: "#0d9488", unidades: "UPR, UPL",
      nome: "Projetos Estratégicos, Arquitetura e Equipamentos",
      descricao: "Parque Porto Cachoeira, Parque Linear Doca, acupunturas urbanas, praças, Palácio das Orquídeas e anexo do MAJ.",
      docs: ["C7-02", "C8-01"]
    },
    {
      id: "sbn", sigla: "SBN", cor: "#059669", unidades: "UMO, UPL, UPR",
      nome: "Sustentabilidade, Soluções Baseadas na Natureza e Clima",
      descricao: "Soluções Baseadas na Natureza (SbN), drenagem sustentável, resiliência climática, microdrenagem no Vila Nova e Parque Guarani.",
      docs: ["C8-01"]
    },
    {
      id: "uin", sigla: "UIN", cor: "#d97706", unidades: "UGP, UPL, UIN",
      nome: "Instrumentos Urbanísticos, Licenciamento e Matriz",
      descricao: "Estudo de Impacto de Vizinhança (EIV), Outorga Onerosa, Operações Urbanas Consorciadas (OUC), Fator FSI e Grupo GEIN.",
      docs: ["C7-04", "C8-01", "C5-01"]
    },
    {
      id: "ug", sigla: "PE/UG", cor: "#9333ea", unidades: "UGP, UPE",
      nome: "Inteligência Geográfica, Dados e Indicadores Urbanos",
      descricao: "Plataforma SIMGeo, Aplicativo de Infraestrutura, diagnósticos socioeconômicos do SIM, gestão SEI e Guias Ilustrados UPE.",
      docs: ["C7-04", "C6-01", "C7-06", "C8-01"]
    },
    {
      id: "procedimentos", sigla: "PRC", cor: "#be123c", unidades: "UAD, UGP, UIN, UMO, UPL, UPE, UPR, NAT",
      nome: "Unidades e Procedimentos SEPUR",
      descricao: "Apresentações e procedimentos de funcionamento das unidades da SEPUR.",
      docs: ["C1-01", "C7-01", "C7-02", "C7-03", "C7-04", "C7-05", "C7-06"]
    },
    {
      id: "eventos", sigla: "REF", cor: "#0891b2", unidades: "UAD, UGP, UIN, UMO, UPL, UPE, UPR, NAT",
      nome: "Referências e Participações em Eventos",
      descricao: "Apresentações de referências e relatórios de participações em eventos.",
      docs: ["C8-01"]
    }
  ];

  // cada caixa recebe sua própria cópia do documento, com o link para a pasta da caixa
  CAIXAS.forEach(function (c, i) {
    c.documentos = c.docs.map(function (id) {
      var d = { id: id }, k;
      for (k in DOCS[id]) d[k] = DOCS[id][k];
      d.link = d.arquivo ? "arquivos/Caixa%20" + (i + 1) + "/" + id + ".pdf" : "";
      return d;
    });
  });

  window.OBSERVATORIO = { atualizacao: "2026-10-28", documentos: DOCS, caixas: CAIXAS };
})();
