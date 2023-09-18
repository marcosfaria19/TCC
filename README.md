# Projeto de Adoção de Animais

Este é um projeto de aplicação de adoção de animais desenvolvido como parte do Trabalho de Conclusão de Curso de Pós-Graduação em Desenvolvimento Full Stack na PUCRS.

## Sumário

1. [Contextualização da Proposta](#contextualização-da-proposta)
2. [Objetivos da Construção da Solução](#objetivos-da-construção-da-solução)
3. [Elaboração da Jornada do Usuário](#elaboração-da-jornada-do-usuário)
4. [Apelo Mercadológico da Solução](#apelo-mercadológico-da-solução)
5. [Ciclo de Desenvolvimento da Solução](#ciclo-de-desenvolvimento-da-solução)
6. [Mockup da Proposta de Solução](#mockup-da-proposta-de-solução)
7. [Arquitetura de Software](#arquitetura-de-software)
8. [Validação da Solução](#validação-da-solução)
9. [Registros das Evidências do Projeto](#registros-das-evidências-do-projeto)
10. [Considerações Finais e Expectativas](#considerações-finais-e-expectativas)

## Contextualização da Proposta

A crescente preocupação com o bem-estar dos animais e a conscientização sobre a importância da adoção responsável destacaram a necessidade de soluções que facilitem e promovam a adoção de animais de estimação. Neste projeto, propomos o desenvolvimento de uma aplicação específica para a adoção de animais, com o objetivo de superar os desafios enfrentados por organizações de resgate de animais e potenciais tutores.

### Problema a ser Mitigado

Atualmente, muitas organizações de resgate de animais enfrentam dificuldades para encontrar lares adequados para os animais sob seus cuidados, enquanto potenciais tutores enfrentam barreiras ao tentar encontrar um animal de estimação que corresponda às suas necessidades e estilo de vida. Essa desconexão resulta em animais abandonados, superlotação em abrigos e, em última análise, em sofrimento animal.

### Motivação

A motivação para a solução que estamos propondo é alimentada por uma profunda preocupação com o bem-estar dos animais e o desejo de promover a adoção responsável como a melhor alternativa para proporcionar um lar amoroso aos animais necessitados. Além disso, reconhecemos o potencial da tecnologia para simplificar e agilizar o processo de adoção, tornando-o mais transparente, acessível e eficiente para todos os envolvidos.

### Contribuição da Solução

Ao desenvolver uma aplicação de adoção de animais completa, estaremos proporcionando aos usuários a capacidade de buscar animais disponíveis por meio de filtros, iniciar o processo de adoção após a aprovação de critérios responsáveis, acompanhar o progresso pós-adoção e receber notificações para garantir o bem-estar contínuo dos animais adotados. Isso não apenas simplificará o processo de adoção, mas também ajudará a educar os tutores em potencial sobre as responsabilidades envolvidas na adoção de um animal de estimação. Em última análise, nossa aplicação busca unir de forma eficiente e responsável animais em busca de um lar a tutores dispostos a proporcionar amor e cuidado. Acreditamos que isso terá um impacto positivo tanto na vida dos animais quanto na sociedade como um todo, incentivando a adoção responsável e reduzindo a quantidade de animais abandonados ou em situações de risco.

### Requisitos

#### Requisitos Funcionais

- Registro e autenticação de usuários.
- Pesquisa de animais com filtros (idade, gênero, personalidade).
- Processo de adoção com aprovação.
- Acompanhamento pós-adoção com notificações.

#### Requisitos Não Funcionais

- Desempenho rápido do aplicativo.
- Interface de usuário intuitiva.
- Segurança dos dados dos usuários.

#### Regras de Negócio

- Adotantes devem passar por um processo de aprovação.
- Voluntários responsáveis devem gerenciar a aplicação.

## Objetivos da Construção da Solução

Os principais objetivos ao construir esta solução incluem:

- Facilitar a adoção responsável de animais de estimação.
- Conectar organizações de resgate de animais a potenciais tutores.
- Promover a conscientização sobre a importância da adoção de animais.
- Melhorar o bem-estar dos animais abandonados.
- Oferecer uma plataforma confiável e eficaz para adoção de animais.

## Elaboração da Jornada do Usuário

A jornada do usuário é uma parte essencial do projeto, pois nos ajuda a compreender como os usuários interagem com a aplicação e quais são suas necessidades. Ela abrange desde o primeiro contato com a aplicação até a conclusão bem-sucedida do processo de adoção. Aqui está um resumo da jornada do usuário:

1. **Registro e Autenticação:** O usuário faz o registro na aplicação usando seu e-mail ou mídia social. A autenticação é necessária para acessar recursos específicos e garantir a segurança dos dados do usuário.

2. **Pesquisa de Animais:** Após fazer o login, o usuário pode procurar animais disponíveis para adoção usando filtros, como idade, gênero e personalidade. Eles podem visualizar perfis de animais para obter mais informações.

3. **Seleção de um Animal:** O usuário escolhe um animal que deseja adotar e inicia o processo de adoção.

4. **Aprovação da Adoção:** É feita a verificação dos critérios responsáveis do usuário, como espaço, recursos financeiros e disposição para cuidar do animal. Após a aprovação, a adoção é confirmada.

5. **Acompanhamento Pós-Adoção:** Após a adoção, o usuário pode receber lembretes e dicas para cuidar do animal de estimação de forma responsável.


## Ciclo de Desenvolvimento da Solução

O desenvolvimento da solução será dividido em várias fases, incluindo:

1. **Planejamento e Pesquisa:** Esta fase envolverá a pesquisa de mercado e a definição detalhada dos requisitos da aplicação.

2. **Design de Interface de Usuário:** Criação de mockups e wireframes para garantir uma experiência de usuário intuitiva e eficaz.

3. **Desenvolvimento:** A aplicação será desenvolvida usando tecnologias como React para a interface do usuário e Node.js para o backend.

4. **Testes:** Testes serão realizados para garantir que a aplicação seja segura, rápida e livre de erros.

5. **Implantação:** A aplicação será implantada no GitHub Pages.

## Mockup da Proposta de Solução

Aqui estão alguns mockups iniciais do design da aplicação:

![Mockup 1](/images/mockup1.png)

![Mockup 2](/images/mockup2.png)

## Arquitetura de Software

A aplicação será baseada em uma arquitetura cliente-servidor, com as seguintes tecnologias principais:

- **Frontend:** Desenvolvido em React para criar uma interface de usuário dinâmica e responsiva.
- **Backend:** Node.js será usado para criar uma API que gerenciará o processamento de adoção e a comunicação com o banco de dados.
- **Banco de Dados:** Utilizaremos um banco de dados relacional MySQL para armazenar informações sobre animais, usuários e adoções.
- **Autenticação e Autorização:** O sistema de autenticação e autorização será implementado usando tokens JWT (JSON Web Tokens) para garantir a segurança dos dados do usuário.


## Registros das Evidências do Projeto

Todas as evidências do projeto e código-fonte serão armazenadas nesse repositório do GitHub.
