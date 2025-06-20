import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import Thirdcomponent from './Thirdcomponent'
import FourthComponent from './FourthComponent'

function App() {
const vegetable= ["tomato","potato"]
  return (
    <>
<FourthComponent/>
    <Thirdcomponent/>
      {/* <div>
        HI HEllo
       </div>

       <div>
        Welcome!!
       </div> */}
    <FirstComponent/>
    <SecondComponent vegetable={vegetable}/>
    </>
  )
}

export default App
