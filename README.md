# Movie Catalog API

Esta API é um catálogo de filmes com funcionalidades CRUD (Create, Read, Update, Delete) para gerenciar informações sobre filmes, usando autenticação JWT para proteger os endpoints.

## Recursos

- **Criação de Conta:** Permite criar usuários.
- **Autenticação:** A API utiliza JWT (JSON Web Token) para autenticar usuários e autorizar acesso aos recursos protegidos.
- **CRUD de Filmes:** Permite criar, listar, atualizar e excluir informações sobre filmes.
- **Endpoints Protegidos:** Alguns endpoints requerem autenticação para serem acessados.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- [NestJS](https://nestjs.com/): Um framework para construir aplicações server-side eficientes e escaláveis com Node.js.
- [TypeORM](https://typeorm.io/): Um ORM que pode ser usado com TypeScript e JavaScript (ES5, ES6, ES7, ES8).
- [PostgreSQL](https://www.postgresql.org/): Um sistema de gerenciamento de banco de dados relacional de código aberto.
- [Docker](https://www.docker.com/): Uma plataforma para desenvolver, enviar e executar aplicações.
- [JWT](https://jwt.io/): JSON Web Token para autenticação de usuários.
- [Redis Labs](https://redislabs.com/) crie um novo banco de dados para usar como cache.

## Configuração

1. **Instalação:**

   - Clone o repositório: `git clone https://github.com/fabiano1133/movies-api-nestjs.git`
   - Instale as dependências: `npm install`
   - execute docker-compose up para subir o banco de dados em DEV

2. **Variáveis de Ambiente:**

   - Configure as seguintes variáveis de ambiente:
     - `HTTP_PORT`: Porta onde o servidor será executado.
     - `POSTGRESQL_HOST`: URI de conexão com o banco de dados PG.
     - `POSTGRESQL_PORT`: Porta par conexão com o banco de dados PG.
     - `POSTGRESQL_USER`: Usuário para conexão com o banco de dados PG.
     - `POSTGRESQL_PASSWORD`: Senha para conexão com o banco de dados PG.
     - `POSTGRESQL_DATABASE`: Nome do banco de dados.
     - `POSTGRESQL_SYNCHRONYZE`: Use true para DEV e false para PRD.
     - `JWT_SECRET`: Chave secreta para geração de tokens JWT.
     - `JWT_EXPIRES_IN`: Tempo de expiração do token JWT.
     - `REDIS_URL`: usuario:senha@endpoint_publico_redis_labs.
     - `REDIS_TTL`: Tempo de cache.

3. **Execução:**
   - Inicie o servidor: `npm run start:dev`
   - Acesso ao Swagger local: `http://localhost:port/api-docs`
   - Acesso ao Swagger em PRD: `https://movies-api-nestjs-docker.onrender.com/api-docs`

## Endpoints

- `POST v1/api/account/create-account:` Endpoint para criar um usuário
- `GET v1/api/account/user:` Obtém informações de um usuário específico
- `POST v1/api/auth/signin`: Endpoint para autenticar usuários e obter um token JWT.
- `GET v1/api/movies`: Obtém a lista de filmes.
- `GET v1/api/movies/movie/:id`: Obtém informações de um filme específico.
- `POST v1/api/movies/create-movie`: Adiciona um novo filme.
- `PUT v1/api/movies/update-movie/:id`: Atualiza informações de um filme existente.
- `DELETE v1/api/movies/delete-movie/:id`: Remove um filme existente.

## Exemplo de Uso

1. **Criar uma conta:**

   - Faça uma requisição `POST v1/api/account/create-account` crie uma conta para poder realizar o login.

2. **Autenticação:**

   - Faça uma requisição `POST v1/api/auth/login` com credenciais de usuário para obter um token JWT.

3. **Acesso a Recursos Protegidos:**
   - Inclua o token JWT obtido no cabeçalho das requisições para os endpoints protegidos (`Authorization: Bearer <token>`).

## Contribuição

Sinta-se à vontade para contribuir com melhorias, novos recursos ou correções de bugs. Basta seguir estes passos:

1. Fork do repositório
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Faça commit das alterações (`git commit -am 'Adicionando nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Crie um novo Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
