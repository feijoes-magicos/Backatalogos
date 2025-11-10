import {IRouter, Router} from 'express'

const router:IRouter = Router();

router.get('/', (_, res)=>{
	res.send({message:'API TA RUNFANDO'})
})

export default router;
