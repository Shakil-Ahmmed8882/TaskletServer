const router = require("express").Router();

router.get('/tasks',async(req,res)=> {
      res.send({tasks:"task 4"})
})


module.exports = router;

