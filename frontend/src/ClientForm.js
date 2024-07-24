import { useState } from 'react';


function ClientForm(){

  const [client, setClient] = useState({name: null});


  function handleSubmit(){

    
    console.log('DATA SUBMITTED>>>>');



  }

  return (

    <label>
      <form>
        <input type="text" placeholder="Client Name"/>
      </form>
      <form>
        <input type="text" placeholder="Client Age"/>
      </form>
      <button onSubmit={handleSubmit}>Submit</button>
    </label>
  )
  
}// ClientForm()


export default ClientForm;