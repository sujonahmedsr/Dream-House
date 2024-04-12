import PropTypes from 'prop-types';
import {useLoaderData } from 'react-router-dom'
const HouseRes = () => { 
    const houses = useLoaderData();
    return (
        <>
            <div className='py-20'>
                <h1>Hello world : {houses.id}</h1>
            </div>
        </>
    );
};

HouseRes.propTypes = {
    residential: PropTypes.object.isRequired
}

export default HouseRes;