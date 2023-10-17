import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services,setServices]=useState([]);

    useEffect(()=>{
        fetch('service.json')
        .then(res =>res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div className='grid grid-cols-3 gap-6'>
          {
            services.map(service => <Service  key={service.id} service={service}></Service>)
          }
        </div>
    );
};

export default Services;