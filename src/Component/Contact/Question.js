import React, { useState } from 'react'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import './contact.css'
const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='question'>
      <header>
        <h4 onClick={() => setExpanded(!expanded)} className='question-title'>
          {title}
        </h4>
        <button className='collapse-btn' onClick={() => setExpanded(!expanded)}>
          {expanded ? <RemoveIcon /> : <AddIcon />}
        </button>
      </header>
      {expanded && <p>{info}</p>}
    </article>
  )
}

export default Question