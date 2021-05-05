# Desafio técnico para vaga de desenvolvedor full stack

Projeto desenvolvido como teste de código afim de mostrar meu conhecimento acerca do desenvolvimento de API utilizando NodeJS e boas práticas de programação, para uma vaga de desenvolvedor full stack. A API consiste de um sistema de controle de tarifas telefônicas, onde é possível o cadastro do DDD de origem, destino e o preço do minuto para aquela rota.

## Backend da aplicação

### Tecnologias
A API da aplicação foi desenvolvida utilizando:
* NodeJS
* Express
* Typescript
* TypeORM
* SQLite
* Celebrate
* Jest

Devido a necessidade de enviar o código zipado para avaliação, optei por utilizar o Sqlite, uma vez que ele é um banco de dados relacional cujo arquivo pode ser criado localmente, mas a aplicação foi desenvolvida utilizando Typeorm com isso a adição de novos bancos relacionais não afetará o funcionamento da aplicação. Bastando apenas adicionar as informações de conexão ao novo banco.

### Padrões
Foi utilizado boas práticas de desenvolvimento tais como:
* Clean Arquitecture
* SOLID
* Clean code

## Setup

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
* Git
* Node.js

Além disto é bom ter um editor para visualizar o código, como VSCode. Para executar o backend, abra a pasta api-vxtel no terminal e execute `yarn dev`

A API iniciará na porta 3333. Abra [http://localhost:3333/tarifas](http://localhost:3333/tarifas) para visualizar os dados no navegador. Também é possível acessar os dados usando um cliente para visualizar os dados da API como o Insomnia.


### Funcionalidades
- Cadastro de tarifa
- Listagem de todas as tarifas
- Listagem de tarifa especifica
- Atualização de tarifa
- Remoção de tarifa

## Como testar as funcionalidades

Utilize uma aplicação para fazer as requisições para a API, tais como Postman e/ou Insomnia.

![Screenshot from 2021-05-05 19-38-42](https://user-images.githubusercontent.com/74794011/117220155-09e03b80-addd-11eb-9fcd-5f7bbd566ea6.png)


Cadastro de tarifa - faça uma requisição POST passando a rota [http://localhost:3333/tarifas](http://localhost:3333/tarifas) e no body um objeto JSON como o que se segue:
{
	"origem": "064",
	"destino": "061",
	"custo": 2.90
}

Listagem de todas as tarifas - faça uma requisição GET passando a rota [http://localhost:3333/tarifas](http://localhost:3333/tarifas).

Listagem de tarifa especifica - faça uma requisição GET passando a rota com o ID desejado [http://localhost:3333/tarifas/:id](http://localhost:3333/tarifas/:id)

Atualização de tarifa - faça uma requisição PUT passando a rota com o ID desejado [http://localhost:3333/tarifas/:id](http://localhost:3333/tarifas/:id) e no no body um objeto JSON com os dados atualizados.

Remoção de tarifa - faça uma requisição DELETE passando a rota com o ID desejado [http://localhost:3333/tarifas/:id](http://localhost:3333/tarifas/:id).


### Testes unitários

`yarn test` para visualizar os testes desenvolvidos para validar as regras de negócios da aplicação.

### Autor
---

<a href="https://github.com/EmanuelcPereira">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/74794011?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Emanuel Pereira</b></sub></a> <a href="https://github.com/EmanuelcPereira" title="Github"></a>

[![Github Badge](https://img.shields.io/badge/-Emanuel-lightgrey?style=flat-square&logo=Github&logoColor=white&link=https://github.com/EmanuelcPereira)](https://github.com/EmanuelcPereira)
[![Linkedin Badge](https://img.shields.io/badge/-Emanuel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/emanuel-c-pereira/)](https://www.linkedin.com/in/emanuel-c-pereira/)
[![Gmail Badge](https://img.shields.io/badge/-emanuelcdpr@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:emanuelcdpr@gmail.com)](mailto:emanuelcdpr@gmail.com)