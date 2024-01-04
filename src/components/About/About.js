import './About.scss'
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faGitAlt, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animated')
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}   
                        idx={15}
                    />
                </h1>
                <p>I am very ambitious front-end developer looking for a role in 
                    established IT company with the opportunity to work with the 
                    latest technologies on challenging and devers projects.
                </p>
                <p>I am quietly confident, naturally curious and perpetual working 
                    on improving my chops on design problem at a time.
                </p>
                <p>If i need to define myself in one sentence I'd describe myself 
                    as a nature lover, a culinary explorer, a sports fanatic, photography enthusiast
                    and tech-obsessed!</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faCode} color='#1E350' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faBootstrap} color='#7805F6' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default About