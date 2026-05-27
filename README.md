#ZikaMaps: Monitoramento e Mapeamento de Arboviroses em Manaus
 
O ZikaMaps é uma plataforma colaborativa voltada para a identificação e o mapeamento em tempo real de focos de reprodução do mosquito Aedes aegypti em Manaus
. Através da Ciência Cidadã (VGI), a ferramenta permite que os moradores atuem como agentes ativos na vigilância sanitária, combatendo a subnotificação e auxiliando o poder público na tomada de decisões estratégicas
.
🚀 Diferenciais Técnicos
Arquitetura Offline-First: Desenvolvido para lidar com a conectividade intermitente em diversas áreas de Manaus. As denúncias são armazenadas localmente e sincronizadas automaticamente quando houver acesso à rede
.
Geoprocessamento em Tempo Real: Utiliza a API do OpenStreetMap para visualização espacial e geração de Mapas de Calor (KDE), facilitando a identificação de hot spots (zonas de maior incidência)
.
Reporte em 3 Cliques: Interface otimizada (UX) com foco em baixa carga cognitiva, permitindo denúncias rápidas com geolocalização automática e evidência visual via captura de fotos
.
Sincronização Inteligente: Implementação de estratégias de merge de dados baseadas em timestamps e geohashing para evitar duplicidade de registros
.
🛠️ Stack Tecnológica
O projeto utiliza tecnologias modernas e escaláveis, integrando princípios de sistemas distribuídos e infraestrutura geoespacial
:
Front-end: React Native (Mobile Cross-platform)
.
Back-end/Database: Firebase (NoSQL, Realtime Database e Firestore com Geohashing)
.
Persistência Local: SQLite para armazenamento offline
.
Mapas: API do OpenStreetMap (via Leaflet ou similar)
.
UI/UX Design: Figma (seguindo normas de acessibilidade WCAG 2.1)
.
📱 Interface e Usabilidade
A interface foi projetada para ser inclusiva e resiliente, garantindo que o mapa seja sempre o foco principal
.
Dashboard Estratégico: Visualização gerencial para auxiliar o poder público
.
Design Inclusivo: Botões grandes e alto contraste para atender a diversas faixas etárias e níveis de alfabetização digital
.
⚙️ Instalação (Exemplo)
# Clone o repositório
git clone https://github.com/kakaushouw/zika-spot-guard.git

# Instale as dependências
npm install

# Execute o projeto
npx react-native run-android # ou run-ios
👥 Equipe (Autores)
Kaell Calacina
Luiz Henrique
Vitória Azevedo
Ana Lívia
João Etto
Luana Magalhães