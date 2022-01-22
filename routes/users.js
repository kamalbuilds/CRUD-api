import express from 'express';
import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';
const router =express.Router();
const users=[
    {
        firstName:"kamal",
        LastName:"nayan",
        age: 25
    },
    {
        firstName:"vidhika",
        LastName:"jha",
        age: 19
    }
]

router.get('/',(req,res)=>{
    res.send(users);
    console.log(users);

});
router.post('/',(req,res)=>{
    console.log('POST ROUTE REACHED');
    const user=req.body;
    // const userwithid= {...users}
    users.push({...user, id: uuidv4()});
    res.send(`User with name ${user.LastName} added to the db`);
});
export default router;