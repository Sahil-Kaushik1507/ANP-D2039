import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponet from './Components/Mycomponet'
import Mycomponent2 from './Components/Mycomponent2'

function App() {
  const [count, setCount] = useState(2)
  const [userName, setUserName] = useState('abc')


  // setCount(2)
  // setUserName("abc")

  return (

  //   <>
  //  <Mycomponet  user={userName} />  
  //  <Mycomponent2/> 
  //   </>
  <>
  {/* <Header/>
  <Sidebar/>
  <Main/>
  <Footer/>
   */}
  </> 


  )
}

export default App

// function add (a,b=10){
      // props.
//   return a+b
// }

// add(2,3)