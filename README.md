# API de Usuários - Teste AppMoove

## Tecnologias utilizadas:
- **JavaScript:** Linguagem de programação.
- **Node JS:** Ambiente de execução do JavaScript para o desenvolvimento do lado do servidor.
- **Express:** Framework para a criação das rotas e controle HTTP.
- **Prisma ORM:** ORM para integração com o banco de dados MySQL.
- **MySQL:** Banco de dados relacional utilizado.
- **csv:** Biblioteca para leitura e manipulação de arquivos .csv.
- **zod:** Biblioteca utilizada para a validação de dados.
- **nodemon:** Utilitário que reinicia automaticamente o servidor NodeJS quando necessário.

## Pré-Requisitos
- **NodeJS (v14 ou superior)**
- **MySQL (local ou via Docker)**
- **npm ou yarn**

## Instruções para rodar o projeto

### Passo 1:
**Configurando o banco de dados:**

- Crie o banco de dados MySql:
    ```
    CREATE DATABASE appUsers;
    ```
- Crie um arquivo **.env** na raiz do projeto e configure as variáveis de ambiente ajustando a string de conexão com o banco:
    ```
    DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
    ```
    (Substitua **usuario**, **senha**, e **nome_do_banco** pelos valores do seu banco).

## Passo 2:
**Instalação das dependências do projeto:**

- Instalando dependências necessárias:
    ```
    npm install
    ```
- Executando migrations criadas com o Prisma ORM:
    ```
    npm run migrate
    ```
- Iniciando o projeto:
    ```
    node app.js
    ```
- Iniciando o projeto em modo de desenvolvimento com o nodemon
    ```
    npm run dev
    ```

## Instruções para o uso da API
#### A API é composta por três rotas:
- **/api/import:** Esta rota é uma requisição do tipo POST que é utilizada para importar os 1 milhão de dados do arquivo *users.csv* que se encontra na raiz do projeto e armazená-los no banco de dados que você configurou anteriormente.

- **/api/register:** Esta rota é também é uma requisição do tipo POST que é utilizada para o cadastro de novos usuários. Para a realização da inserção de novos dados é necessário informar os mesmos em formato JSON no body da requisição. Exemplo:
```
{
    "name": "Primeiro Teste",
    "email": "primeiroteste@dominioteste.com"
}
```
Em casos de sucesso, o usuário receberá o seguinte retorno:
```
{
    "message": "User created!",
    "createdUser": {
        "id": "eed4233b-fff7-4702-92e4-e803bd0a85b6",
        "name": "Primeiro Teste",
        "email": "primeiroteste@dominioteste.com"
    }
}
```
O id mostrado acima é um exemplo de UUID (Universally Unique Identifier), que é criado automaticamente de acordo com o campo "id" no nosso banco de dados.

- **/api/users:** Esta é a rota responsável pela busca de usuários através no nome ou email do mesmo sendo a requisição do tipo GET. A rota de busca aceita os *query params* na url, sendo eles nome ou email do usuário. Exemplo:

