const { Router } = require('express')
const swapi = require('swapi-node')
const User = require('../models/User')
const router = Router()

// /api/person/swperson
router.post('/swperson', async (req, res) => {
    try {
        const {name} = req.body
        console.log('name', name)
        swapi.getPerson({name}).then((response) => {
            res.status(200).json({
                message: 'Да прибудет с тобой сила',
                person: response.results.filter(item => item.name === name)
            })
        })





        // const {name, sex, birthDay} = req.body
        //
        // const candidate = await User.find({name} || {sex} || {birthDay})
        //
        // if (candidate) {
        //     // Если candidate данные берём из базы
        //    return  res.status(200).json({
        //            message: 'Персонаж взят из базы',
        //            data: candidate
        //        })
        // } else {
        //     // Если !candidate данные записываем в базу
        //     const user = new User({name})
        //     await user.save()
        //     return res.status(201).json({
        //         message: 'Персонаж добавлен в базу',
        //         data: candidate
        //     })
        // }
    } catch (e) {
        res.status(500).json({message: "Что-то пошло не так попробуйте ещё раз"})
    }
})
module.exports = router