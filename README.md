# Projeto iChoveu ☔

Boas-vindas ao repositório do projeto iChoveu! Este projeto foi desenvolvido como parte do curso da Trybe, com o objetivo de implementar funcionalidades para busca de informações meteorológicas de diversas cidades. Abaixo, você encontrará orientações sobre como estruturar o desenvolvimento do seu projeto e as funcionalidades que devem ser implementadas.

## Tecnologias Utilizadas

- JavaScript
- HTML
- CSS

## Funcionalidades do Projeto

O projeto consiste na implementação das seguintes funções:

1. **searchCities**: Implementa a função `searchCities` no arquivo `helpers/weatherAPI.js`, responsável por buscar cidades na API.
2. **getWeatherByCity**: Implementa a função `getWeatherByCity` no arquivo `helpers/weatherAPI.js` e complementa a função `handleSearch` em `helpers/pageFunctions.js`.
3. **Listar cidades retornadas**: Após a chamada da API, renderiza o retorno utilizando a função `createCityElement`.
4. **Botão de previsão para 7 dias**: Adiciona um botão dentro do elemento de cada cidade para ver a previsão dos próximos 7 dias.

### Requisitos Bônus

- **Cobertura Completa de Testes**: Implementa testes para garantir uma cobertura completa (100%) das funções principais.

## Instruções de Instalação e Uso

1. Clone este repositório para o seu computador:

    ```bash
    git clone git@github.com:JyojiTenguam/project-ichoveu.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd project-ichoveu
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    ```

4. Execute os testes para verificar se tudo está funcionando corretamente:

    ```bash
    npm test
    ```
