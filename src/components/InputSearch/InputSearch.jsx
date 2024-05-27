import React, { useContext } from 'react'
import { InputContext } from '../../context/userContext'

function InputSearch() {
  const { handleInput, input } = useContext(InputContext)

  return (
    <div>
        <input onChange={handleInput} type='text' value={input}/>
    </div>
  )
}

export default InputSearch