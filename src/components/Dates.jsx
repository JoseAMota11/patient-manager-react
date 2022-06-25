import '../css/Dates.css'
import PropTypes from 'prop-types'

function Dates({ date, setAllDates, arr }) {
  const { id, petName, ownerName, dateTime, time, description } = date

  const handleDelete = id => {
    const newDate = arr.filter(item => item.id !== id)
    setAllDates(newDate)
    localStorage.setItem("dates", JSON.stringify(newDate))
  }

  return (
    <>
      <div className='date__container'>
        <div className='card__container'>
          <h3>Pet's Name: <span className='info'>{petName}.</span></h3>
          <h3>Owner's Name: <span className='info'>{ownerName}.</span></h3>
          <h3>Date: <span className='info'>{dateTime}.</span></h3>
          <h3>Time: <span className='info'>{time}.</span></h3>
          <h3>Description: <span className='info'>{description}.</span></h3>
          <button className='btn-delete'onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </div>
    </>
  )
}

Dates.propTypes = {
  date: PropTypes.object.isRequired,
  arr: PropTypes.array.isRequired,
  setAllDates: PropTypes.func.isRequired
}

export default Dates