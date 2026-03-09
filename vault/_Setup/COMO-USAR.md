# ⚙️ Como Usar Este Vault no Obsidian

## 1. Abrir o Vault

1. Baixe e instale o [Obsidian](https://obsidian.md)
2. Abra o aplicativo
3. Clique em **"Open folder as vault"**
4. Selecione a pasta descompactada deste arquivo

---

## 2. Estrutura de Pastas

```
vault/
├── README.md                  ← Entrada principal
├── Portal-da-Graca/           ← Álbum + Podcast
│   ├── Album/
│   │   ├── 00_BACKLOG.md      ← Status das 12 faixas
│   │   ├── identidade-album.md
│   │   ├── letras-completas.md
│   │   └── prompts-suno.md
│   ├── Podcast/
│   │   ├── 00_SERIE.md        ← 12 episódios
│   │   └── roteiros/ep01-...md
│   ├── Marketing/estrategia.md
│   └── Registro/modelo-registro.md
│
├── Vida-em-M/                 ← Motor de aprendizagem
│   ├── README.md
│   ├── Motor/
│   │   ├── 00_PIPELINE.md
│   │   └── 01_INTERROGATORIO.md
│   ├── Teologia/
│   │   ├── grafo-do-evangelho.md
│   │   └── gerador-sermao.md
│   ├── App/prd.md
│   └── Expansoes/README.md
│
└── _Setup/COMO-USAR.md        ← Este arquivo
```

---

## 3. Plugins Recomendados

Instalar em: **Configurações → Community Plugins**

| Plugin | Para que serve |
|--------|---------------|
| **Dataview** | Listar faixas por status automaticamente |
| **Kanban** | Quadro de tarefas visual |
| **Templater** | Criar novas letras/roteiros com modelo |
| **Calendar** | Marcar dias de estudo / gravação |

---

## 4. Fluxo de Trabalho

### Para o álbum:
1. Abrir `Portal-da-Graca/Album/00_BACKLOG.md`
2. Marcar status da faixa
3. Copiar prompt de `prompts-suno.md`
4. Gerar no Suno AI
5. Atualizar backlog

### Para o podcast:
1. Abrir `Podcast/00_SERIE.md`
2. Escolher episódio
3. Criar `roteiros/ep0X-titulo.md`
4. Gravar e publicar

### Para estudo/sermão:
1. Abrir `Vida-em-M/Motor/01_INTERROGATORIO.md`
2. Responder perguntas
3. Consultar `Teologia/grafo-do-evangelho.md`
4. Usar `Teologia/gerador-sermao.md`
5. Gerar outputs via pipeline

---

## 5. Links Rápidos (copiar para o início do README)

- [[Portal-da-Graca/Album/00_BACKLOG|Status do Álbum]]
- [[Portal-da-Graca/Podcast/00_SERIE|Série de Podcast]]
- [[Vida-em-M/Motor/01_INTERROGATORIO|Criar Material]]
- [[Vida-em-M/Teologia/gerador-sermao|Gerar Sermão]]
