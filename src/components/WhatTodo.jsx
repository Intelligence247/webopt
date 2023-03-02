import React from 'react'
import Ceo from './Ceo'
import "./WhatTodo.css"

const WhatTodo = () => {
  return (
    <div className='whatWrapper'>
        <h1>Don't just take our words</h1>
<div className="bothceo">
        <Ceo
        name={"Jenny"}
        qual={"CEO Mimi"}
        name2={"Wilson"}
        qual2={"Hairs"}
        />
        <Ceo
         name={"Devon"}
         qual={"Ceo"}
         name2={"Lane"}
         qual2={"Glasshub"}
        />
        </div>

        
    </div>
  )
}

export default WhatTodo