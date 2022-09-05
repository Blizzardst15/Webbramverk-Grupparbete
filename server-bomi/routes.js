const express = require("express");
const router = express.Router();

let numApplications = 0
let applications = []

router.get("/clear", (req, res) => {
    applications = []
    res.status(200).send()
})

router.get("/read", (req, res) => {
    console.log ({method: req.method,data: applications})

    res.json({
        status: "lyckat",
        method: req.method,
        data: applications,
    })
})

router.post("/create", (req, res) =>{
    console.log({method: req.method,body: req.body,})
    let data = req.body
    data.id = ++numApplications
    applications.push(data)

    res.json({
        status: "lyckat",
        method: req.method,
        data: data,
    })
    console.log(data)
})

router.put("/update/:id", (req, res) =>{
    const id = req.params.id;
    const title = req.body.title;
    const fullName = req.body.fullName;
    const email = req.body.email;
    const major = req.body.major;

    console.log('ansokan ID:', id)
    console.log('fullName:', fullName)
    console.log('email:', email)
    console.log('major:', major)

    const data = applications.find((application) => application.id == id)
    data.title=title;
    data.fullName=fullName;
    data.email=email;
    data.major=major;

    res.json ({
        status: "lyckat",
        method: req.method,
        data: data,
    })
})


router.delete("/delete/:id", (req, res)=>{
    const id = req.params.id;
    const index = applications.findIndex((application) => application.id == id)
    applications.splice(index, 1)
    console.log('application:', id)
    res.json({
        status: "lyckat",
        method: req.method,
        data: {removed: id}
    })
})

module.exports = router;