**Query params para a busca por nome:**
```
http://localhost:8080/api/users?name=Maria&page=1
``` 
**Retorno:**
```
{
    "users": [
        {
            "id": "0006ac13-6d15-430f-9a52-278cde9d927d",
            "name": "Maria Santos",
            "email": "Isabela_Moreira40@gmail.com"
        },
        {
            "id": "000b9b64-be07-47b7-8144-48dc80c82283",
            "name": "Maria Costa",
            "email": "Clia_Melo67@bol.com.br"
        },
        {
            "id": "000f9850-2d12-434b-8c80-4a2d2c800339",
            "name": "Maria Oliveira",
            "email": "Karla.Batista1@gmail.com"
        },
        {
            "id": "001078a7-3a7d-4a62-9eae-13a44633c363",
            "name": "Maria Barros",
            "email": "Margarida_Martins18@hotmail.com"
        },
        {
            "id": "0013a8f8-55b0-46d8-bcb1-08915782f604",
            "name": "Maria Melo",
            "email": "Feliciano58@live.com"
        },
        {
            "id": "0013fefb-17c6-455f-8da5-47e7060fc3e9",
            "name": "Maria Carvalho",
            "email": "Carlos24@bol.com.br"
        },
        {
            "id": "00184cdb-c44f-427d-8d93-687cac549ad3",
            "name": "Maria Oliveira",
            "email": "Sulen_Costa41@yahoo.com"
        },
        {
            "id": "001b1229-5b3f-4dbd-a240-04c675bcdca7",
            "name": "Maria Pereira",
            "email": "Ricardo_Oliveira@yahoo.com"
        },
        {
            "id": "00206231-8679-4d03-aeb3-da17637aed40",
            "name": "Maria Barros",
            "email": "Alessandro60@yahoo.com"
        },
        {
            "id": "0026a630-c05e-48ef-b576-5d7d7da968b3",
            "name": "Maria Santos",
            "email": "Pablo94@bol.com.br"
        },
        {
            "id": "0026af5e-cd7b-4e14-84ed-07743918998d",
            "name": "Maria Nogueira",
            "email": "Eduardo_Melo@bol.com.br"
        },
        {
            "id": "002f4b69-bdea-4de8-b947-3f785591e054",
            "name": "Maria Saraiva Neto",
            "email": "Larissa_Nogueira53@yahoo.com"
        },
        {
            "id": "003a60a6-bac5-447b-a768-dab5f6d4ac9c",
            "name": "Maria Saraiva",
            "email": "Larissa.Souza@gmail.com"
        },
        {
            "id": "003f4ce2-6ea1-40f1-9220-4cc1163bcb7f",
            "name": "Maria Albuquerque",
            "email": "Heitor89@gmail.com"
        },
        {
            "id": "00408f3b-6a2d-4a7a-89c0-a95505ae5c4d",
            "name": "Maria Batista",
            "email": "Warley.Braga@yahoo.com"
        },
        {
            "id": "004eed1a-9791-4140-9730-25bc1ffab2c6",
            "name": "Maria Pereira",
            "email": "Carlos_Pereira90@bol.com.br"
        },
        {
            "id": "0053650a-25f6-4c7f-a370-4aecf4009568",
            "name": "Maria Silva",
            "email": "Mrcia.Barros33@hotmail.com"
        },
        {
            "id": "00543b29-26b8-422f-8465-d38cde196aba",
            "name": "Maria Carvalho",
            "email": "Pablo.Carvalho@live.com"
        },
        {
            "id": "005a9624-fe0d-46e2-adb6-bf12f1dd3eba",
            "name": "Sra. Maria Carvalho",
            "email": "Lorena.Melo@hotmail.com"
        },
        {
            "id": "00606abb-4833-4127-b751-f7958eb465f8",
            "name": "Maria Martins",
            "email": "Roberto.Albuquerque@yahoo.com"
        }
    ]
}
```
Esta query buscará por qualquer registro no banco que possua "Maria" na coluna "name" e retornará apenas 20 resultados por página, começando por padrão na página 1.

