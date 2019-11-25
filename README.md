# DesafioIBM

GET  ALL     - http://localhost:3000/reservas
GET ByID     - http://localhost:3000/reservas/admin/{id}
GET ByStatus - http://localhost:3000/reservas/{status}
POST - localhost:3000/reservas
{
    "tipo": "HARD",
    "inicioEm": "2017-05-30T19:00:00Z",
    "fimEm": "2018-05-30T19:00:00Z"
}

PUT - localhost:3000/reservas/{id}
{
    "tipo": "HARD",
    "inicioEm": "2017-05-30T19:00:00Z",
    "fimEm": "2018-05-30T19:00:00Z"
}

DELETE - localhost:3000/reservas/cancelar/{id}

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
