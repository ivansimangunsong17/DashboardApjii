import ApjPic from '../assets/img/apjiibg.png';
import Globe from '../assets/img/globe.png';
import Waves from '../assets/img/wave.svg'
import React from 'react';

const Dashboard = () => {
    return (<div className='w-full min-h-screen bg-gradient-to-b from-[#215385] to-[#000] relative '>
        <div className='text-white w-fit  mt-44 ms-10 absolute z-50'>
            <h1 className='font-bold text-6xl'>Hello Admin</h1>
            <h1 className='text-4xl mt-3'>Wellcome to <b>APJII Directory</b> </h1>
        </div>
        <div className='z-[-1]'>
            <img src={Globe} alt='GlobeImg' className='h-[600px] w-[670px] absolute right-0 bottom-0 x ' />
            <img src={ApjPic} alt='ApjPic' className='h-[500px] w-[630px] absolute right-0 bottom-0 ' />
            <img src={Waves} alt='WavesPic' className='absolute right-0 bottom-0 s' />
        </div>
    </div>);
}

export default Dashboard;