
    const Pet = require('../models/pet.model')

    module.exports.findAllPets = (req, res) => {
            Pet.find() 
            .then(pets => {
                res.json(pets)
            })
            .catch(err => res.json(err))
            console.log(res)
        }
        module.exports.findOnePet = (req, res) => {
            Pet.findById({
                _id: req.params.id
            })
            .then(pet => {
                res.json(pet)
            })
            .catch(err => res.json(err))     
        }
        module.exports.updateOnePet = (req, res) => {
            Pet.findByIdAndUpdate(
                { _id: req.params.id }, req.body, { new:true })
            .then(pet => {
                pet.save()
                res.json(pet)
            })
            .catch(err => res.json(err))     
        }
        module.exports.removeOnePet = (req, res) => {
            Pet.findByIdAndDelete({ _id: req.params.id })
            .then(() => {
                res.json("pet with id " +req.params.id + " was removed")
            })
            .catch(err => res.json(err)) 
        }
        module.exports.createPet = (req, res) => {
            Pet.create(req.body)
            .then(newPet => {
                res.json("pet was created: "+newPet.name)
            })
            .catch(err => res.json(err)) 
        }
    
