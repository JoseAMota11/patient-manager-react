import '../css/Dates.css'

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
          <h3>Pet's Name: {petName}</h3>
          <h3>Owner's Name: {ownerName}</h3>
          <h3>Date: {dateTime}</h3>
          <h3>Time: {time}</h3>
          <h3>Description: {description}</h3>
          <button className='btn-delete'onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </div>
    </>
  )
}

export default Dates