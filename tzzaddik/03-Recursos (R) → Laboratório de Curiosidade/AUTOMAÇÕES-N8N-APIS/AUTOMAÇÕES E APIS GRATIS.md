Com base no repositório de APIs de IA gratuitas e nos guias de ferramentas fornecidos, aqui está a lista detalhada de todos os links, organizada por categorias técnicas. Esta organização segue a estrutura de base de conhecimento necessária para a **Camada 1 (Diretiva)** de uma arquitetura de automação.

### 🧠 Processamento de Texto (Large Language Models - LLMs)

Esta categoria foca em ferramentas de inferência para modelos de linguagem, variando entre alto volume de dados e velocidade extrema de resposta.

- **Google AI Studio (Gemini):** [https://aistudio.google.com](https://aistudio.google.com/). Conhecido como o "Rei do Volume", oferece a maior cota gratuita do mercado com 1.000.000 de tokens por dia no modelo Gemini Flash.
- **Groq:** [https://console.groq.com](https://console.groq.com/). Focado em "Velocidade Extrema" através de hardware proprietário (LPU), é ideal para assistentes de voz e interações em tempo real, oferecendo cerca de 30 requisições por minuto.
- **NVIDIA Build:** [https://build.nvidia.com](https://build.nvidia.com/). Plataforma que hospeda modelos open-source de ponta como Llama 3.1 e Mistral, fornecendo cerca de 4.000 créditos renováveis para inferência na nuvem.
- **GitHub Models:** [https://github.com/marketplace/models](https://github.com/marketplace/models). Marketplace que disponibiliza acesso gratuito a modelos da OpenAI (GPT-4o), Microsoft e Meta para desenvolvedores, com limites entre 50 a 150 requisições diárias.
- **Ollama Cloud:** [https://ollama.com](https://ollama.com/). Oferece acesso a modelos via API na nuvem com um sistema de reset de uso a cada 2 horas, sendo excelente para processamento de lotes.
- **OpenRouter:** [https://openrouter.ai](https://openrouter.ai/). Um agregador universal que permite alternar entre diversos modelos do mundo mudando apenas uma linha de código; possui uma seção de modelos com preço zero ($0/M tokens).

### 🖼️ Geração de Imagens

Ferramentas voltadas para a criação de ativos visuais, mockups e fotos hiper-realistas via API.

- **Cloudflare Workers AI:** [https://dash.cloudflare.com](https://dash.cloudflare.com/). Permite rodar o Stable Diffusion em uma rede global de GPUs sem a necessidade de servidor próprio, utilizando uma cota diária baseada em "neurônios computacionais".
- **Google Cloud Vertex AI:** [https://console.cloud.google.com](https://console.cloud.google.com/). Oferece acesso ao Imagen 3 para fotos realistas; o plano de teste gratuito disponibiliza $300 USD em créditos por 90 dias.

### 🎙️ Síntese e Clonagem de Voz

Serviços de áudio voltados para transformar texto em fala com alta naturalidade ou replicar timbres específicos.

- **LMNT:** [https://lmnt.com](https://lmnt.com/). API de Text-to-Speech ultra-realista que suporta clonagem de voz a partir de 30 segundos de áudio (Documentação em [https://docs.lmnt.com](https://docs.lmnt.com/)).

### 🎬 Geração de Vídeo com Avatares

Ferramentas para criação de apresentadores virtuais e vídeos personalizados com sincronia labial.

- **HeyGen:** [https://heygen.com](https://heygen.com/). Plataforma líder em avatares humanos digitais para criação de vídeos via API, incluindo créditos de teste gratuitos para novos usuários.
- **Tavus:** [https://tavus.io](https://tavus.io/). Outra opção focada em geração de vídeos com avatares, também oferecendo créditos iniciais de teste.

### 🛠️ Desenvolvimento, Automação e Documentação

Links úteis para a configuração técnica e integração das APIs em workflows complexos.

- **Plataforma Composio:** [https://platform.composio.dev](https://platform.composio.dev/). Utilizada para conectar IAs a mais de 500 aplicativos (Gmail, Slack, GitHub, etc.).
- **Documentação Gemini API:** [ai.google.dev/gemini-api/docs](https://ai.google.dev/gemini-api/docs). Guia oficial para implementação de recursos avançados dos modelos do Google.
- **Repositório de Referência:** [GitHub TzzaddikEuSou/apis-ia-gratuitas](https://github.com/TzzaddikEuSou/apis-ia-gratuitas). O guia completo que contém todos os exemplos de uso, limites e códigos para as ferramentas citadas acima.

Esta lista consolidada permite que o **Orquestrador (Camada 2)** selecione a ferramenta ideal com base nos requisitos de volume, custo e velocidade de cada tarefa.