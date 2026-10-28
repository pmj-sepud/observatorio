"""
gerar_paginas.py — gera assets/js/paginas.js com o texto de cada página dos PDFs.

A busca do site usa esse índice para dizer em quais páginas de cada PDF o termo
aparece (com link direto para arquivo.pdf#page=N).

Rode na raiz do repositório sempre que adicionar ou trocar um PDF:

    python ferramentas/gerar_paginas.py

Requer: pip install pypdf
Páginas que são só imagem (sem texto) ficam vazias e não aparecem na busca.
"""
import json
import re
from pathlib import Path

from pypdf import PdfReader

RAIZ = Path(__file__).resolve().parent.parent
SAIDA = RAIZ / "assets" / "js" / "paginas.js"


def texto_paginas(pdf):
    paginas = []
    for p in PdfReader(pdf).pages:
        try:
            t = p.extract_text() or ""
        except Exception:
            t = ""
        paginas.append(re.sub(r"\s+", " ", t).strip())
    return paginas


def main():
    indice = {}
    # o mesmo documento pode estar em várias caixas: indexa uma vez por ID
    for pdf in sorted((RAIZ / "arquivos").glob("*/*.pdf")):
        if pdf.stem not in indice:
            indice[pdf.stem] = texto_paginas(pdf)
            com_texto = sum(1 for t in indice[pdf.stem] if t)
            print(f"{pdf.stem}: {len(indice[pdf.stem])} páginas, {com_texto} com texto")
    js = (
        "/* Gerado por ferramentas/gerar_paginas.py — não editar à mão. */\n"
        "window.OBSERVATORIO_PAGINAS = "
        + json.dumps(indice, ensure_ascii=False, indent=0)
        + ";\n"
    )
    SAIDA.write_text(js, encoding="utf-8")
    print(f"OK: {SAIDA.relative_to(RAIZ)} ({len(js) // 1024} KB)")


if __name__ == "__main__":
    main()
