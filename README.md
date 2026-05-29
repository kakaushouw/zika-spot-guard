<div align="center">

<img src="docs/assets/logo.png" alt="ZikaMaps Logo" width="140"/>

# 🦟 ZIKAMAPS

**Plataforma web de participação cidadã para o monitoramento e mapeamento da proliferação de mosquitos causadores de arboviroses em Manaus — AM**

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-4AADA8?style=flat-square)](https://github.com/kakaushouw/zika-spot-guard)
[![Licença](https://img.shields.io/badge/licença-MIT-4AADA8?style=flat-square)](LICENSE)
[![TCC](https://img.shields.io/badge/TCC-ADS%20%7C%20Fametro-4AADA8?style=flat-square)](#)
[![Cidade](https://img.shields.io/badge/cidade-Manaus%2C%20AM-4AADA8?style=flat-square)](#)
[![Python](https://img.shields.io/badge/python-3.11-blue?style=flat-square&logo=python)](https://python.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-PostGIS-336791?style=flat-square&logo=postgresql)](https://postgresql.org)
[![Docker](https://img.shields.io/badge/docker-containerizado-2496ED?style=flat-square&logo=docker)](https://docker.com)

</div>

---

## 📋 Sobre o Projeto

O **ZikaMaps** é uma plataforma web colaborativa de vigilância epidemiológica participativa, desenvolvida como Trabalho de Conclusão de Curso (TCC) no curso de **Análise e Desenvolvimento de Sistemas (ADS)** no Centro Universitário Fametro — Manaus, AM.

O sistema permite que qualquer cidadão registre focos de criadouros do *Aedes aegypti* — mosquito transmissor da Dengue, Zika e Chikungunya — diretamente pelo navegador, com geolocalização automática via GPS e captura de foto como evidência. As denúncias são processadas pelo back-end em Python, armazenadas no PostgreSQL com suporte geoespacial (PostGIS) e exibidas em mapas de calor em tempo real via Leaflet.js sobre a base cartográfica do OpenStreetMap.

> 💡 **Problema que resolve:** O sistema público de notificação (SINAN) é passivo e depende exclusivamente de profissionais de saúde. O ZikaMaps transforma o morador em agente ativo da vigilância sanitária do seu próprio bairro, combatendo a subnotificação de focos.

---

## 🛠️ Tecnologias Utilizadas

| Camada | Tecnologia | Descrição |
|--------|-----------|-----------|
| Design e Prototipação | Figma | Wireframes e protótipo de alta fidelidade |
| Prototipação Front-end | Lovable Dev | Geração de protótipos funcionais para validação |
| Front-end | HTML, CSS e JavaScript | Estrutura, estilização e interatividade da interface web |
| Mapas | Leaflet.js + OpenStreetMap | Renderização de mapas interativos e base cartográfica gratuita |
| Back-end | Python + Flask | Lógica de negócio e API REST |
| Banco de dados (dev) | Supabase | PostgreSQL gerenciado usado na fase de validação |
| Banco de dados (produção) | PostgreSQL + PostGIS | Armazenamento relacional com suporte geoespacial |
| Conteinerização | Docker | Padronização e isolamento dos ambientes |
| Infraestrutura | VPS | Servidor virtual privado para hospedagem em produção |
| Versionamento | Git + GitHub | Controle de versão e colaboração da equipe |

---

## 🎬 Demonstração

### 📸 Screenshots

> Adicione os prints das telas na pasta `docs/screenshots/` e substitua os caminhos abaixo.

<div align="center">

| Tela de Login | Mapa de Focos |
|:---:|:---:|
| <img src="docs/screenshots/login.png" alt="Login" width="400"/> | <img src="docs/screenshots/mapa.png" alt="Mapa" width="400"/> |

| Registrar Denúncia | Minhas Denúncias |
|:---:|:---:|
| <img src="docs/screenshots/denuncia.png" alt="Denúncia" width="400"/> | <img src="docs/screenshots/historico.png" alt="Histórico" width="400"/> |

| Painel do Agente | Mapa de Calor |
|:---:|:---:|
| <img src="docs/screenshots/painel.png" alt="Painel" width="400"/> | <img src="docs/screenshots/heatmap.png" alt="Heatmap" width="400"/> |

</div>

### 🎞️ GIF Demonstrativo

> Salve o GIF do fluxo principal em `docs/demo.gif`.

<div align="center">
  <img src="docs/demo.gif" alt="Demonstração do fluxo de denúncia no ZikaMaps" width="80%"/>
</div>

---

### 🎥 Vídeo Demonstrativo

> **[VÍDEO DEMONSTRATIVO]**
> *(link do vídeo será adicionado aqui)*

---

## 🚀 Instalação

### Pré-requisitos

- [Python](https://python.org/) `>= 3.11`
- [PostgreSQL](https://postgresql.org/) `>= 14` com extensão [PostGIS](https://postgis.net/)
- [Docker](https://docker.com/) *(opcional, recomendado)*
- [Git](https://git-scm.com/)

### Passo a passo

1. **Clone o repositório**
```bash
git clone https://github.com/kakaushouw/zika-spot-guard.git
cd zika-spot-guard
```

2. **Crie e ative o ambiente virtual**
```bash
python -m venv venv

# Linux / macOS
source venv/bin/activate

# Windows
venv\Scripts\activate
```

3. **Instale as dependências**
```bash
pip install -r requirements.txt
```

4. **Configure o banco de dados**
```bash
psql -U postgres -c "CREATE DATABASE zikamaps;"
psql -U postgres -d zikamaps -c "CREATE EXTENSION postgis;"
python manage.py db upgrade
```

5. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

Edite o arquivo `.env`:
```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/zikamaps
FLASK_ENV=development
SECRET_KEY=sua_chave_secreta_aqui
PORT=5000
OSM_TILE_URL=https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
```

6. **Inicie o servidor**
```bash
python app.py
```

7. **Acesse no navegador**
```
http://localhost:5000
```

---

## 📖 Como Usar

### Perfil Cidadão

1. Cadastre-se ou faça login com seu e-mail
2. Na tela **Mapa**, visualize os focos registrados na sua região
3. Clique em **Denunciar** para registrar um novo foco — o sistema captura sua localização via GPS automaticamente, tire ou envie uma foto do criadouro, adicione uma descrição opcional e confirme o envio
4. Acompanhe o status das suas denúncias em **Minhas Denúncias**

### Perfil Agente de Vigilância Sanitária

1. Faça login com e-mail institucional de agente
2. Acesse o **Painel de Gestão** para visualizar todas as denúncias
3. Analise a imagem e a localização de cada foco
4. Altere o status para **Confirmado** (foco válido) ou **Descartado** (inválido)
5. Após a intervenção em campo, marque o foco como **Resolvido**

---

## 👥 Equipe

| Nome | Papel |
|------|-------|
| Kaell Soares Calacina | Desenvolvedor & Documentador |
| Ana Lívia da Costa Silva | Documentadora |
| Vitória Santos de Azevedo | Testadora & Documentadora |
| Luiz Henrique Moutinho Laranjeira | Documentador |
| João Etto de Souza Gomes | Designer & Documentador |

**Orientadora:** Luana Magalhães Leal

---

<div align="center">

Feito com 🦟 e ❤️ em Manaus, AM · TCC — ADS Fametro 2026

</div>