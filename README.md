# API de Controle de Portaria - Grupo Gasparim

Bem-vindo à API de Controle de Portaria do Grupo Gasparim. Esta API é projetada para fornecer funcionalidades de gerenciamento de portaria, incluindo check-ins, check-outs e controle de acesso.

## Configuração

### Pré-requisitos

Certifique-se de ter os seguintes requisitos instalados em seu ambiente de desenvolvimento:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)

### Instalação

1. **Clone o repositório**:

```
git clone https://github.com/lucasmilhoranca/api-portaria-gasparim.git
cd api-controle-portaria
```

2. **Instale as dependências:**

```
npm install
```

3. **Configure as variáveis de ambiente:**

Crie um arquivo `.env` na raiz do projeto e configure as variáveis necessárias, como `MONGODB_URI`, `SECRET_JWT`, etc.

Exemplo de `.env`:
```
MONGODB_URI=mongodb://seu-usuario:senha@localhost:27017/nome-do-banco

SECRET_JWT=seu-hash-seguro
```


## Uso

Inicie a API usando o seguinte comando:

```bash
npm start
```
A API estará disponível em http://localhost:3000 por padrão.

## Endpoints

A documentação dos endpoints está disponível na rota `/api-docs`, utilizando [Swagger](https://swagger.io/). Certifique-se de ter a API em execução e acesse http://localhost:3000/api-docs no seu navegador.

## Contribuição

Contribuições são sempre bem-vindas!

Sinta-se à vontade para contribuir com melhorias. Certifique-se de seguir as diretrizes de contribuição descritas no arquivo [CONTRIBUTING.md](CONTRIBUTING.md).

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

## FAQ

#### *Qual a relação com a parte comercial?*

A API de Controle de Portaria do Grupo Gasparim não tem nenhuma relação com a parte comercial da empresa. Sua finalidade é exclusivamente para o gerenciamento de portaria, incluindo check-ins, check-outs e controle de acesso.

**Principais Pontos:**

1. **Sem Relação com RH:** Embora a API inclua funcionalidades de controle de funcionários, ela não está diretamente relacionada ao setor de Recursos Humanos.

2. **Sem Relação com Logística ou Compras:** O controle de caminhoneiros na API não está vinculado às áreas de logística ou compras. O objetivo principal é facilitar o processo para os responsáveis pela portaria, evitando a necessidade de cadastrar repetidamente os mesmos caminhoneiros a cada visita.

A API foi projetada para fornecer uma solução eficiente na identificação de pessoas dentro da empresa, otimizando o trabalho na portaria e garantindo um fluxo mais eficaz.

## Autores

- [@lucasmilhoranca](https://github.com/lucasmilhoranca)