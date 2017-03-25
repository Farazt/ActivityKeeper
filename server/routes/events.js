import express from 'express';
import authenticate from '../middlewares/authenticate';
let router = express.Router();

router.post('/',(req,res)=>{
		//console.log(req.body);
	res.status(200).json({success:true});
});


export default router;








//authenticateCallChecks