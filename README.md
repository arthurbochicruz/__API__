# __API__
Começando o rumo de API

### Clonando repositorio alura:

## baixa nosso backend
git clone https://github.com/alura-cursos/api-alurabooks.git

## entra na pasta do backend
cd api-alurabooks

## instala as dependências que estão listadas no arquivo package.json
npm install

## executa o backend e o disponibiliza através de um servidor no endereço http://localhost:8000
npm run start-auth


* ----------------------------------------------------------------------------------------------- 

## baixa nosso frontend
git clone https://github.com/alura-cursos/curso-react-alurabooks.git

## entra na pasta do frontend
cd curso-react-alurabooks

## seleciona a versão correta
git checkout aula-5

## instala as dependências
npm install

## compila o frontend e o disponibiliza através de um servidor no endereço http://localhost:3000
npm start


# Explicação do server.js
1. import express from 'express'

Importa a biblioteca Express, que é um framework para criar servidores HTTP em Node.js de forma simples.

Com o Express, você pode definir rotas, lidar com requisições e respostas HTTP, middlewares, etc.

2. import { PrismaClient } from './generated/prisma/index.js'

Importa a classe PrismaClient do Prisma, que é uma ferramenta para facilitar a comunicação do seu código com o banco de dados.

O caminho './generated/prisma/index.js' é onde o Prisma gerou o cliente com base no seu schema (definição do banco).

O PrismaClient é a interface para executar comandos como criar, buscar, atualizar ou deletar dados no banco.

3. const prisma = new PrismaClient()

Cria uma nova instância do PrismaClient.

Com essa instância, você vai interagir com o banco de dados usando métodos como prisma.user.create(), prisma.user.findMany(), etc.

Esse objeto prisma representa a conexão com o banco e os modelos definidos.

4. const app = express()

Cria uma aplicação Express, ou seja, o servidor HTTP que você vai configurar.

app será usado para definir rotas e middlewares, além de iniciar o servidor.

5. app.use(express.json())

Adiciona um middleware para interpretar o corpo das requisições que chegam no formato JSON.

Isso permite acessar req.body já como um objeto JavaScript, facilitando a leitura dos dados enviados pelo cliente.

Sem isso, o Express não sabe interpretar JSON e req.body seria undefined.

6. app.post('/usuarios', async (req, res) => { ... })

Define uma rota HTTP do tipo POST no caminho /usuarios.

Essa rota será acionada quando o cliente enviar uma requisição POST para esse caminho.

A função passada é um handler assíncrono (async) que recebe os objetos req (requisição) e res (resposta).

Dentro dela, você vai processar os dados enviados e responder.

7. Dentro da rota POST, await prisma.user.create({ data: {...} })

Executa uma operação para criar um novo usuário na tabela/modelo user do banco de dados.

O método .create() do Prisma recebe um objeto que indica os dados que serão inseridos.

O objeto data contém os valores que serão salvos.

Aqui, os valores vêm de req.body.email, req.body.name e req.body.age, que são enviados pelo cliente no corpo da requisição.

O await faz o código esperar até que o Prisma confirme que a criação foi concluída.

8. res.status(201).json(req.body)

Envia uma resposta HTTP para o cliente.

.status(201) define o código HTTP 201, que significa “Criado com sucesso”.

.json(req.body) envia de volta os dados que o cliente enviou, já em formato JSON.

Assim, o cliente sabe que a criação foi feita e recebe os dados cadastrados.

9. app.put('/usuarios/:id', async (req, res) => { ... })

Define uma rota HTTP do tipo PUT para atualizar dados.

O caminho /usuarios/:id tem um parâmetro dinâmico :id que pode ser acessado via req.params.id.

Essa rota será usada para atualizar o usuário cujo id for igual ao que foi passado na URL.

Função assíncrona que recebe requisição e resposta.

10. Dentro da rota PUT, await prisma.user.update({ where: {...}, data: {...} })

Executa uma operação para atualizar um registro existente na tabela/modelo user.

O parâmetro where indica qual registro será atualizado, usando o id recebido via URL (req.params.id).

O parâmetro data indica os novos valores para os campos email, name e age (vindo do corpo da requisição).

O await garante que o código espere a conclusão da atualização.

11. res.status(201).json(req.body)

Responde ao cliente com status 201 (Criação/Atualização bem sucedida).

Envia o corpo da requisição de volta em JSON para confirmar os dados atualizados.

(Nota: o status 201 é mais usado para criação, normalmente para atualização usa-se 200 ou 204, mas funciona.)

12. app.get('/usuarios', async (req, res) => { ... })

Define uma rota HTTP GET para listar usuários.

Quando o cliente fizer uma requisição GET para /usuarios, essa função será executada.

É assíncrona porque faz uma consulta ao banco de dados.

13. const users = await prisma.user.findMany()

Usa o método findMany() do Prisma para buscar todos os registros da tabela/modelo user.

await faz o código esperar até receber a lista completa do banco.

14. res.json(users)

Envia a lista de usuários encontrada para o cliente no formato JSON.

Essa resposta contém todos os usuários cadastrados no banco.

15. res.status(200).json(users)

Essa linha está redundante: res.json(users) já envia a resposta com status 200 padrão.

Na prática, só uma dessas linhas deveria estar, para evitar erros.

O status 200 indica sucesso na requisição GET.

16. app.delete('/usuarios/:id', async (req, res) => { ... })

Define uma rota HTTP DELETE para deletar um usuário.

O caminho tem um parâmetro :id para indicar qual usuário apagar.

Função assíncrona para deletar o usuário do banco.

17. await prisma.user.delete({ where: { id: req.params.id } })

Executa a operação para deletar o registro da tabela/modelo user cujo id corresponda ao valor recebido pela URL.

O await aguarda a conclusão da exclusão.

18. res.status(200).json({message: 'Usuario Deletado Com Sucesso'})

Responde ao cliente com status 200 (sucesso).

Envia um objeto JSON com a mensagem confirmando a exclusão.

19. app.listen(5001)

Faz o servidor começar a escutar (ou "rodar") na porta 5001.

A partir desse momento, o servidor aceita requisições HTTP nas rotas definidas.

@rd31102bc 

SENHA: pGIO4BkBtB0PTmpR

SENHA GERADA: Kbm6SYOrLRI7MRCw 