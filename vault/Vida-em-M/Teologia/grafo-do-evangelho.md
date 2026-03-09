# ✝️ Grafo do Evangelho

> Mapa neural da teologia paulina. Cada nó é um conceito bíblico. Cada conexão é uma relação teológica. O centro é Jesus Cristo.

---

## Núcleo Cristocêntrico

```
              Jesus Cristo
                   │
    ┌──────────────┼──────────────┐
    │              │              │
   Cruz      Ressurreição    Graça
    │              │              │
Redenção    Nova Criação   Justificação
    │              │              │
Reconciliação  Vida no       Paz com
              Espírito        Deus
```

---

## Tipos de Conexão

| Tipo | Exemplo |
|------|---------|
| `produz` | Graça → produz → Justificação |
| `revela` | Cruz → revela → Amor do Pai |
| `conduz` | Justificação → conduz → Paz com Deus |
| `inaugura` | Cristo → inaugura → Nova Criação |
| `cumpre` | Cruz → cumpre → Promessa do Pai |

---

## Dataset Paulino (Temas Essenciais)

### Soteriologia (Salvação)
| ID | Tema | Versículos | Conecta com |
|----|------|-----------|-------------|
| S01 | Graça | Ef 2:8 · Rm 3:24 · Tt 2:11 | fé, justificação, redenção |
| S02 | Fé | Rm 5:1 · Gl 2:16 | graça, justificação |
| S03 | Justificação | Rm 3:28 · Rm 5:1 | graça, fé, paz com Deus |
| S04 | Redenção | Ef 1:7 · Cl 1:14 | cruz, perdão |
| S05 | Reconciliação | 2Co 5:18 · Cl 1:20 | cruz, paz |
| S06 | Adoção | Rm 8:15 · Ef 1:5 | identidade, Abba Pai |
| S07 | Nova Criação | 2Co 5:17 | vida em Cristo, santificação |

### Cristologia
| ID | Tema | Versículos | Conecta com |
|----|------|-----------|-------------|
| C01 | Encarnação | Fl 2:5–8 | graça, amor |
| C02 | Cruz | Cl 2:14 · Ef 2:16 | redenção, reconciliação |
| C03 | Ressurreição | 1Co 15 · Rm 6:4 | nova vida, esperança |
| C04 | Senhorio de Cristo | Fl 2:9–11 | governo, identidade |
| C05 | Cabeça da Igreja | Ef 1:22 · Cl 1:18 | igreja, corpo |

### Vida Cristã
| ID | Tema | Versículos | Conecta com |
|----|------|-----------|-------------|
| V01 | Vida em Cristo | Gl 2:20 · Cl 3:3 | nova criação, identidade |
| V02 | Vida no Espírito | Rm 8 · Gl 5:25 | santificação, fruto |
| V03 | Identidade de Filho | Rm 8:15 · Gl 4:6 | adoção, Abba |
| V04 | Santificação | Rm 6 · 1Ts 4:3 | nova criação, Espírito |
| V05 | Renovação da Mente | Rm 12:2 · Ef 4:23 | transformação, prática |

### Pneumatologia
| ID | Tema | Versículos | Conecta com |
|----|------|-----------|-------------|
| P01 | Habitação do Espírito | 1Co 3:16 | nova criação |
| P02 | Fruto do Espírito | Gl 5:22 | vida cristã, amor |
| P03 | Dons Espirituais | 1Co 12 · Rm 12 | igreja, serviço |
| P04 | Direção do Espírito | Rm 8:14 | vida em Cristo |

### Escatologia
| ID | Tema | Versículos | Conecta com |
|----|------|-----------|-------------|
| E01 | Ressurreição futura | 1Co 15 · Fl 3:20 | esperança, glorificação |
| E02 | Glorificação | Rm 8:30 | nova criação, esperança |
| E03 | Reino Eterno | Cl 1:13 | governo, identidade |

---

## Exemplo de Subgrafo: Romanos 5

```
Adão → introduz → pecado
Pecado → produz → morte
Cristo → traz → graça
Graça → gera → justificação
Justificação → produz → paz com Deus
Paz → conduz → esperança
Esperança → leva → glória
```

---

## Uso no Motor

Quando o usuário entra com um tema:
1. Localizar no dataset → encontrar nó
2. Expandir conexões → temas relacionados
3. Buscar versículos → base textual
4. Aplicar [[gerador-sermao]] ou pipeline de estudo
