import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { BiSolidDashboard } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { BsFileEarmarkCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import LogoApjii from '../assets/img/logo.png';
import Table from './table';
import Hero from './hero';



const Dashboard = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [open, setOpen] = useState(true);
    const [showTable, setShowTable] = useState(false);
    const [activeMenu, setActiveMenu] = useState('Dashboard');

    const menus = [
        { name: 'Dashboard', icon: BiSolidDashboard },
        { name: 'Kegiatan', icon: BsFileEarmarkCheckFill },
    ];

    const handleMenuClick = (menuName) => {
        setActiveMenu(menuName);
        if (menuName === 'Dashboard') {
            setShowTable(false);
        } else if (menuName === 'Kegiatan') {
            setShowTable(true);
        }
    };

    return (
        <section className='flex flex-row min-h-screen drop-shadow-md'>
            <div className={`bg-[#fff] ${open ? 'w-70' : 'w-24'} text-gray-100 border-r-[1px] border-slate-700`}>
                <div className='flex flex-col gap-4 text-[#696969]'>
                    <img className='m-2' src={LogoApjii} alt="Logo Apjii" />
                    {open ? (
                        <>
                            <h1 className='font-bold ms-8 pt-3'>Menu Utama</h1>
                        </>
                    ) : null}
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu.link} // Use the link property to set the URL
                            key={i}
                            className={`flex justify-start text-sm font-bold p-2 gap-4 ms-5 ${activeMenu === menu.name ? 'text-blue-500' : ''}`}
                            onClick={() => handleMenuClick(menu.name)}
                        >
                            <div className=''>{React.createElement(menu.icon, { size: 30 })}</div>
                            <h2
                                className={`whitespace-pre ${!open ? 'opacity-0 translate-x-0 overflow-hidden' : ''}`}
                            >
                                {menu.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex-col w-full ">
                <div className='flex flex-row bg-[#fff] justify-between  relative w-full max-h-20 z-[100] shadow-md '>
                    <div className='flex flex-row justify-between relative bg-[white] w-full'>
                        <div className='ms-4 w-full'>
                            <HiMenu
                                size={30}
                                className='cursor-pointer mt-3'
                                onClick={() => setOpen(!open)}
                            />
                        </div>
                        <div
                            onClick={() => setIsPopupOpen(!isPopupOpen)}
                            className='cursor-pointer  m-2 me-5 text-xl text-black bg-[#D9D9D9] font-semibold flex flex-row h-11 p-2 bg-slate-[#D9D9D9] rounded-3xl'
                        >
                            <CgProfile size={30} className='me-3' />
                            <HiMenu size={30} />
                            {isPopupOpen && (
                                <div className="z-50 absolute right-0 mt-9 me-5 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Akun</a>
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Keluar</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='MainKonten flex justify-center'>
                    {showTable ? <Table /> : <Hero />}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
