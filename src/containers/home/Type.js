import { Typewriter } from 'react-simple-typewriter';

export default function Type() {
    return (
        <Typewriter
            words={['MERN Stack Developer', 'React Developer', 'Front-end Developer', 'Web Developer']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}               
        />
    );
}
