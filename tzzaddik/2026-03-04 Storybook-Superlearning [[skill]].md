---

name: storybook-superlearning description: > Use esta [skill] SEMPRE que o usuário quiser transformar qualquer conteúdo educacional, protocolo, material de treinamento, livro, curso, documento técnico ou estratégico em um pacote completo de superaprendizagem com múltiplos formatos de saída.

ACIONE quando o usuário disser:

- "crie um storybook de..."
- "transforme isso em material de estudo"
- "quero memorizar esse conteúdo"
- "crie flashcards / palácio da memória / quiz sobre..."
- "gere ativos de aprendizagem a partir de..."
- "múltiplas saídas de uma única fonte"
- "tutorial interativo com técnicas de memorização"
- qualquer combinação de: ebook + quiz + flashcards + active recall + curva do esquecimento

Esta skill produz ATÉ 5 ATIVOS SIMULTÂNEOS a partir de UMA única fonte de dados:

1. Storybook HTML interativo (web app completo)
2. eBook PDF premium (dark theme, formatado)
3. Documento Markdown estruturado
4. Skill reutilizável (SKILL.md do padrão)
5. Resumo executivo (mini-doc de referência rápida)

---

# Storybook SuperLearning Skill

## Visão Geral

Esta skill converte **qualquer fonte de conteúdo** em um pacote completo de superaprendizagem, produzindo múltiplos ativos de aprendizagem a partir de uma única entrada. O modelo é escalável e agnóstico ao conteúdo — funciona para teologia, finanças, medicina, engenharia, legislação, treinamentos corporativos, etc.

---

## Arquitetura: Uma Fonte → Múltiplas Saídas

```
ENTRADA (fonte única)
    │
    ├── Texto / PDF / LaTeX / Transcrição / Notas / Slides
    │
    ▼
[MOTOR DE ANÁLISE E EXTRAÇÃO]
    │
    ├── Extração de conceitos-chave (5–12 por tema)
    ├── Mapeamento de estrutura hierárquica
    ├── Identificação de contrastes (sim/não)
    ├── Sequências ordenadas (para palácio e acrônimos)
    └── Perguntas de nível 1-3 (básico → analítico → síntese)
    │
    ▼
SAÍDAS SIMULTÂNEAS (até 5 ativos)
    │
    ├── 📱 ATIVO 1: Storybook HTML Interativo
    ├── 📖 ATIVO 2: eBook PDF Premium
    ├── 📝 ATIVO 3: Documento Markdown Estruturado
    ├── 🔧 ATIVO 4: Skill Reutilizável (SKILL.md)
    └── 📋 ATIVO 5: Resumo Executivo (1 página)
```

---

## Protocolo de Análise do Conteúdo

Antes de gerar qualquer ativo, Claude deve executar internamente:

### Passo 1 — Extração Estrutural

```
1. Qual é o TEMA CENTRAL? (1 frase)
2. Quais são os PILARES (3–8 conceitos principais)?
3. Há SEQUÊNCIAS ordenadas? (para palácio + acrônimos)
4. Há CONTRASTES claros? (para cartões sim/não)
5. Quais são os CONCEITOS MAIS DIFÍCEIS de memorizar?
6. Qual é a DECLARAÇÃO ou SÍNTESE final do material?
```

### Passo 2 — Geração de Componentes

Para cada ativo, Claude deve gerar:

|Componente|Quantidade Mínima|Técnica|
|---|---|---|
|Flashcards|6–10 pares|Active Recall|
|Itens do Palácio|= número de itens na sequência|Method of Loci|
|Pares Sim/Não|2–4 contrastes|Memória Discriminativa|
|Questões Quiz|5–8 perguntas|Recuperação Ativa|
|Itens de Recall|4–6 exercícios|Esforço de Memória|
|Semanas do Roadmap|6–10 semanas|Progressão Pedagógica|

### Passo 3 — Adaptação Semântica

- Substituir terminologia técnica por linguagem do domínio do usuário
- Criar âncoras do palácio compatíveis com a cultura do conteúdo
- Adaptar o tom: formal/acadêmico, espiritual, corporativo, técnico, etc.

---

## ATIVO 1: Storybook HTML Interativo

### Estrutura Obrigatória (8 seções)

