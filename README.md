# Setup da aplicação
## APP
TODO

## Parse-Server Dashboard (visualização e edição de dados)
1. Rode
 ```console
npm install -g parse-dashboard
```


2. Rode: 
```console
parse-dashboard --dev --appId myAppId --masterKey myMasterKey --serverURL "https://autism-apis.herokuapp.com/parse" --appName autism-app
```

3. Abra localhost:4040 para navegar pela dashboard do parse-server

### Descrição das tabelas: 

### **User children**

A tabela `userChildren` é responsavel pelo cadastro da criança.

**Ela espara o seguinte formato de dados:**

name: ***String***,

age: ***Number***,

syndrome: ***String***,

teaching: ***String***,

result: ***object***,