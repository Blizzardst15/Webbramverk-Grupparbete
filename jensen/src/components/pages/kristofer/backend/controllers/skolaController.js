const asyncHandler = require('express-async-handler')

const Skola = require('../models/skolModel')
const User = require('../models/userModel') 
//@desc     GET skolor
//@route    GET api/skolor
//@access   Private
const getSkolor = asyncHandler(async (req, res) => {
    const skolor = await Skola.find({ user: req.user.id})

    res.status(200).json(skolor)
})

const getSkolor2 = asyncHandler( (req, res) => {
    const skolor = Skola.find({ user: req.user.id})

    res.status(200).json(skolor)
})

//@desc     SET skola
//@route    POST api/skolor
//@access   Private
const setSkola = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error ('lägg till text är du snäll')
    }


    const skola = await Skola.create({
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(skola)
})

//@desc     Update skola
//@route    PUT api/skolor/:id
//@access   Private

const updateSkola = asyncHandler(async (req, res) => {
    const skola = await Skola.findById(req.params.id)

    if(!skola) {
        res.status(400)
        throw new Error('Kan inte hitta den skolan')
    }

    //kolla om användare finns
    if(!req.user) {
        res.status(401)
        throw new Error('Användare finns ej')
    }


    //skolanvändare matchar user  
    if(skola.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Användare ej auktoriserad')
    }

    const updatedSkola = await Skola.findByIdAndUpdate(req.params.id, req.
        body,{
        new: true,
    })

    res.status(200).json(updateSkola)
})

//@desc     Delete skola
//@route    DELETE api/skolor/:id
//@access   Private
const deleteSkola = asyncHandler(async (req, res) => {
    const skola = await Skola.findById(req.params.id)

    if(!skola) {
        res.status(400)
        throw new Error('Kan inte hitta den skolan')
    }




    //kolla om användare finns
    if(!req.user) {
        res.status(401)
        throw new Error('Användare finns ej')
    }


    //skolanvändare matchar user
    if(skola.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Användare ej auktoriserad')
    }

    await skola.remove()

    res.status(200).json({ id: req.params.id})
})


module.exports = {
    getSkolor,
    setSkola,
    updateSkola,
    deleteSkola,
}