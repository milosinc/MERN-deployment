const PetCtrl = require('../controllers/pet.controller');

module.exports = (app) => {
    app.get('/api/pets/all', PetCtrl.findAllPets)
    app.get('/api/pets/:id', PetCtrl.findOnePet)
    app.post('/api/pets/create', PetCtrl.createPet)
    app.put('/api/pets/update/:id', PetCtrl.updateOnePet)
    app.delete('/api/pets/delete/:id', PetCtrl.removeOnePet)
}