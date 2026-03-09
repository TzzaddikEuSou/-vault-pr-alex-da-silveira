---
tipo: pipeline
titulo: Pipeline Vida em M
projeto: Vida em M
tags: [motor, workflow, rules]
---

# 🔄 Pipeline — Vida em M

## Entradas Suportadas

| Tipo | Como processar |
|------|---------------|
| PDF, DOCX, PPTX | Extrair texto via python |
| TXT, MD, CSV, JSON | Ler diretamente |
| MP3 / MP4 | Transcrição ou roteiro |
| Imagens | Extrair texto visível |
| URL | web_fetch → processar como TXT |
| Texto livre | Decompor em tópicos |

---

## Saídas Disponíveis

| Formato | Descrição |
|---------|-----------|
| PDF dark theme | Visual premium |
| DOCX imprimível | Para imprimir |
| Markdown | Estruturado |
| XLSX | Flashcards + progresso |
| PPTX | Apresentação |
| Storybook JSX | Interativo |
| Storybook + Áudio | HTML com narração |
| Cards A4 | Impressão frente/verso |
| Infográfico SVG | Visual |
| Quiz PDF | Com gabarito |
| Script narração | TXT + JSON |
| Roteiro MP4 | Timestamps + narração |

---

## Decisão Automática

```
conteúdo > 5 tópicos  → PDF + Storybook + MD + Cards
conteúdo ≤ 5 tópicos  → MD + Cards
pediu "imprimir"       → PDF + Cards A4
pediu "ouvir"/"áudio" → Storybook HTML + Áudio
pediu "vídeo"/"aula"  → Storybook HTML + Roteiro MP4
tem dados/números     → XLSX + Infográfico SVG
pediu "testar"/"prova"→ Quiz PDF + gabarito
pediu "tudo"          → TODOS os formatos
```

---

## Checklist Antes de Entregar

- [ ] Conteúdo fiel à entrada (sem invenções)
- [ ] Interrogatório concluído
- [ ] Filtro cristocêntrico aplicado
- [ ] Flashcards atômicos (1 conceito por card)
- [ ] PDF: capa + sumário + capítulos
- [ ] Storybook: ≥3 capítulos + quiz final
- [ ] Cards: A4 imprimível, frente espelhada

---

## Identidade Visual

```
Cores: #08080e · #7b6cff · #ff6cb3 · #6cffc8 · #ffb84d
Fonts: Syne 800 (títulos) + DM Sans 400/500 (corpo)
Raio: 18–32px
Efeitos: glassmorphism · glow radial · gradientes 135°
Tom: Direto · motivador · PT-BR · frases curtas
```
