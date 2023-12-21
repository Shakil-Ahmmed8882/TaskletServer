const User = require("../../modal/Users/users")

const router = require("express").Router()


router.post("/users",async(req,res)=> {
            try {
                  const user = req.body
                  const result = await User.create(user)
                  res.send(result)
            } catch (error) {
                  console.log(error)
            }
})

module.exports = router