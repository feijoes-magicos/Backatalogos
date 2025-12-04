import App from "./app";
import dotenv from 'dotenv'

import appRoutes from './routes'

dotenv.config()

const {APP_PORT} = process.env
const app = new App()

app.setMiddleware('/', appRoutes)
app.listen(Number(APP_PORT))
