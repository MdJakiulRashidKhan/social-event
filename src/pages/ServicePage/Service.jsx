import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id,name,image,price,description,button_text} = service;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className=' w-full h-[200px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex items-center'>
                    <h2 className="card-title">{name}</h2>
                    <p className='text-bold font-2xl'>{price}</p>
                    </div>
                    <p>{description}</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary text-white"><Link to={`/service/${id}`} className='text-bold'>{button_text}</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;