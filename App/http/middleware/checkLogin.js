// const jwt = require('jsonwebtoken');
// const User = require('../../model/User')




// exports.checkLogin = async (req, res, next) => {

//     let token;

//     if (req.headers.authorization && req.headers.authorization.startsWith('Token') ) {
//         token = req.headers.authorization.split(" ")[1]; 
//     }


//     if (!token) {
//         return next(res.status(200).json({ message: "Not Authorized Bro" }));
//     }


//     try {
//         const {decoded} = jwt.verify(token,"d0d7244e8e535232369bb79905c420121e17a11bcab54e23c1b21287af08ee987880af")
//         console.log(decoded)

//         const user = await User.findById(decoded.id);

//         if(!user){
//             return next(res.status(201).json({message:'User Not Found With this Id'}))
//         }

//         req.user = user;
//         next(res.status(201).json({message:{Next}}))
//     } catch (error) {
//         return next(res.status(201).json({message:error}))
//     }




// }











const jwt = require('jsonwebtoken');
const User = require('../../model/User');


exports.checkLogin = async (req, res, next) => {

    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Token")) {


        token = req.headers.authorization.split(" ")[1]


    }

    if (!token) {

        return next(res.status(201).json({ messgae: 'Not Authorized Bro' }))
    }
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)

        const user = await User.findById(decoded.id);

        if (!user) {
            next(res.status(403).json({ message: "User Not Found with this id" }))
        }
        res.user = user;
        next();
    } catch (error) {

        return next(error)

    }
}