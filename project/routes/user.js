const express = require('express');

const router = express.Router();

const {handleGetAllUser,
handleGetUserById,
handleUpdateUserById,
handleDeleteUserById,
handleCreateUser} = require('../controllers/user');

// router.get('/users', async (req, res) => {
//     try{
//         const allUserData = await User.find({});

//         const html = `
//         <ul>
//         ${allUserData.map((users) => {
//             return `<li>${users.firstName} - ${users.email}</li>`
//         }).join("")}
//         </ul>`;
        
//         res.set({"content-Type" : "text/html"});
//         return res.status(200).send(html);
//     }
//     catch(err){
//         console.log(err);
//         return res.status(500).json({msg : "Data not found"});
//     }
// });

router.route("/")
.get(handleGetAllUser)
.post(handleCreateUser);

router.route('/:id')
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);

module.exports = router;