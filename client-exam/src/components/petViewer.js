import { useParams } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const PetViewer = () => {
       const {id} = useParams()
       const [pet, setPet] = useState(null)
       const [liked, setLiked] = useState(false)
       const navigate = useNavigate()

       useEffect(()=> {
        axios.get('http://localhost:8000/api/pets/'+id)
        .then((res) =>{
            setPet(res.data)
        }).catch((err) =>console.log(err))},[id,pet])

        const likePet=()=>{

            if(liked !== true){
                let newState = {...pet, likes: pet.likes+1}
            axios.put('http://localhost:8000/api/pets/update/'+id,
           newState )
            setLiked(true)
        }
        }

        const editPet = (e) =>{
            navigate('/edit/'+id)
            setPet(null)
        }
        const deletePet = (e) =>{
            axios.delete('http://localhost:8000/api/pets/delete/'+id)
                .then(() =>{
                    console.log("deleted")
                }).catch((err) =>console.log(err),[id])
            navigate('/')
            setPet(null)
        }

        return (
        <div className='petViewer'>
            { pet !== null && <>
                <span className='item'>
            <div className='label'>Name:</div>
                <div className='info'>{pet.name}</div>
                </span>
                <span className='item'>
            <div className='label'>Type:</div>
                <div className='info'>{pet.type}</div>
                </span>
                <span className='item'>
            <div className='label'>Description:</div>
                <div className='info'>{pet.description}</div>
                </span>
            { pet.skill1 !== 'none' ? <span className='item'>
            <div className='label'>Skill One:</div>
                <div className='info'>{pet.skill1}</div>
               </span> : '' }
            { pet.skill2 !== 'none' ?  <span className='item'>
            <div className='label'>Skill Two:</div>
                <div className='info'>{pet.skill2}</div>
              </span>  : '' }
            { pet.skill3 !== 'none' ? <span className='item'>
            <div className='label'>Skill Three:</div>
                <div className='info'>{pet.skill3}</div>
              </span>  : '' }
                <div className='likes'>Likes: {pet.likes}
                <button onClick={likePet} >Like Pet</button></div>
              </>}
              <div className='smallNav'>
            <button onClick={deletePet}>Adopt Pet</button>
            <button onClick={editPet}>edit</button>
            </div>
            </div>)
}

export default PetViewer