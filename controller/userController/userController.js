import User from '../../model/User/User.js';

 class userController{
    // Add user
    addUser = async (req,res)=>{
        try{
             const user = await User.create(req.body);
             return res.status(201).json(user);
        }catch(err){
            return res.status(500).json({Error:err.message})
        }
        
    }

    // getAll User
    getAllUSer = async (req,res)=>{
       try{
           const users = await  User.find({});
           return res.status(200).json({user:users})
       }catch(err){
        return res.json({Error:err})
       }
    }


    // delete
    deleteUser = (req,res)=>{

    }


    // get Singal User
    getSingleUser = (req,res)=>{

    }

    // for the update user
    updateUser = (req,res)=>{

    }
}

export default new userController();