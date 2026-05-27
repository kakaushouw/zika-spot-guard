<div align="center">

<img src="https://raw.githubusercontent.com/kakaushouw/zika-spot-guard/main/public/logo.png" alt="ZikaMaps Logo" width="120"/>

# ZIKAMAPS
### Monitoramento de Arbovírus

**Plataforma de vigilância participativa para o combate ao _Aedes aegypti_ em Manaus — AM**

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-4AADA8?style=flat-square)](https://github.com/kakaushouw/zika-spot-guard)
[![Licença](https://img.shields.io/badge/licença-MIT-4AADA8?style=flat-square)](LICENSE)
[![TCC](https://img.shields.io/badge/TCC-ADS-4AADA8?style=flat-square)](#)
[![Manaus](https://img.shields.io/badge/cidade-Manaus%2C%20AM-4AADA8?style=flat-square)](#)

[Sobre](#sobre) · [Funcionalidades](#funcionalidades) · [Tecnologias](#tecnologias) · [Como rodar](#como-rodar) · [Estrutura](#estrutura-do-projeto) · [Screenshots](#screenshots) · [Contribuir](#contribuindo) · [Equipe](#equipe)

</div>

---

## Sobre

O **ZikaMaps** é uma aplicação mobile de vigilância epidemiológica participativa, desenvolvida como Trabalho de Conclusão de Curso (TCC) no curso de **Análise e Desenvolvimento de Sistemas (ADS)**.

O sistema permite que qualquer cidadão de Manaus registre focos do *Aedes aegypti* — o mosquito transmissor da Dengue, Zika e Chikungunya — diretamente pelo celular, com geolocalização automática e captura de fotos como evidência. As denúncias são exibidas em um mapa de calor em tempo real, auxiliando a vigilância sanitária na priorização de recursos e no combate à subnotificação.

> **Problema que resolve:** O sistema público de notificação (SINAN) é passivo e depende de profissionais de saúde. O ZikaMaps transforma o morador em agente ativo da vigilância sanitária do seu próprio bairro.

---

## Funcionalidades

### 👤 Interface do Cidadão
- **Denúncia em 3 etapas** — geolocalização automática via GPS, foto do foco e confirmação
- **Captura de foto** integrada (câmera ou galeria) para validação da equipe de vigilância
- **Modo offline** — registro garantido mesmo sem internet, com sincronização automática posterior
- **Histórico de denúncias** com acompanhamento de status (Pendente / Confirmado / Resolvido)

### 🗺️ Visualização de Dados
- **Mapa georreferenciado** com marcadores por status de cada foco registrado
- **Mapa de calor** para identificação visual das zonas críticas de infestação em tempo real
- **Transparência comunitária** — qualquer cidadão pode ver a distribuição espacial dos focos no bairro

### 🏥 Painel de Gestão (Agente de Saúde)
- **Dashboard estratégico** com visão consolidada dos focos ativos, confirmados e resolvidos
- **Alteração de status** de denúncias diretamente pelo painel
- **Otimização de rotas** — direcionamento preciso de agentes para os epicentros de infestação

---

## Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Frontend Mobile | React Native |
| Mapas | Leaflet / OpenStreetMap |
| Backend | Node.js |
| Banco de Dados | Firebase / Supabase |
| Autenticação | Firebase Auth |
| Geolocalização | API de Geolocalização do navegador (GPS nativo) |
| Design / Prototipação | Figma |
| Versionamento | Git + GitHub |

---

## Como Rodar

### Pré-requisitos

- Node.js `>= 18.x`
- npm ou yarn
- Git

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/kakaushouw/zika-spot-guard.git

# 2. Entre na pasta do projeto
cd zika-spot-guard

# 3. Instale as dependências
npm install

# 4. Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas chaves de API

# 5. Inicie o servidor de desenvolvimento
npm run dev
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Mapa
VITE_MAP_TILE_URL=https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png

# Firebase (ou Supabase)
VITE_FIREBASE_API_KEY=sua_chave_aqui
VITE_FIREBASE_AUTH_DOMAIN=seu_dominio_aqui
VITE_FIREBASE_PROJECT_ID=seu_projeto_aqui
```

> ⚠️ **Nunca commite o arquivo `.env` com suas chaves reais.** O `.gitignore` já está configurado para ignorá-lo.

---

## Estrutura do Projeto

```
zika-spot-guard/
├── public/                 # Assets estáticos (logo, ícones)
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Map/            # Componentes do mapa e marcadores
│   │   ├── Report/         # Fluxo de denúncia (3 etapas)
│   │   └── Dashboard/      # Painel de gestão
│   ├── pages/              # Telas principais
│   │   ├── Login.jsx
│   │   ├── Home.jsx
│   │   ├── MapView.jsx
│   │   ├── ReportForm.jsx
│   │   └── MyReports.jsx
│   ├── services/           # Integração com API e banco de dados
│   ├── hooks/              # Custom hooks (useGeolocation, useReports...)
│   ├── context/            # Gerenciamento de estado global
│   └── styles/             # Estilos globais e tokens de design
├── .env.example
├── .gitignore
└── README.md
```

---

## Screenshots

> Wireframes e protótipos de alta fidelidade desenvolvidos no Figma.

| Mapa de Focos | Registrar Denúncia | Confirmar Envio | Minhas Denúncias |
|:---:|:---:|:---:|:---:|
| Visualização georreferenciada dos focos com status em tempo real | Captura de foto e localização automática via GPS | Formulário com endereço e descrição opcional | Histórico com acompanhamento de status |

---

## Contexto Acadêmico

Este projeto é desenvolvido como **Trabalho de Conclusão de Curso (TCC)** no curso de Análise e Desenvolvimento de Sistemas, com foco na interseção entre:

- **Engenharia de Software** — arquitetura, requisitos e implementação da aplicação
- **UX/UI Design** — pesquisa de usuário, wireframes, prototipação e testes de usabilidade
- **Saúde Pública Digital** — vigilância epidemiológica participativa e combate à subnotificação

A metodologia de pesquisa adotada é o **Design Science Research (DSR)**, com avaliação de usabilidade pela **Escala SUS (System Usability Scale)**.

**Contexto geográfico:** Manaus — AM, cidade com alta incidência de arboviroses e desafios únicos de conectividade em áreas periféricas.

---

## Roadmap

- [x] Autenticação (cidadão e agente de saúde)
- [x] Fluxo de denúncia com geolocalização e foto
- [x] Mapa com marcadores por status
- [x] Painel de gestão com alteração de status
- [x] Histórico de denúncias do usuário
- [ ] Mapa de calor (heatmap)
- [ ] Modo offline com sincronização automática
- [ ] Notificações push para o cidadão
- [ ] Painel analítico para a vigilância sanitária
- [ ] Testes de usabilidade com escala SUS

---

## Contribuindo

Contribuições são bem-vindas! Se quiser sugerir melhorias, reportar bugs ou propor novas funcionalidades:

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Commit suas alterações (`git commit -m 'feat: adiciona minha feature'`)
4. Push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

---

## Equipe

Desenvolvido por estudantes do curso de **Análise e Desenvolvimento de Sistemas**.

| Nome | Papel |
|------|-------|
| *Kaell Calacina* | desenvolvedor do sistema e documentador |
| *Ana Lívia* | documentadora |
| *Vitória Azevedo* | testadora e documentadora |
| *Luiz Henrique* | documentador |
| *João Etto* | designer e documentador|

---

## Licença

Este projeto está licenciado sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

Feito com 🦟 em Manaus, AM · TCC — ADS

</div>