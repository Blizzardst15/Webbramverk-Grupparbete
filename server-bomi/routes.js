const express = require('express');

const router = express.Router();


let ansokansNames = []

router.get("/read", (req, res) =>{
    console.log({
        method: req.method,
    
    });

    res.json({
        status: "lyckat",
        method: req.method,
        data: ansokansNames
    })
})

router.post('/create', (req, res) =>{
    console.log({
        method: req.method,
        body: req.method
    })

    const ansokansNames = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        fullName: req.body.fullName,
        email: req.body.email,
        major: req.body.major,
        deleted: false
    }

    ansokansNames.push(ansokanName)

    res.json({
        status: 'lyckat',
        method: req.method,
        data: ansokanName
    })
})

router.put('/update/:ansokansNameId', (req, res) =>{
    const ansokansNameId = req.params.ansokansNameId
    const title = req.body.title
    const description = req.body.description
    const fullName = req.body.fullName
    const email = req.body.email
    const major = req.body.major

    const newAnsokansName = {
        id: ansokansNameId,
        title,
        description,
        fullName,
        email,
        major
    }

    console.log('ansokans id:', ansokansNameId)
    console.log('fullName', fullName, 'description', description)

    const ansokansNameIndex = ansokansNames.findIndex((ansokans) => ansokans.id == ansokansNameId)
    console.log('ansokans index:', ansokansNameIndex)
    ansokansNames[ansokansNamesIndex] = newAnsokansName

    res.json({
        status: 'lyckat',
        method: req.method,
        data: newAnsokansName
    })
})

router.delete('/delete/:ansokansNameId', (req, res) =>{
    const ansokansNameId = req.params.ansokansNameId
    
    const ansokansNameIndex = ansokansNames.find((ansokansNames) => ansokansNameId.id == ansokansNameId)
    ansokansNames.splice(ansokansNameIndex, 1)
    console.log('ansokansNameIndex:', ansokansNameIndex)

    res.json({
        status: 'lyckat',
        method: req.method,
        data: ansokansNameId
    })
})

module.exports = router;