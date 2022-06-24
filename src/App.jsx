import { useState, useEffect } from 'react'
import './css/App.css'
import Form from './components/Form'
import Dates from './components/Dates'

function App() {

  let initDate = JSON.parse(localStorage.getItem("dates"))
  if (!initDate) {
    initDate = []
  }

  const [allDates, setAllDates] = useState(initDate)

  useEffect(() => {
    if (initDate) {
      localStorage.setItem("dates", JSON.stringify(allDates))
    } else {
      localStorage.setItem("dates", JSON.stringify([]))
    }
  }, [allDates])

  const createDate = date => {
    setAllDates([...allDates, date])
  }

  return (
    <>
      <main className='container'>
        <h1 className='title'>Patient Manager</h1>
        <article className='main__content'>
          <section className='side-a'>
            <Form 
              createDate={createDate}
            />
          </section>
          <section className='side-b'>
            <h2 className='title'>Manage Appointments</h2>
            {allDates.length > 0 ? allDates.map((date, index, arr) => (
              <Dates
                key={date.id}
                date={date}
                arr={arr}
                setAllDates={setAllDates}
              />
            ))
            :
            <h3 className='message'>There's not any appointments so far</h3>
            }
          </section>
        </article>
      </main>
    </>
  )
}

export default App