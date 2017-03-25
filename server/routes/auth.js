import express from 'express'
import User from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';
let router=express.Router();

router.post('/', (req,res)=>{
	const{identifier, password}=req.body;
	console.log(req.header.data);
	
	User.query(
	{
	where:{username:identifier},
	orWhere:{email:identifier}
	}).fetch().then(user =>{
		if(user){
			if(bcrypt.compareSync(password,user.get('password_digest'))){
				console.log('1');
				const token = jwt.sign({
				id:user.get('id'),
				username: user.get('username')	
				},config.jwtSecret);
				res.json({token});
				
			}
			else{
				console.log('2');
				res.status(401).json({errors:{form: 'Invalid Credentials'}});
		
				}
		}else{
			console.log('3');
			res.status(401).json({errors:{form: 'Invalid Credentials'}});
		}

	})

});

export default router;