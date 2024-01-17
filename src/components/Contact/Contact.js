import Loader from 'react-loaders';
import './Contact.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from "@emailjs/browser"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animated')
    const refForm = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_tdsx9p7', 'template_opx2hzi', refForm.current, 'wosOuSEMchBnjefU3')
        .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          );
      };



    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}   
                        idx={15}
                    />
                </h1>
                <p>
                I am eager to explore opportunities within a dynamic and collaborative firm, 
                particularly those involving ambitious or sizable projects. 
                If you have any other inquiries or requests, please feel free to reach out to me using the form below.
                I look forward to the opportunity to contribute and expand my knowledge in a thriving environment.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required></input>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required></input>
                            </li> 
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

 export default Contact;