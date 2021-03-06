const router = require('express').Router()

const authCheck = (req,res,next) => {
if(!req.user) {
  res.redirect('/auth/login')
}
else {
    console.log(req.user)
 next()
}
}

router.get('/userprofile' , (req,res) => {
   res.render('userprofile' , {user:req.user})
})
router.get('/' ,authCheck ,(req,res) => {
 res.render('index' , {user:req.user})
})

module.exports = router