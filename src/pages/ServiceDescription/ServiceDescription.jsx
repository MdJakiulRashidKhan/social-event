import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDescription = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => {
                const selectedService = data.find(item => item.id === parseInt(id, 10));
                setService(selectedService);
            })
            .catch(error => {
                console.error('Error fetching service data:', error);
            });
    }, [id]); 

    if (!service) {
        return <div>Loading...</div>;
    }
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='w-full h-[450px]' src={service.image} alt={service.name} /></figure>
            <div className="card-body">
                <h2 className='text-3xl'>{service.description}</h2>
                <h3 className='text-xl'>{service.short_details}</h3>
                <p className='text-2xl text-blue-700 font-bold'>{service.price}</p>
                <Link className='text-white font-extrabold px-8 py-2 bg-green-700' to='/'>Home</Link>
            </div>
        </div>
    );
};

export default ServiceDescription;
