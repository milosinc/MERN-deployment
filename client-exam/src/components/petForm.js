import  { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const PetForm = () => {
    const { action, id } = useParams()
    const [errors, setErrors] = useState({
        name: '', type:'',description: '', required: '', submit: ''
    })
    const [ Id, setId ] = useState(null)
    const httpType = action === 'new' ? 'post' : 'put'
    const url = action === 'new' ? 'create' : 'update' 
    const [state, setState] = useState(null); 
    const navigate = useNavigate()

    useEffect(() => {
        if(action === 'edit'){
        axios.get('http://localhost:8000/api/pets/'+id)
        .then((res) =>{
            console.log(res.data)
            setId(res.data._id)
            setState({
                name:res.data.name, 
                type:res.data.type, 
                description:res.data.description,
                skill1: res.data.skill1??'',
                skill2: res.data.skill2??'',
                skill3: res.data.skill3??'',
                likes: res.data.likes ?? 0
                
            })
        })} else {
            setId('')
            setState({
                name: '',
                type: '',
                description: '',
                skill1: 'none',
                skill2: 'none',
                skill3: 'none',
                likes: 0
                
            })
        }

    }, [action, id])

    const handleChange = (e) => {
        let [target,value] = [e.target.name,e.target.value]
        setState({
            ...state,
            [target]: value
        })
        if(target !== 'skill1' && target !== 'skill2' && target !== 'skill3' 
         && value.length < 3){
            setErrors({...errors,
            [target]: `${target} must be at least 3 characters`})
        } else setErrors({...errors,
        [target]:''})

    }
    
    const onSubmitHandler = e => {
        e.preventDefault();
        if(state.name.length < 3 || state.type.length < 3 || state.description.length < 3){
                return setErrors({...errors,
                submit: 'Please fix all errors before submitting'
            })
        }
        axios[httpType]('http://localhost:8000/api/pets/'+url+'/'+Id, state)
            .then(res=>
                navigate('/')
                )
            .catch(err=>{
                console.log(err.data)
            })       
    }

    return (<>
        { state === null ? 'loading...' :
        <form onSubmit={onSubmitHandler}>
            { errors.name === '' ? '' : <p>{errors.name}</p>}
            <p>
                <label>Name:</label><br/>
                <input type="text" name='name' onChange={handleChange} value={state.name}/>
            </p>
            { errors.type === '' ? '' : <p>{errors.type}</p>}
            <p>
                <label>Type:</label><br/>
                <input type="text" name='type' onChange={handleChange} value={state.type}/>
            </p>
            { errors.description === '' ? '' : <p>{errors.description}</p>}
            <p>
                <label>Description:</label><br/>
                <input type="text" name='description' onChange={handleChange} value={state.description}/>
            </p>
            <p>
                <label>Skill One: <span className='typeLabel'>(optional)</span> </label><br/>
                <input type="text" name='skill1' onChange={handleChange} value={state.skill1}/>
            </p>
            <p>
                <label>Skill Two: <span className='typeLabel'>(optional)</span></label><br/>
                <input type="text" name='skill2' onChange={handleChange} value={state.skill2}/>
            </p>
            <p>
                <label>Skill Three: <span className='typeLabel'>(optional)</span> </label><br/>
                <input type="text" name='skill3' onChange={handleChange} value={state.skill3}/>
            </p>
            { errors.required }
            { errors.submit }
            <button type="submit">
                { action === 'edit' ? 
                'Save pet'
                : 'Add new pet' }
            </button>
        </form>}
        </> )
}

export default PetForm