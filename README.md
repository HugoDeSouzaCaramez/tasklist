# tasklist

<p>Desafio Kebook</p>

<p>Esta API retorna informações no formato json</p>
<p>Primeiro crie um usuário enviando uma requisição para localhost:3333/users</p>
<p>Exemplo de json para criar usuário: { "name":"nome", "email":"email", "senha":"senha" }
<p>Depois autentique o usuário Para receber um token de autenticação para um usuário envie uma requisição para localhost:3333/sessions com um payload: "email": "exemploemail@teste.com" e "password": "exemplosenha"</p>
<p>Somente com o token de autenticação configurado é possivel acessar com sucesso os endpoints</p>

<p>yarn init -y</p>
<p>yarn add express</p>
<p>yarn add nodemon sucrase -D</p>
<p>npm install sqlite3 --save</p>
<p>npm install sqlite --save</p>
<p>npm install --save sequelize </p>
<p>npm install --save-dev sequelize-cli</p>
<p>npx sequelize-cli init   (já cria a conexão com o banco de dados models/index.js)</p>
<p>yarn sequelize migration:create --name=create-users</p>
<p>yarn sequelize db:migrate</p>
<p>npx sequelize-cli model:generate --name User --attributes name:string,email:string,password_hash:string</p>
