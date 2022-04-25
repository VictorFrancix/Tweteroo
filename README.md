# Tweteroo

# Descrição

Seu primeiro projeto back-end será a construção da API do Tweteroo, um clone do Twitter!

# Requisitos

- Armazenamento de dados
    - Para persistir os dados (usuários e tweets), utilize variáveis globais em memória.
    - O formato de um **usuário** deve ser:
        
        ```jsx
        {
        	username: 'bobesponja', 
        	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
        }
        ```
        
    - O formato de um **tweet** deve ser:
        
        ```jsx
        {
        	username: "bobesponja",
        	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
          tweet: "eu amo o hub",
        }
        ```
        
    - Repare que a informação “avatar” **não vem** da requisição post do `/tweets`. Você vai precisar obtê-la de outra forma.

- **POST** `/sign-up`
    - [x] Deve receber (pelo *body* da *request*), um parâmetro **username** e um **avatar**, contendo o nome do username do usuário e a sua foto de avatar:
        
        ```jsx
        {
            username: "bobesponja",
        		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
        }
        ```
        
    - [x] Salvar esse usuário num array de usuários do servidor
    - [x] Por fim, retornar a mensagem `“OK”`
- **POST** `/tweets`
    - [x] Deve receber (pelo *body* da *request*), os parâmetros `username` e `tweet`:
        
        ```jsx
        {
        	username: "bobesponja",
          tweet: "eu amo o hub"
        }
        ```
        
    - [x] Salvar esse *tweet* num array de *tweets* do servidor.
    - [x] Por fim, retornar a mensagem `“OK”` .
- **GET** `/tweets`
    - [x] Retornar os **10 últimos tweets** publicados
        
        ```jsx
        [
        	{
        		username: "bobesponja",
        		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        	  tweet: "eu amo o hub"
        	}
        ]
        ```
# Bônus

- **Validação de dados**
    - [x]  Todas as rotas deverão validar os dados recebidos, caso algum dado venha vazio ou no formato inválido, o servidor deverá retornar o status code 400 (BAD REQUEST) e não continuará com a execução da função. **Dica:** procure pelo método `res.sendStatus()`.
    - [x]  **POST** `/sign-up` precisa validar se os valores de `username` e `avatar` foram enviados e caso contrário, deverá responder com a mensagem “Todos os campos são obrigatórios!”.
    - [x]  **POST** `/tweets` precisa validar se os valores de `username` e `tweet` foram enviados e caso contrário, deverá responder com a mensagem “Todos os campos são obrigatórios!”.

- **Status codes de requisições POST**:

    - [x]  Todas as requisições POST deverão retornar o status code 201 (CREATED) além do seu retorno já descrito (mensagens, JSONs, etc). **Dica:** procure pelo método `res.status()` e tente utilizá-lo junto do método `res.send()`

- **GET** `/tweets/USERNAME`
    - [x]  Retornar todos os *tweets* publicados do usuário recebido por parâmetro de rota
- **POST** `/tweets` recebendo username por Header
