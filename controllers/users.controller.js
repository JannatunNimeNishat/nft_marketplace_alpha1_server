const Users = require('../models/users.model');

const app = require('../app')




const saveUser = async (req, res) => {
    try {
        const user = await Users.findOne({ username: req.body.username });

        if (!user) {

            /* bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
                console.log(user);
                const newUser = new Users({
                    username: req.body.username, email: req.body.email, password: hash, img: req.body.imgURL, owned_nfts: req.body.owned_nfts, amount: req.body.amount, followed_artists: req.body.followed_artists
                });

                const savedUser = await newUser.save();

                res.status(201).send({ insertedId: 1, data: savedUser });
            }); */
        } else {
            ;
            res.send({ insertedId: 0, message: 'user is already exists, Please signIn' });
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}


// get user
const getUser = async (req,res)=>{
    try {
        const email = req.params.email;
        const user = await Users.findOne({email:email});
        if(!user){
            res.send('user not found')
        }else{
            res.send(user)
        }
    } catch (error) {
        res.status(500).send(error.message);
    } 
}






module.exports = { saveUser,getUser };
