import pdfplumber
from markdownify import markdownify as md

pdf_path = "c:/Users/Admin/Summs/correction/docs/NCFSE-2023-August_2023.pdf"
md_path = "c:/Users/Admin/Summs/correction/docs/NCFSE-2023-August_2023.md"

markdown_content = ""

with pdfplumber.open(pdf_path) as pdf:
    for page in pdf.pages:
        text = page.extract_text()
        if text:
            markdown_content += md(text) + "\n\n"

with open(md_path, "w", encoding="utf-8") as f:
    f.write(markdown_content)

print(f"Markdown saved to {md_path}")
