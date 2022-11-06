import React, {useState} from 'react'
import Button from './Button'

const Eleventh = ()=>{
const [greetings, setGreetings] =useState('Welcome')
const [message, setMessage] = useState('Enjoy yourself')



    return <div>

        <h1>{greetings} user. {message}</h1>
        <Button btnName = 'Log Out' onClick ={()=>{
            setGreetings('Goodbye')
            setMessage('See you next time')
            
            }} ></Button>

        <Button btnName ='Login' onClick= {()=>{
             setGreetings('Welcome')
             setMessage('Good to have you here')
        }} ></Button>
    </div>
}

export default Eleventh