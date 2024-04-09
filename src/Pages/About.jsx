import { useLocation } from 'react-router-dom';
const About = () => {
    let location = useLocation();
    document.title =  `Dream House | ${location.pathname.slice(1)}`
    return (
        <div className="md:pt-20 pt-10 container mx-auto">
            <h1>This is about section</h1>
        </div>
    );
};

export default About;