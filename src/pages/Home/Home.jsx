import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Services from '../ServicePage/Services';
import TaskDone from '../TaskDone/TaskDone';
import Steps from '../Steps/Steps';



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <Steps></Steps>
            <TaskDone></TaskDone>
            <Footer></Footer>
        </div>
    );
};

export default Home;