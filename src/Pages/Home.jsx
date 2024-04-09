import { useLocation } from 'react-router-dom';
const Home = () => {
    let location = useLocation();
    if(location.pathname === '/'){
        document.title = `Dream House | home`;
    }
    return (
        <div className="py-20 container mx-auto">
            <h1>this is home</h1>
        </div>
    );
};

export default Home;