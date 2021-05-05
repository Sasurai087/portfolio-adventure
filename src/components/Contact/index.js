import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import './Contact.css'
import{ init, sendForm } from 'emailjs-com';
init("user_khkh6atX33wmlzdHmgS28");

const Contact = (props) => {
  const [statusMessage, setStatusMessage] = useState("Message")
  const [contactNumber, setContactNumber] = useState("000000")

  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 100000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6))
  }


  const onSubmit = data => {
    const statusMessage = document.querySelector('.status-message')
    const form = document.querySelector('#contact-form')
    generateContactNumber()
    sendForm("contact_form", "template_vbq12z6", "#contact-form")
      .then(function(response){
        console.log('Success!', response.status, response.text);
        form.reset();
        setStatusMessage("Message sent!");
        statusMessage.className = 'status-message success';
        setTimeout(() => {
          statusMessage.className = 'status-message'
        }, 2000)
      }, function(error){
        console.log('Failed...', error);
        setStatusMessage("Failed to send message! Please try again later.");
        statusMessage.className = "status-message failure";
        setTimeout(()=> {
         statusMessage.className = 'status-message'
        }, 2000)

      })
  }

  const { register, handleSubmit, watch, errors } = useForm();
  const message = watch('message') || "";
  const messageCharsLeft = 1500 - message.length;

  return (
    <section id='section4' className='contact'>
      <h1>CONTACT</h1>
      <p className='form-p'>Feel free to say Hi</p>
      <div className="form-container">
        <p className='status-message'>{statusMessage}</p>
        <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
          {errors.user_name && errors.user_name.type === "required" && (
            <div role='alert'>Name is required<br/></div>
          )}
          <input
              type='text'
              name='user_name'
              placeholder='Name'
              maxLength='60'
              ref={register({ required: true })}
              aria-invalid={errors.user_name ? "true" : "false"}
            />
          <br/>
          <input
            type='email'
            name='user_email'
            placeholder='Email'
            ref={register} />
          <br/>
        
          <textarea
            name='message'
            placeholder='Message'
            maxLength='3000'
            ref={register}
          />
          <p className='message-chars-left'>{messageCharsLeft}</p>
          <input type='hidden' name='contact_number' value={contactNumber} />
          <br/>
          <input className='form-submit' type='submit' value='Submit' />
        </form>
        
        <p className='form-p'>Thank you for stopping by!</p>
      </div>
    </section>
    

  )
}

export default Contact