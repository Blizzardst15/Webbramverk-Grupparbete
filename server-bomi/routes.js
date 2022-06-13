
// test i console



const express = require("express")

const router = express.Router();

let infos = [];


// döpar "/read" för CRUD iställer för all, 
//router.get("/all",(req,res)=>{
router.get("/read",(req,res)=>{
    console.log({
        method:req.method,
    });

    //datan skicar tillbaka infos variabel, i infos array
    res.json({
    status: "lyckats",
    method:req.method,
    data:infos,

    });
});



    router.post('/create',(req,res)=>{
        console.log({
        method:req.method,
        body:req.body,
    });


const info = {
    id:req.body.id,
    // title:req.body.title,
    // description:req.description,
    firstname: req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    major:req.body.major,

}

//lägga till i infos lista
//lägger in ny skapade lista, hämtar in från req

infos.push(info)
//svaret(data) skicakt tillbaka
    res.json({
    status:"lyckats",
    method:req.method,
    // body:req.body,
    data:info,
    });
});

// router.put('/update/:infoId/:firstname/:lastname/:email/:major', (req,res) =>{
router.put("/update/:infoId", (req,res) =>{
const infoId =   req.params.infoId;

const firstname = req.body.firstname;
const lastname = req.body.lastname;
const email = req.body.email;
const major = req.body.major;

//skapa ny variabel newInfo

const newInfo = {
    id: infoId,
    firstname,
    lastname,
    email,
    major,
}

// const info = infos.find((info)=>info.id ==)
const infoIndex = infos.findIndex((info)=>info.id == infoId)
infos[infoIndex] = newInfo;


    res.json({
        status:"lyckats",
        method: req.method,
        data:newInfo,
    });
})
//splice function: ta bort element, 1, tar bort ett element

    router.delete('/delete/:infoId',(req,res)=>{
        const infoId =   req.params.infoId

        const infoIndex = infos.findIndex((info)=>info.id == infoId)
        infos.splice(infoIndex, 1)
    

    res.json({
        status:"lyckats",
        method:"req.method",
        data:infoId,
    })
    })


module.exports = router;