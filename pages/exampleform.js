import React, { useState } from 'react'

export default function Form() {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [salary, setSalary] = useState('')

    function makeJsonMember(){
        let json = {
            name,
            fields: {
                phone,
                location,
                email,
                salary,
            }
        }
        console.log(json)
    }

  return (
    <>
    <div>
        <input type='text' value={name} placeholder='ingresa tu nombre' onChange={e => setName(e.target.value)} />
        <input type='number' value={phone} placeholder='ingresa tu telefono' onChange={e => setPhone(e.target.value)} />
        <input type='text' value={location} placeholder='ingresa tu Location' onChange={e => setLocation(e.target.value)} />
        <input type='email' value={email} placeholder='ingresa tu Email' onChange={e => setEmail(e.target.value)} />
        <input type='number' value={salary} placeholder='ingresa tu salario' onChange={e => setSalary(e.target.value)} />

    </div>

    <button onClick={makeJsonMember} className='bg-slate-500 p-4 m-3' >Guardar</button>

    {/* <p>El valor del nombre es: {name}</p>
    <p>El valor del numero es: {phone}</p>
    <p>El valor del Location es: {location}</p>
    <p>El valor del Email es: {email}</p>
    <p>El valor del Salario es: {salary}</p> */}

    
    
    </>
  )
}