**Query params para a busca por email:**
```
http://localhost:8080/api/users?email=Maria&page=1
```
**Retorno:**
```
{
    "users": [
        {
            "id": "00028b3c-4427-4c80-a5d2-ed357261713f",
            "name": "Esther Macedo Jr.",
            "email": "Maria.Pereira30@live.com"
        },
        {
            "id": "0009ce60-175f-4365-b413-961806db21dd",
            "name": "Hugo Martins",
            "email": "Maria20@live.com"
        },
        {
            "id": "00121303-1eab-41a3-8cfe-053c534d1dba",
            "name": "Breno Macedo",
            "email": "Maria22@hotmail.com"
        },
        {
            "id": "0016ac6e-86cf-409e-a78d-3e1fd1d755ab",
            "name": "Júlio Moreira",
            "email": "Maria.Santos@hotmail.com"
        },
        {
            "id": "001c4f40-5c3e-4f7e-931d-2549c0b086c7",
            "name": "Sílvia Xavier",
            "email": "Maria.Santos@gmail.com"
        },
        {
            "id": "00273a62-5e5a-41cb-bfd9-4845a1cd42b8",
            "name": "Marcelo Albuquerque",
            "email": "Maria.Pereira@yahoo.com"
        },
        {
            "id": "0037626f-bcc0-4a9b-98e1-d8c6e6f5927c",
            "name": "Yuri Oliveira",
            "email": "Maria.Costa@live.com"
        },
        {
            "id": "0037fac8-c2b1-4ce3-b536-a288b24146b7",
            "name": "Frederico Carvalho",
            "email": "Maria87@gmail.com"
        },
        {
            "id": "004293b7-668c-4c5e-b53f-657adcbf8998",
            "name": "Nataniel Saraiva",
            "email": "Maria.Nogueira84@hotmail.com"
        },
        {
            "id": "004991f8-1acb-4559-a1ac-7c1c9d983cde",
            "name": "Marcos Xavier",
            "email": "Maria_Carvalho@yahoo.com"
        },
        {
            "id": "005f0a73-567e-4d34-b8c6-810317c6991e",
            "name": "Carla Costa",
            "email": "Maria_Macedo@hotmail.com"
        },
        {
            "id": "006294eb-ff0b-4684-aa38-870e40def69f",
            "name": "Deneval Nogueira",
            "email": "Maria61@gmail.com"
        },
        {
            "id": "0066b869-dabb-44fd-83ef-fe4f1ce2c9ad",
            "name": "Danilo Silva",
            "email": "Maria.Pereira@yahoo.com"
        },
        {
            "id": "00798366-334a-45b5-b11a-3ac118c548b5",
            "name": "Dr. Alessandro Pereira",
            "email": "Maria97@gmail.com"
        },
        {
            "id": "007a27f7-a9e1-4f8d-b97e-5852fde3f35c",
            "name": "Silas Silva",
            "email": "Maria_Barros84@hotmail.com"
        },
        {
            "id": "007a3cac-ca07-4235-b3fe-25d2113be1cc",
            "name": "Gúbio Reis Neto",
            "email": "Maria_Albuquerque36@gmail.com"
        },
        {
            "id": "007c0ca7-31c3-44f7-8418-4c58bb299894",
            "name": "Gúbio Batista",
            "email": "Maria60@live.com"
        },
        {
            "id": "008c7cd8-d0f2-4618-a1e6-57c0d3517044",
            "name": "Carla Moreira",
            "email": "Maria_Batista81@gmail.com"
        },
        {
            "id": "009c21ef-2f86-4329-9407-8a67a6dfa9bc",
            "name": "Eduarda Reis",
            "email": "Maria.Batista@yahoo.com"
        },
        {
            "id": "00a36e47-f8a8-40ba-9ceb-a2b8130dfd17",
            "name": "Marcos Batista",
            "email": "Maria1@bol.com.br"
        }
    ]
}
```

Assim como a query de pesquisa por nome, o retorno desta busca pelo email do usuário retornará todos os usuários que possuem "Maria" na coluna "email" do banco de dados, mostrando apenas 20 resultados por página.

## Colocações adicionais
- **Por que o uso de JavaScript puro no projeto:**
A princípio, minha ideia era utilizar TypeScript para uma tipagem mais forte, mas fiquei mais confortável com o uso de JavaScript durante o desenvolvimento.

- **Não uso do Docker na aplicação:**
O Docker seria uma excelente opção para ser implementada no projeto, porém como ainda não tenho conhecimento sólido para a utilização preferi criar o servidor localmente. Mas o Docker será implementado em breve.

