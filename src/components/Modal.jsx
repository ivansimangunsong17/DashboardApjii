import React from 'react'

const Modal = ({ children, showModal }) => {
    return (
        <div className={`fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-50 ${showModal ? "block" : "hidden"}`}>
            <div className=' rounded-lg shadow-2xl  bg-white p-5'>
                {children}
            </div>
        </div>
    )
}

export default Modal