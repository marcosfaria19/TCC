# Projeto de Adoção de Animais

Este é um projeto de aplicação de adoção de animais desenvolvido como parte do Trabalho de Conclusão de Curso de Pós-Graduação em Desenvolvimento Full Stack na PUCRS.

## Sumário

1. [Contextualização da Proposta](#contextualização-da-proposta)
2. [Objetivos da Construção da Solução](#objetivos-da-construção-da-solução)
3. [Elaboração da Jornada do Usuário](#elaboração-da-jornada-do-usuário)
4. [Ciclo de Desenvolvimento da Solução](#ciclo-de-desenvolvimento-da-solução)
5. [Mockup da Proposta de Solução](#mockup-da-proposta-de-solução)
6. [Arquitetura de Software](#arquitetura-de-software)
7. [Registros das Evidências do Projeto](#registros-das-evidências-do-projeto)

## Contextualização da Proposta

A crescente preocupação com o bem-estar dos animais e a conscientização sobre a importância da adoção responsável destacaram a necessidade de soluções que facilitem e promovam a adoção de animais de estimação. Neste trabalho, propomos o desenvolvimento de uma aplicação específica para a adoção de animais, com o objetivo de superar os desafios enfrentados por organizações de resgate de animais e potenciais tutores.

### Problema a ser Mitigado

No Brasil, aproximadamente 185 mil animais, vítimas de abandono ou resgatados após maus-tratos, estão sob a responsabilidade de ONGs e grupos de protetores, de acordo com o Instituto Brasil Pet (Cães&Gatos, 17 de março de 2023). Infelizmente, a grande maioria desses animais abandonados morre nas ruas, por fome, sede, doenças ou atropelamentos. Atualmente, as organizações dedicadas ao resgate de animais confrontam desafios consideráveis ao procurar lares adequados para seus tutelados, ao passo que possíveis adotantes se deparam com obstáculos ao tentar encontrar um companheiro que atenda às suas necessidades e estilo de vida. Essa desconexão culmina no abandono de animais, na superlotação de abrigos e, em última instância, no sofrimento desses seres vulneráveis.

### Motivação

A motivação para a solução que estamos propondo é alimentada por uma profunda preocupação com o bem-estar dos animais e o desejo de promover a adoção responsável como a melhor alternativa para proporcionar um lar amoroso aos animais necessitados. Além disso, reconhecemos o potencial da tecnologia para simplificar e agilizar o processo de adoção, tornando-o mais transparente, acessível e eficiente para todos os envolvidos.

### Contribuição da Solução

Ao desenvolver uma aplicação de adoção de animais completa, proporcionaremos aos usuários a capacidade de buscar animais disponíveis por meio de filtros, iniciar o processo de adoção após a aprovação de requisitos necessários, acompanhar o progresso e receber dicas para garantir o bem-estar contínuo dos animais adotados. Isso não apenas simplificará o processo de adoção, mas também ajudará a educar os tutores em potencial sobre as responsabilidades envolvidas na adoção de um animal de estimação.
Em última análise, nossa aplicação busca unir de forma eficiente e responsável animais em busca de um lar a tutores dispostos a proporcionar amor e cuidado. Acreditamos que isso terá um impacto positivo tanto na vida dos animais quanto na sociedade como um todo, incentivando a adoção responsável e reduzindo a quantidade de animais abandonados ou em situações de risco.

### Requisitos

#### Requisitos Funcionais

Registro e autenticação de usuários: Permitir que os usuários se registrem e façam login utilizando suas contas de e-mail do Gmail para maior conveniência e segurança.
Pesquisa de animais: O usuário deve poder pesquisar por animais disponíveis para adoção, por meio de filtros como categoria (gato ou cachorro), idade (filhote, adulto, idoso), gênero (macho, fêmea) e personalidade (ativo, brincalhão, carinhoso, tranquilo, etc.). Cada animal terá sua própria descrição incluindo idade aproximada, data de resgate, cor, características e uma breve história em primeira pessoa. Esses dados serão cadastrados e atualizados por voluntários administradores.
Processo de adoção: O usuário deve ser aprovado antes de dar início no processo. Essa etapa inclui a verificação de documentação, condição financeira, além da assinatura de um termo de responsabilidade. Em seguida, será implementado um sistema de progresso semelhante a um pedido, com etapas como "Análise de Documentação", "Aprovação para Possível Adotante" e "Adoção Confirmada". Os adotantes serão notificados por e-mail a cada atualização do status.
Acompanhamento pós-adoção: Após a adoção, o usuário pode continuar a usar o aplicativo para receber suporte sobre cuidados com o animal, como notificações e lembretes para vacinações, checkups e dicas diárias.

#### Requisitos Não Funcionais

Desempenho rápido do aplicativo: A aplicação será otimizada para respostas rápidas, e será implementada como uma SPA (Single Page Application) para uma experiência de usuário suave. Será desenvolvida com código limpo e estruturado para facilitar a manutenibilidade.
Interface de usuário intuitiva: Boas práticas de UI/UX e responsividade, para funcionar em diferentes dispositivos e tamanhos de tela.
Segurança dos dados dos usuários: Utilizar práticas recomendadas para garantir segurança, principalmente na autenticação dos usuários.

#### Regras de Negócio

Os adotantes devem passar por um processo de aprovação antes de adotar um animal e serem maiores de idade. A aprovação de adoção deve ser baseada em critérios estabelecidos, como a disponibilidade de recursos e condições adequadas para o bem-estar do animal. Os voluntários responsáveis devem revisar a documentação do adotante atualizar o status de aprovação ou rejeição da adoção.
Voluntários responsáveis pelo resgate e lar temporário podem se registrar e atualizar as informações dos animais. Apenas animais disponíveis para a adoção devem ser listados.
Os adotantes devem concordar com um termo de responsabilidade que estabeleça suas obrigações em relação ao animal adotado. A privacidade dos dados dos usuários, incluindo informações pessoais e documentos de identificação, deve ser protegida.

### Tecnologias

Para o desenvolvimento da aplicação, foram escolhidas as seguintes tecnologias:

- Frontend: React para a interface de usuário responsiva e interativa. A utilização de componentes reutilizáveis garante uma experiência fluida na arquitetura de SPA.
- Backend: Node.js e Express para a lógica do servidor, que deve ser escalável, e eficiente.
- Banco de Dados: Banco de dados relacional MySQL, para armazenar informações dos animais e perfis de usuários.
  Além disso, será utilizado o GitHub Pages para hospedar o frontend e o Firebase para o backend e banco de dados, que são opções online gratuitas e que garantem acesso conveniente e escalabilidade.

## Objetivos da Construção da Solução

Os principais objetivos ao construir esta solução incluem:

- Desenvolver uma aplicação full stack eficiente e escalável;
- Facilitar a adoção de animais de estimação, proporcionando uma plataforma de fácil uso e acesso;
- Desenvolver uma interface de usuário amigável e intuitiva, considerando a usabilidade e experiência do usuário;
- Implementar funcionalidades de pesquisa, permitindo que os usuários filtrem os animais disponíveis de acordo com critérios específicos, como idade e gênero;
- Criar um sistema de gerenciamento de aprovação de adoção que inclua a revisão e aprovação de candidatos a tutores de animais.
- Documentar todo o processo de desenvolvimento.

## Elaboração da Jornada do Usuário

A jornada do usuário é uma parte essencial do projeto, pois nos ajuda a compreender como os usuários interagem com a aplicação e quais são suas necessidades. Ela abrange desde o primeiro contato com a aplicação até a conclusão bem-sucedida do processo de adoção. Aqui está um resumo da jornada do usuário:

1. **Registro e Autenticação:** O usuário faz o registro na aplicação usando seu e-mail ou mídia social. A autenticação é necessária para acessar recursos específicos e garantir a segurança dos dados do usuário.

2. **Pesquisa de Animais:** Após fazer o login, o usuário pode procurar animais disponíveis para adoção usando filtros, como idade, gênero e personalidade. Eles podem visualizar perfis de animais para obter mais informações.

3. **Seleção de um Animal:** O usuário (ator) inicia o processo de adoção preenchendo um formulário com informações pessoais e motivos para adoção. Os administradores revisam e aprovam/rejeitam com base em critérios estabelecidos.

4. **Aprovação da Adoção:** É feita a verificação dos critérios responsáveis do usuário, como espaço, recursos financeiros e disposição para cuidar do animal. Após aprovação, o administrador voluntário (ator) agenda a entrega do animal, inspeciona o local e realiza a entrega, garantindo que as condições estejam em conformidade com os critérios.

5. Informações Pós-Adoção:\*\* O usuário (ator) tem acesso a informações importantes sobre cuidados pós-adoção, incluindo orientações sobre vacinações e outros detalhes relevantes para a saúde e bem-estar do animal.

## Ciclo de Desenvolvimento da Solução

O desenvolvimento da solução será dividido em várias fases, incluindo:

1. **Definição de Requisitos e Escopo:** Compreensão completa dos requisitos do projeto, incluindo funcionalidades e interfaces.

2. **Design de Interface de Usuário e Arquitetura:** Elaboração de uma estrutura de alto nível para a aplicação, abrangendo o design da interface do usuário e a arquitetura do sistema. Foram criados Mockups com a ajuda das ferramentas Moqups e Figma.

3. **Desenvolvimento:** Implementação das funcionalidades da aplicação de acordo com os requisitos definidos; codificação, banco de dados, integração de APIs, desenvolvimento de interface de usuário.

4. **Testes:** Testes e depuração de código serão realizados para garantir que a aplicação seja segura, rápida e livre de erros.

5. **Implantação:** Publicação da aplicação em um ambiente de produção para uso real (GitHub Pages), configurando o servidor, implantando o código e configuração do banco de dados.

## Mockup da Proposta de Solução

Aqui estão alguns mockups iniciais do design da aplicação:

![Componente de Navegação / Header](https://i.imgur.com/PdQ8DAN.png)

![Componente Footer](https://i.imgur.com/4gjFeVq.png)

![Página Inicial](https://i.imgur.com/Jb1Cvnd.png)

![Página de Registro / Login](https://i.imgur.com/3LHXPza.png)

![Tela de Pesquisa de Animais](https://i.imgur.com/pqxam66.png)

![Tela de Detalhe dos Animais](https://i.imgur.com/yMl7k28.png)

![Formulário de Adoção](https://i.imgur.com/9CfSOTO.png)

![Painel do Administrador](https://i.imgur.com/i1ki9BA.png)

## Arquitetura de Software

A arquitetura da solução de adoção de animais segue o modelo de três camadas, compreendendo o Frontend, Backend e Banco de Dados. Cada camada desempenha um papel específico, contribuindo para uma experiência de usuário eficiente e segura.

- **Frontend:** O Frontend é a interface com o usuário, desenvolvida com HTML, C
  SS e JavaScript, aproveitando as bibliotecas React e Bootstrap para criar uma experiência dinâmica e responsiva.
- **Backend:** O Backend é construído em Node.js com Express.js, proporcionando uma base sólida para lidar com rotas e solicitações. A separação de responsabilidades é mantida por meio de controllers, middlewares e modelos.
- **Banco de Dados:** O banco de dados relacional MySQL desempenha um papel central na estrutura da solução proposta. Ele é empregado para armazenar dados cruciais, incluindo informações detalhadas dos usuários, animais disponíveis para adoção e solicitações de adoção. A conexão entre o backend e o banco de dados é estabelecida por meio do uso da biblioteca `mysql2'.
- **Autenticação e Autorização:** O sistema de autenticação e autorização foi feito com o Firebase.

## Registros das Evidências do Projeto

Todas as evidências do projeto e código-fonte serão armazenadas nesse repositório do GitHub.
