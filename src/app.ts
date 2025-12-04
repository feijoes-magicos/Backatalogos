import express, {Express, IRouter, RequestHandler } from 'express'

type ExpressMidlewareFirstParam = string | RequestHandler | IRouter;

class App {
	app:Express
	constructor () {
		this.app = express()
	}
	listen(value = 3000){
		this.app.listen(value, () => {
			console.log('Aplicativo operante na porta '+value)
		})
	}

	//overloading de métodos destinado as diferentes implementações que podem ser usadas no método use do express
	setMiddleware(pathName:string, ...handlers:(RequestHandler|IRouter)[]):void
	setMiddleware(...handlers:(RequestHandler|IRouter)[]):void
	setMiddleware(eitherPathHandler:ExpressMidlewareFirstParam, ...handlers:(RequestHandler|IRouter)[]){
		if(typeof eitherPathHandler === 'string' && !!handlers){
			this.app.use(eitherPathHandler, ...handlers)
			return
		}
		this.app.use(...handlers)
	}
}

export default App;
