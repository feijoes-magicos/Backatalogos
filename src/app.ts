import express, {Express, RequestHandler } from 'express'

interface App {
	app:Express
}

class App implements App {
	constructor () {
		this.app = express()
	}
	listen(value = 3000){
		this.app.listen(value, () => {
			console.log('Aplicativo operante na porta '+value)
		})
	}
	setMiddleware(middleware:RequestHandler, prefix?:string) {
		if(prefix){
			this.app.use(prefix,middleware)
			return
		}
		this.app.use(middleware)
	}
}

export default App;
