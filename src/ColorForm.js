import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import './ColorForm.css'



const ColorForm = ({addColor}) => {
    const INITIAL_STATE = {
        color: ''
    }

    const history = useHistory();

const [formData, setFormData] = useState(INITIAL_STATE)

const handleSubmit = (e) => {
    e.preventDefault();
    addColor(formData.color);
    setFormData(INITIAL_STATE);
    history.push('/colors');
}

const handleChange = e => {
    const {name, value} = e.target;
    setFormData(data => ({
        ...data,
        [name]: value
    }))
}


return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
        <div className="form_input">
        <label htmlFor='color'>New Color</label>
        <input
            id='color'
            type='text'
            name='color'
            placeholder='color'
            value={formData.color}
            onChange={handleChange}
        />
        </div>
        <button>Add this color</button>
    </form>
    </div>
)

}


export default ColorForm;