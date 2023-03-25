const {users} = require('../Database/UserSchema');
const jwt = require('jsonwebtoken')

async function auth(req, res, next){
    const AuthToken = req.headers['authorization'];
    // console.log(AuthToken);
    if(AuthToken){
        const token = AuthToken.split(' ').pop();

        if(token){
            try{
                jwt.verify(token,'kjjb654j3kkn29dv866s9fda5fkjsd67asd56')
                
            }catch(err){
                return res.status(401).send({
                    message:"Invalid Token"
                })
            }
        }
        let userFind = jwt.decode(token);
        userFind = await users.findOne({_id:userFind._id});
        userFind = userFind.toJSON();
        delete userFind.password;
        req.userFind = userFind;
        next();
    }else{
        return res.status(403).send({
            message:"No token"
        })
    }

}

module.exports = {auth}