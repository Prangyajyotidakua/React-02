import React ,{useEffect} from 'react'

function UseEffect() {
    //this function run every render
    useEffect(() => {
        console.log('use effect run')
    })
  return (
   
    <div>useEffect</div>
  )
}

export default UseEffect