# DesafioIBM em NodeJS
### API CRUD de Reservas

- A aplicação, em sua primeira inicialização estará com a base zerada.
- O usuário possui as opções:
     - Listagem
         - Listará todos, Listar por.
     - Busca
         - Verificará se o planeta buscado consta na base de dados.
     - Adição
         - Adicionar um novo planeta.
     - Remoção
        - Remover um planeta.
        

### EndPoints da API :

- Listar todas as reservas:
    - Tipo de Request: GET
         - http://localhost:3000/reservas

- Listar reservas por ID:
    - Tipo de Request: GET
         - http://localhost:3000/reservas/admin/{id}

- Listar reservas por status:
    - Tipo de Request: GET
         - http://localhost:3000/reservas/{status}

- Salvar uma determinada reserva :
     - Tipo de Request: POST
       - localhost:3000/reservas
        - ```
          {  
    		"tipo": "HARD",
    		"inicioEm": "2017-05-30T19:00:00Z",
    		"fimEm": "2018-05-30T19:00:00Z"
          }
          ```
- Atualizar uma determinada reserva :
     - Tipo de Request: PUT
       - localhost:3000/reservas/{id}
       - ```
       	 {
    	   "tipo": "HARD",
    	   "inicioEm": "2017-05-30T19:00:00Z",
           "fimEm": "2018-05-30T19:00:00Z"
         }
          ```
	 
- Remover uma determinada reserva :
     - Tipo de Request: DELETE
         - localhost:3000/reservas/cancelar/{id}
         - ```
           {
	       "tipo": "HARD",				
	       "status": "pago",			
	       "criadaEm": "2018-05-29T18:01:10Z",
	       "inicioEm": "2016-05-30T18:00:00Z",
	       "fimEm": "2018-05-30T19:00:00Z",	
	       "duracao": 60,				  
	       "valor": 30.00,				
	       "canceladaEm": "2018-06-30T19:00:00Z"
           }   
          ```
