import React from 'react'

function Stampa() {
  const stampa = () => {
    console.log('stampa');
  }
  return (
    <button onClick={stampa}>cliccami</button>
  )
}

export default Stampa;