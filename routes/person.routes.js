const { Router } = require('express')
const swapi = require('swapi-node')
const User = require('../models/User')
const router = Router()

// /api/person/swperson
router.post('/swperson', async (req, res) => {
    try {
        const {name} = req.body
        console.log('name', name)
        // сделать проверку на объект || число || строку и в зависимости от этого передавать options
        swapi.getPerson({name}).then((response) => {
            res.status(200).json({
                message: 'Да прибудет с тобой сила',
                person: response.results.filter(item => item.name === name)
            })
        })
    } catch (e) {
        res.status(500).json({message: "Что-то пошло не так попробуйте ещё раз"})
    }
})
module.exports = router