const express = require('express');
const router = express.Router()



router.get('/group', (req, res) => {
    res.send("hello  group created");
})

router.post('/group', (req,res) => {
    const {title, code} = req.body;
    res.send("group recived")
    console.log(title, code);
})



module.exports = router;