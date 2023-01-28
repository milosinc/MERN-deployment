import { useNavigate } from 'react-router-dom'

const PetShelter = () => {

    const navigate = useNavigate()

    const handle = (e) => navigate(e.target.name)
    
    return (<div className='nav'>
    <div className='petShelter'>
        <h1>Welcome to the Pet Shelter!</h1>
        <h3>Please view our animals that need homes below.</h3>
    <div className='smallNav'>
        <button name='/' onClick={handle}>All Pets</button>
        <button name='/new/' onClick={handle}>Add Pet</button>
    </div>
    </div>
    </div>)
}

export default PetShelter