import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../css/Form.css'

function Form({ createDate }) {

  const [ date, setDate ] = useState({
    petName: "",
    ownerName: "",
    dateTime: "",
    time: "",
    description: ""
  })

  const [ error, setError ] = useState(false)

  const { petName, ownerName, dateTime, time, description } = date

  const handleChange = e => {
    let value = e.target.value, name = e.target.name
    setDate({
      ...date,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (petName.trim() === "" 
    || ownerName.trim() === "" 
    || dateTime.trim() === "" 
    || time.trim() === "" 
    || description.trim() === "") {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
      return
    }

    date.id = uuidv4()

    createDate(date)

    setDate({
      petName: "",
      ownerName: "",
      dateTime: "",
      time: "",
      description: ""
    })
  }

  return (
    <>
      <div>
        <h2 className='title'>From the form</h2>
        <form onSubmit={handleSubmit} className='form__container'>
          <label htmlFor='petName'>Pet's name:</label>
          <input 
            type='text' 
            name='petName'
            id='petName'
            className='input'
            placeholder="Pet's name"
            onChange={handleChange}
            value={petName}
          />
          <label htmlFor=''>Owner's name:</label>
          <input 
            type='text' 
            name='ownerName'
            className='input'
            placeholder="Owner's name"
            onChange={handleChange}
            value={ownerName}
          />
          <label htmlFor=''>Date:</label>
          <input 
            type='date' 
            name='dateTime'
            className='input'
            onChange={handleChange}
            value={dateTime}
          />
          <label htmlFor=''>Time:</label>
          <input 
            type='time' 
            name='time'
            className='input'
            onChange={handleChange}
            value={time}
          />
          <label htmlFor=''>Description:</label>
          <textarea 
            name="description"
            placeholder='Description...'
            onChange={handleChange}
            value={description}
          ></textarea>
          <button 
            className='btn'
            type='submit'
          >Add</button>
        </form>
      </div>

      {error ? <div className='error'>You must fill all the fields!</div> : null}

    </>
  )
}

export default Form