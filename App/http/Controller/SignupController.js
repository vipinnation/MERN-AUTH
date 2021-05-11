const User = require('../../model/User')
const bcrypt = require('bcryptjs')

const SignUpController = ()=>{
    return{
        index(req,res){
            const {email , password} =req.body;

            User.findOne({email:email}, (err,data)=>{
                if(err) throw err;

                if(data){
                    console.log("User ALready present" , data)
                    return res.status(200).json({message:"User Already Registered"})
                }

                if(!data){
                    
                    const hashPassword = bcrypt.hashSync(password,10)

                    const saveUser = new User({
                        email:email,
                        password:hashPassword
                    })

                    saveUser.save().then((data)=>{
                        console.log(data)
                        return res.status(201).json({message:'User Register Successfully'})
                    }).catch((err)=>{
                        console.log(err)
                        return res.status(201).json({message:"Something went wrong"})
                    })
                }
            })
        }
    }
}


module.exports = SignUpController