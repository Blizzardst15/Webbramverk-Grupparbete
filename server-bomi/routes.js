const express = require('express');
const app = express();
const router = express.Router();


let ansokansNames = []

router.get('/read', (req, res) => {
    console.log ({
        method: req.method,
        data: ansokansNames
    })
    res.json({
        status: 'lyckat',
        method: req.method,
        data: ansokansNames
    })
})

router.post('/create', (req, res) =>{
    console.log({
        method: req.method,
        body: req.method
    })

    const ansokansName = {
        id: req.body.id,
        title: req.body.title,
        fullName: req.body.fullName,
        delete: false
    }

    ansokansNames.push(ansokansName)

    res.json({
        status: 'lyckat',
        method: req.method,
        data: ansokansName
    })
})

router.put('/update/:ansokansNameId', (req, res) =>{
    const ansokansNameId = req.params.ansokansNameId
    const title = req.body.title
    const fullName = req.body.fullName
    const email = req.body.email
    const major = req.body.major

    const newAnsokansName = {
        id: ansokansNameId,
        title,
        fullName,
        email,
        major
    }

    console.log('ansokans ID:', ansokansNameId)
    console.log('fullName:', fullName)
    console.log('email:', email)
    console.log('major:', major)

    const ansokansNameIndex = ansokansNames.findIndex((ansokans) => ansokans.id == ansokansNameId)
    console.log('ansokans index:', ansokansNameIndex)
    ansokansNames [ansokansNameIndex] = newAnsokansName

    res.json ({
        status: 'lyckat',
        method: req.method,
        data: newAnsokansName
    })

})


router.delete('/delete/:ansokansNameId', (req, res)=>{
    const ansokansNameId = req.params.ansokansNameId
    const ansokansNameIndex = ansokansNames.find((ansokansName) => ansokansName.id == ansokansNameId)
    ansokansNames.splice(ansokansNameIndex, 1)
    console.log('ansokansNameIndex:', ansokansNameIndex)

    res.json({
        status: 'lyckat',
        method: req.method,
        data: ansokansNameId
    })
})

module.exports = router;
