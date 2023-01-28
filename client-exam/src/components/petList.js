import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const PetList = () => {
 
    const [pets, setPets] = useState(null)
        
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets/all')
            .then(res=>{
                setPets(res.data);
            })
            .catch(err => console.error(err));
    },[]);
    const navigate= useNavigate()
    return (
        <div className='petList'>
            {pets !== null && pets.map( (pet, i) =>
                <div className='pet' key={i}>{pet.name}
                <span className='typeLabel'> {pet.type} </span>
                <div className='btns'>
                <button onClick={()=> navigate('/view/'+pet._id)}>
                    view pet details
                </button>
                <button onClick={()=> navigate('/edit/'+pet._id)}>
                    edit pet
                </button>
                </div>
                </div>)}
        </div>
    )
}
    
export default PetList;