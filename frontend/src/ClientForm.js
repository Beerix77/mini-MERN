import { useState } from 'react';



function ClientForm(){

  const [nameInputText, setNameInputText] = useState("");
  const [ageInputText, setAgeInputText] = useState(0);



  function handleSubmit(ev){
    const name = nameInputText;
    const age = ageInputText;


    ev.preventDefault(); //*for now
    
    console.log('DATA SUBMITTED>>>>');
    console.log(`Submitted. Name: ${name}, Age: ${age}`);

  }

  return (
    <>
      
      <form onSubmit={handleSubmit} action={`localhost:3334/clients/add/`} method="POST">
        <input type="text" placeholder="Client Name" onChange={ev => setNameInputText(ev.target.value)} name="clientName" />
        <br/>
        <input type="text" placeholder="Client Age" onChange={ev => setAgeInputText(ev.target.value)} name="clientAge" />
        <br/>
        <button>Submit</button>
      </form>

      <hr/>
      
      {nameInputText}
      <br/>
      {ageInputText}
  
    </>
  )
  
}// ClientForm()


export default ClientForm;