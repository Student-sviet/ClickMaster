import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function When() {
  const [selectedDate, setSelectedDate] = useState(null)

  const handleDateClick = (date) => {
    setSelectedDate(date)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Send the selected date to the server and store it in a database
    fetch('/api/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ date: selectedDate }),
    })
      .then((response) => {
        if (response.ok) {
          // Show a success message to the user
          alert('Your booking has been confirmed')
        } else {
          // Show an error message to the user
          alert('Failed to book the selected date. Please try again later.')
        }
      })
      .catch((error) => {
        console.error('Failed to book the selected date', error)
      })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="booking-date" className="block font-bold mb-2">Select a date:</label>
          <Calendar
            className="border rounded p-2"
            onChange={handleDateClick}
            value={selectedDate}
          />
        </div>
        <button
          type="submit"
          disabled={!selectedDate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Book this date
        </button>
      </form>
    </div>
  )
}

export default When
