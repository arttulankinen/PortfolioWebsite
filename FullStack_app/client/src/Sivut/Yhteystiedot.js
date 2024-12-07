import React, { useState } from 'react'

function Yhteystiedot() {
  const [dataEmail, setDataEmail] = useState('');
  const [dataOtsikko, setDataOtsikko] = useState('');
  const [dataViesti, setDataViesti] = useState('');
  const BaseURL = 'https://artunportfolio.onrender.com/'
  const handleEmail = (e) =>{
    setDataEmail(e.target.value);
    console.log(e.target.value);
  } 
  
  const handleOtsikko = (e) => setDataOtsikko(e.target.value);
  const handleViesti = (e) => setDataViesti(e.target.value);

  const handleSendEmail = async (e) => {
    e.preventDefault();
    try{
    const response = await fetch(`${BaseURL}/api/email/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
      
        email: dataEmail,
        otsikko: dataOtsikko,
        viesti: dataViesti
      })
    });

    const data = await response.json();
    if (response.ok) {
      alert('Email sent successfully');
      setDataEmail('');
      setDataOtsikko('');
      setDataViesti('');
    } else {
      alert(data.msg);
    } 
  } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };

  return (
    <div id='contactpage'>
      <p id='ohje'>Ota minuun yhteyttä sähköpostitse!</p>
      <form onSubmit={handleSendEmail}>
        <div>
          <input 
            type='text' 
            value={dataEmail} 
            onChange={handleEmail} 
            id="email" 
            className="Tekstiosa" 
            placeholder='Email'
          />
        </div>
        <div>
          <input 
            type='text' 
            value={dataOtsikko} 
            onChange={handleOtsikko} 
            id="MSGotsikko" 
            className="Tekstiosa" 
            placeholder='Otsikko' 
            maxLength={30}
          />
        </div>
        <div>
          <textarea 
            value={dataViesti} 
            onChange={handleViesti} 
            id='viesti' 
            className="Tekstiosa" 
            placeholder='Viesti' 
            maxLength={1000} 
            rows={4}
          />
        </div>
        <div>
          <button id='send' type='submit'>Lähetä</button>
        </div>
      </form>
    </div>
  );
}


export {Yhteystiedot}
