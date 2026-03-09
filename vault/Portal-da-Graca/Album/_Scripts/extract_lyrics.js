const fs = require('fs');
const path = require('path');

// Caminhos relativos ao script (que deve estar em Album/_Scripts/)
const ALBUM_DIR = path.join(__dirname, '..');
const LETRAS_FILE = path.join(ALBUM_DIR, 'letras-completas.md');
const SAIDA_DIR = path.join(ALBUM_DIR, 'letras');

console.log('Iniciando extração de letras...');

// Lê o arquivo original
if (!fs.existsSync(LETRAS_FILE)) {
    console.error(`Erro: Arquivo não encontrado - ${LETRAS_FILE}`);
    process.exit(1);
}

const conteudo = fs.readFileSync(LETRAS_FILE, 'utf8');

// Expressão regular para encontrar cada seção de letra (começa com "## " até o próximo "## " ou fim)
const mRegex = /## (\d{2}) — (.+)\n\*Tema: (.+)\*\n\n```\n([\s\S]*?)```/g;

let matches;
let Count = 0;

// Garante que a pasta de destino existe
if (!fs.existsSync(SAIDA_DIR)) {
    fs.mkdirSync(SAIDA_DIR, { recursive: true });
}

while ((matches = mRegex.exec(conteudo)) !== null) {
    const numero = matches[1].trim();
    const titulo = matches[2].trim();
    const tema = matches[3].trim();
    const letraTexto = matches[4].trim();

    // Cria um nome de arquivo seguro (slugify simples)
    const slug = titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
    const fileName = `${numero}-${slug}.md`;
    const outputPath = path.join(SAIDA_DIR, fileName);

    // Constrói o novo conteúdo com o YAML frontmatter
    const novoConteudo = `---
tipo: musica
numero: ${numero}
titulo: "${titulo}"
tema: "${tema}"
projeto: Filhos no Amor do Pai
status: Letra
tags: [album/filhos-no-amor, lo-fi, gospel]
---

# ${titulo}

\`\`\`
${letraTexto}
\`\`\`
`;

    // Escreve o arquivo no diretório
    fs.writeFileSync(outputPath, novoConteudo);
    console.log(`✅ Gerado: ${fileName} (${titulo})`);
    Count++;
}

console.log(`\nExtração concluída! Total de letras processadas: ${Count}`);