```
1. INTRO          → Mapa mental + como usar + hero section
2. FLASHCARDS     → Cartões flip (frente/verso), mnemônicos
3. SIM/NÃO        → Pares de contraste lado a lado
4. PALÁCIO        → 7 cômodos com âncoras absurdas
5. QUIZ           → 5–8 perguntas, score ao vivo
6. CURVA          → Ebbinghaus: sem revisão × com revisão
7. ACTIVE RECALL  → Campos de escrita + revelar resposta
8. ROADMAP        → Timeline + checklist diário interativo
```

### Padrão Visual

- **Background:** `#0A0C10` (deep dark) ou variação temática
- **Accent:** cor primária do conteúdo (teologia=ouro, medicina=azul, finanças=verde, etc.)
- **Fonte display:** Cinzel / Playfair / Bebas — característica, nunca genérica
- **Fonte corpo:** Crimson Pro / DM Serif / Source Serif — legível e elegante
- **Cards:** bordas com 15% opacidade da cor accent, radius 16px
- **Animação:** fadeUp na entrada de seções, flip de 0.6s nos flashcards

### Template de Código Base

```jsx
// Estrutura React / HTML mínima
const SECTIONS = ['intro','flashcards','yesno','palace','quiz','curve','recall','roadmap'];

function App() {
  const [tab, setTab] = useState('intro');
  // Estado dos quizzes
  const [quizAnswers, setQuizAnswers] = useState({});
  // Estado dos checks
  const [checks, setChecks] = useState({});

  return (
    <div>
      <Nav sections={SECTIONS} active={tab} onSelect={setTab} />
      <ProgressBar />
      <Main>
        {tab === 'intro'      && <IntroSection data={CONTENT} />}
        {tab === 'flashcards' && <FlashcardsSection data={CONTENT.flashcards} />}
        {tab === 'yesno'      && <YesNoSection data={CONTENT.ynPairs} />}
        {tab === 'palace'     && <PalaceSection data={CONTENT.palace} />}
        {tab === 'quiz'       && <QuizSection data={CONTENT.quiz} answers={quizAnswers} onAnswer={setQuizAnswers} />}
        {tab === 'curve'      && <CurveSection />}
        {tab === 'recall'     && <RecallSection data={CONTENT.recall} />}
        {tab === 'roadmap'    && <RoadmapSection data={CONTENT.roadmap} checks={checks} onCheck={setChecks} />}
      </Main>
    </div>
  );
}
```

### Schema de Dados (CONTENT object)

```javascript
const CONTENT = {
  meta: {
    title: string,           // título principal
    subtitle: string,        // subtítulo / tema
    accentColor: string,     // hex da cor primária
    verse: string,           // citação de abertura (opcional)
  },
  pillars: [                 // 4–8 pilares principais
    { icon, title, text }
  ],
  flashcards: [              // 6–10 flashcards
    { q: string, a: string, tag: string }
  ],
  ynPairs: [                 // 2–4 contrastes
    {
      topic: string,
      no:  { title, points: string[] },
      yes: { title, points: string[] }
    }
  ],
  palace: [                  // = número de itens da sequência
    { num, loc, anchor, concept, scene }
  ],
  quiz: [                    // 5–8 perguntas
    { q, opts: string[4], correct: number, feedback: string }
  ],
  recall: [                  // 4–6 exercícios
    { prompt, answer }
  ],
  roadmap: [                 // 6–10 semanas
    { week, theme, question, action, tag }
  ],
  checklist: string[],       // 5–8 itens de checklist diário
  finalDeclaration: string,  // parágrafo de síntese/encerramento
};
```

---

## ATIVO 2: eBook PDF Premium

### Padrão Visual PDF

- **Fundo:** `#0D1117` em todas as páginas
- **Borda dourada:** rect interno 0.8cm de margem, espessura 0.5pt
- **Capa:** fundo deep black + bandas laterais coloridas + título centralizado
- **Rodapé:** `Título · Storybook de Superaprendizagem · Página N`

### Capítulos Padrão

