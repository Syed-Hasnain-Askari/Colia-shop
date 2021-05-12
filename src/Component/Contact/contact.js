import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
import './contact.css'

const Contact = () => {
  const [questions, setQuestions] = useState(data)

  return (
    <main>
      <div className='contact__container'>
        <h3>Nos horaires d'ouvertures</h3>
        <section className='info'>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default Contact