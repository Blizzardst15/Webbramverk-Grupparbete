const express = require('express');
const app = express();
const router = express.Router();
const fetch = require('node-fetch');


let teachersNames = []

router.get("/all", (req, res) => {
    console.log({
        method: req.method,
        data: teachersNames
    })
    res.json({
        status: 'success',
        method: req.method,
        data: teachersNames
    })
})

router.post('/create', (req, res) => {
    console.log({
        method: req.method,
        body: req.method
    })

    const teachersName = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        bankAccount: req.body.bankAccount,
        fullName: req.body.fullName,
        deleted: false
    }


    teachersNames.push(teachersName)

    res.json({
        status: 'success',
        method: req.method,
        data: teachersName
    })
})



router.put('/update/:teachersNameId', (req, res) => {
    const teachersNameId = req.params.teachersNameId
    const title = req.body.title
    const description = req.body.description
    const bankAccount = req.body.bankAccount
    const fullName = req.body.fullName

    const newTeachersName = {
        id: teachersNameId,
        title,
        description,
        bankAccount,
        fullName
    }
    console.log('teachers id:', teachersNameId)
    console.log('fullName', fullName, 'description', description)



    const teachersNameIndex = teachersNames.findIndex((teachers) => teachers.id == teachersNameId)
    console.log('teachers index:', teachersNameIndex)
    teachersNames[teachersNameIndex] = newTeachersName



    res.json({
        status: 'success',
        method: req.method,
        data: newTeachersName
    })

})

router.delete('/delete/:teachersNameId', (req, res) => {
    const teachersNameId = req.params.teachersNameId
    const teachersNameIndex = teachersNames.find((teachersName) => teachersName.id == teachersNameId)
    teachersNames.splice(teachersNameIndex, 1)
    console.log('teachersNameIndex:', teachersNameIndex)

    res.json({
        status: 'success',
        method: req.method,
        data: teachersNameId
    })
})

module.exports = router;