```
Capa (template especial)
Índice (tabela com hyperlinks)
Cap 1  — Mapa Mental (tabela de pilares)
Cap 2  — Fundamentação + Flashcards (tabelas 2 colunas)
Cap 3  — Sequência Principal (tabela SEVEN ou equivalente)
Cap 4  — Mecanismo Central (tabela de proporção/fórmula)
Cap 5  — Palácio da Memória (lista estruturada)
Cap 6  — Por Que Sim/Não (tabelas coloridas lado a lado)
Cap 7  — Curva do Esquecimento (tabela de retenção)
Cap 8  — Quiz (tabelas pergunta/resposta)
Cap 9  — Roadmap (tabela de semanas)
Cap 10 — Active Recall (tabelas com campos em branco)
Cap 11 — Declaração Final (ColorBlock dourado)
```

### Paleta de Cores por Domínio

|Domínio|Accent|Panel BG|Card BG|
|---|---|---|---|
|Teológico/Espiritual|`#C9A84C` (ouro)|`#111418`|`#181D24`|
|Financeiro|`#4CAF7A` (verde)|`#0D1A12`|`#111D16`|
|Médico/Saúde|`#4C8EC9` (azul)|`#0D1218`|`#111820`|
|Jurídico|`#8C4CC9` (púrpura)|`#130D18`|`#19111E`|
|Corporativo|`#C9C94C` (amarelo)|`#181810`|`#1E1E14`|
|Tecnológico|`#4CC9C9` (ciano)|`#0D1818`|`#111E1E`|

### Código ReportLab Reutilizável

```python
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Table, TableStyle, PageBreak, Spacer
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY

# Sempre usar esta função para páginas
def page_background(canvas, doc, bg_color, accent_color, title):
    canvas.saveState()
    canvas.setFillColor(bg_color)
    canvas.rect(0, 0, *A4, fill=1, stroke=0)
    canvas.setStrokeColor(accent_color)
    canvas.setLineWidth(0.5)
    canvas.rect(0.8*cm, 0.8*cm, A4[0]-1.6*cm, A4[1]-1.6*cm, fill=0, stroke=1)
    canvas.setFillColor(accent_color)
    canvas.setFont("Helvetica", 8)
    canvas.drawCentredString(A4[0]/2, 0.5*cm, f"{title}  ·  Página {doc.page}")
    canvas.restoreState()

# Estilo de tabela padrão dark
def dark_table_style(accent, bg1, bg2):
    return TableStyle([
        ('BACKGROUND', (0,0), (-1,0), bg1),
        ('TEXTCOLOR', (0,0), (-1,0), accent),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [bg1, bg2]),
        ('TEXTCOLOR', (0,1), (-1,-1), colors.HexColor("#E8DCC8")),
        ('GRID', (0,0), (-1,-1), 0.3, accent),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ])
```

---

## ATIVO 3: Documento Markdown

### Estrutura Padrão

```markdown
# [Título] — Storybook de Superaprendizagem
## [Subtítulo]

> *[citação de abertura]*

---

## 📌 Sobre Este Documento
[descrição das técnicas usadas]

## 🗺️ Mapa Mental: Os N Pilares
[tabela markdown]

## 1. [Capítulo 1]
### [Subcapítulo]
[conteúdo]
[tabela de contraste]

## 2. Técnica [SEQUÊNCIA]
### Acrônimo Mnemônico
[tabela dos passos]

## 3. [Mecanismo Central]
[fórmula ou proporção visual em código block]

## 4. Palácio da Memória
[lista por cômodo com âncoras]

## 5. Flashcards de Revisão
[pares pergunta/resposta separados por hr]

## 6. Cartões Por Que Sim / Por Que Não
[tabelas de contraste]

## 7. Curva do Esquecimento — Plano de Revisão
[tabela + ASCII art da curva]

## 8. Roadmap
[tabela de semanas]

## 9. Active Recall — Exercícios
[perguntas com linhas em branco]

## 10. Declaração Final
> *[citação final]*
---
*[créditos e técnicas usadas]*
```

---

## ATIVO 4: Skill Reutilizável (este arquivo)

### Quando Atualizar Esta Skill

- Novo domínio de conteúdo com necessidades visuais específicas
- Nova técnica de memorização a ser incorporada
- Novo formato de ativo de saída
- Feedback do usuário sobre qualidade dos componentes gerados

### Campos Obrigatórios no YAML

```yaml
---
name: storybook-superlearning
description: >
  [descrição com triggers explícitos]
---
```

---

## ATIVO 5: Resumo Executivo

### Formato (1 página A4 ou equivalente)

