import React, { useState } from 'react'

function UseEffectDependencies() {
    const[name , setName] = useState("prangya")
    //only run after 1st initial render and if state changes it will not run then after
    // useEffect(() =       > {
    //     console.log('use effect run')
    // },[])

    useEffect(() => {
        console.log('use effect run')
    },[name])


  return (
    <div>UseEffectDependencies
    <button onClick={()=> setName("jyoti") }>save</button>
    <p>{name} </p>
     </div>

  )
}

export default UseEffectDependencies