import os
import re
import unicodedata

# Diretórios
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ALBUM_DIR = os.path.dirname(SCRIPT_DIR)
LETRAS_FILE = os.path.join(ALBUM_DIR, 'letras-completas.md')
SAIDA_DIR = os.path.join(ALBUM_DIR, 'letras')

print('Iniciando extração de letras...')

if not os.path.exists(LETRAS_FILE):
    print(f'Erro: Arquivo não encontrado - {LETRAS_FILE}')
    exit(1)

with open(LETRAS_FILE, 'r', encoding='utf-8') as f:
    conteudo = f.read()

# Expressão regular para encontrar as seções
padrao = r"## (\d{2}) — (.+?)\n\*Tema: (.+?)\*\n\n```(?:\w*\n)?([\s\S]*?)```"
matches = re.findall(padrao, conteudo)

if not os.path.exists(SAIDA_DIR):
    os.makedirs(SAIDA_DIR)

count = 0
for numero, titulo, tema, letra in matches:
    titulo = titulo.strip()
    
    # Simple slugify
    slug = unicodedata.normalize('NFKD', titulo).encode('ascii', 'ignore').decode('utf-8')
    slug = slug.lower().replace(' ', '-')
    slug = re.sub(r'[^a-z0-9\-]', '', slug)
    
    nome_arquivo = f"{numero.strip()}-{slug}.md"
    caminho_saida = os.path.join(SAIDA_DIR, nome_arquivo)
    
    novo_conteudo = f"""---
tipo: musica
numero: {numero.strip()}
titulo: "{titulo}"
tema: "{tema.strip()}"
projeto: Filhos no Amor do Pai
status: Letra
tags: [album/filhos-no-amor, lo-fi, gospel]
---

# {titulo}

```
{letra.strip()}
```
"""
    with open(caminho_saida, 'w', encoding='utf-8') as f:
        f.write(novo_conteudo)
    
    print(f"✅ Gerado: {nome_arquivo} ({titulo})")
    count += 1

print(f"\nExtração concluída! Total de letras processadas: {count}")