```
TÍTULO
SUBTÍTULO

CONCEITO CENTRAL (2–3 linhas)

OS N PILARES
1. Pilar: conceito em 1 linha
2. ...

SEQUÊNCIA PRINCIPAL (ex: SEVEN)
1 → 2 → 3 → ... → N

FÓRMULA / PRINCÍPIO CENTRAL
[visual ou proporção]

PLANO DE REVISÃO
Hoje → Amanhã → Dia 3 → Dia 7 → Dia 14 → Dia 35

DECLARAÇÃO / SÍNTESE FINAL
"..."
```

---

## Fluxo de Execução

### Para UMA saída

```
1. Analisar conteúdo → extrair componentes
2. Gerar ativo solicitado com máxima qualidade
3. Apresentar ao usuário
```

### Para MÚLTIPLAS saídas simultâneas

```
1. Analisar conteúdo UMA VEZ → popular CONTENT object completo
2. Executar em paralelo:
   - build_html()   → arquivo .html ou .jsx
   - build_pdf()    → script Python + executar
   - build_md()     → arquivo .md
   - build_skill()  → arquivo SKILL.md
   - build_exec()   → arquivo .md (1 página)
3. Apresentar todos os arquivos juntos
4. Oferecer refinamentos individuais
```

### Ordem de Prioridade (quando recursos são limitados)

```
1º HTML Interativo  (maior impacto pedagógico)
2º Markdown         (mais versátil, reutilizável)
3º PDF eBook        (consumo offline, impressão)
4º Skill            (reutilização futura)
5º Resumo Executivo (referência rápida)
```

---

## Checklist de Qualidade

Antes de entregar qualquer ativo, verificar:

- [ ] Mínimo de 6 flashcards com perguntas significativas (não triviais)
- [ ] Palácio com âncoras ABSURDAS e VÍVIDAS (genéricas não fixam)
- [ ] Quiz com feedback explicativo em cada resposta
- [ ] Curva do Esquecimento com datas ESPECÍFICAS (não genéricas)
- [ ] Active Recall com campo em branco ANTES da resposta
- [ ] Roadmap com AÇÃO CONCRETA (não apenas reflexão)
- [ ] HTML com navegação funcional e animações
- [ ] PDF com fundo escuro e tipografia legível sobre dark
- [ ] Markdown com tabelas formatadas corretamente
- [ ] Declaração final presente em TODOS os ativos

---

## Exemplos de Uso

### Input 1: Material Teológico/Ministerial

```
"Crie um storybook do Protocolo Ministerial de Expansão"
→ Accent: ouro (#C9A84C), palácio de cômodos da casa, mnemônico SEVEN
```

### Input 2: Conteúdo Financeiro

```
"Transforme esse PDF de investimentos em material de memorização"
→ Accent: verde (#4CAF7A), palácio de sala de trading, acrônimo AM20
```

### Input 3: Protocolo Médico

```
"Preciso memorizar esse protocolo de emergência"
→ Accent: azul (#4C8EC9), palácio de hospital, sequência ABCDE
```

### Input 4: Treinamento Corporativo

```
"Crie flashcards e quiz do nosso manual de vendas"
→ Accent: âmbar (#C9A04C), palácio de escritório, funil de vendas
```

### Input 5: Material Jurídico

```
"Transforme essa lei em material de estudo"
→ Accent: púrpura (#8C4CC9), palácio de tribunal, artigos em sequência
```

---

## Notas Técnicas

### HTML/React

- Usar `useState` para navegação entre seções, quiz e checklist
- Nunca usar `localStorage` em artifacts Claude.ai
- Fontes via Google Fonts CDN (Cinzel + Crimson Pro como padrão)
- Tailwind não disponível — usar CSS inline ou `<style>` block

### PDF (ReportLab)

- Instalar com `pip install reportlab --break-system-packages`
- Nunca usar caracteres Unicode especiais em fontes built-in
- Usar `KeepTogether` para evitar quebras ruins em tabelas pequenas
- Callback `onFirstPage` / `onLaterPages` para backgrounds customizados

### Markdown

- Testar que tabelas estão com alinhamento correto
- Blocos de código para visualizações ASCII (curvas, proporções)
- Headers H1/H2/H3 consistentes para navegação

---

_Skill criada a partir do Protocolo Estratégico Ministerial — padrão genérico para superaprendizagem de qualquer conteúdo._ _Versão 1.0 — Março 2026_