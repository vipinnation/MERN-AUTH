const User = require('../../model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


function loginController() {
    return {
        async index(req, res) {
            const { email, password } = req.body;

            try {
                const user = await User.findOne({ email: email });

                if (!user) {
                    return res.status(201).json({ message: "User Not Registered" });
                }

                else {

                    if (await bcrypt.compareSync(password, user.password)) {
                        sendToken(user, 201, res)
                    }

                    else {
                        return res.status(201).json({ message: 'Password Incorrect' })
                    }
                }
            } catch (error) {

                console.log(error)
                return res.status(200).json({ message: "Something went wrong" })
            }

        }
    }
}



const sendToken = (User, statusCode, res) => {
    const token = User.isSignedToken();
    console.log(token)
    res.status(statusCode).json({ success: true, token })
}

module.exports = loginController