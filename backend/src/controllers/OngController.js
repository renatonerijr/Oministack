const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueid')

module.exports = {

    async create(req, res) {

        const {name, email, whatsapp, city, uf } = req.body

        const id = generateUniqueId()

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        res.status(200).json({id})
    },

    async index(req, res) {

        const ongs = await connection('ongs').select('*');
        return res.json(ongs)
    }
}
