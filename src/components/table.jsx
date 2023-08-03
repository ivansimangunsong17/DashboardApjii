import React, { useState } from 'react';
import { BsTrash, BsPlusSquare } from 'react-icons/bs';
import { AiTwotoneEdit } from 'react-icons/ai';
import { FaFileDownload } from 'react-icons/fa';
import FormInput from './form';

const Table = () => {
    const [showForm, setShowForm] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [entryToDelete, setEntryToDelete] = useState(null);

    const handleTambahClick = () => {
        setShowForm(true);
    };

    const handleFormSubmit = (formData) => {
        if (formData) {
            setTableData([...tableData, formData]);
        }
        setShowForm(false);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const handleDeleteEntry = () => {
        // Remove the entry from tableData based on its index
        if (entryToDelete !== null) {
            const updatedTableData = tableData.filter((entry, index) => index !== entryToDelete);
            setTableData(updatedTableData);
        }
        // Close the confirmation pop-up
        setShowConfirmation(false);
        setEntryToDelete(null);
    };

    const handleTrashClick = (index) => {
        // Show the confirmation pop-up when the "Delete" button is clicked
        setEntryToDelete(index);
        setShowConfirmation(true);
    };

    return (
        <div className='bg-white min-h-screen min-w-full p-3'>
            {showForm && (
                <div className='fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='ClasForm rounded-lg shadow-2xl w-5/12 bg-white p-5'>
                        <FormInput onSubmit={handleFormSubmit} onClose={handleCloseForm} />
                    </div>
                </div>
            )}
            <div className='m-1 bg-[#EFEFEF] rounded-md min-h-full'>
                <div className='bg-[#EFEFEF] flex flex-row items-center justify-between p-3 rounded-xl'>
                    <h1 className='font-bold text-2xl'>List Artikel APJII Directory</h1>
                    <div>
                        <button
                            type='button'
                            onClick={handleTambahClick}
                            className='flex flex-row text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-1 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                        >
                            <BsPlusSquare size={20} className='me-2' />
                            Tambah
                        </button>
                    </div>
                </div>
                <div className='m-3'>
                    <table className='table-fixed w-full border border-x-black bg-white'>
                        <thead>
                            <tr className='border border-x-black'>
                                <th className='w-2/12 border border-black px-2 py-2'>Tanggal</th>
                                <th className='w-1/6 border border-black px-2 py-2'>Judul</th>
                                <th className='w-2/6 border border-black px-2 py-2'>Deskripsi</th>
                                <th className='w-1/6 border border-black px-2 py-2 text-center'>Tipe</th>
                                <th className='w-1/6 border border-black px-2 py-2 text-center'>Format</th>
                                <th className='w-1/6 border border-black px-2 py-2'>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((rowData, index) => (
                                <tr key={index} className='border border-x-black'>
                                    <td className='w-1/6 border border-black px-2 py-2 text-center'>{rowData.date}</td>
                                    <td className='w-1/6 border border-black px-2 py-2'>{rowData.documentType}</td>
                                    <td className='w-2/6 border border-black px-2 py-2 text-justify'>{rowData.description}</td>
                                    <td className='w-1/6 border border-black px-2 py-2 text-center'>Dokumen</td>
                                    <td className='w-1/6 border border-black px-2 py-2 text-center'>PDF</td>
                                    <td className='w-1/6 border border-black px-2 py-2'>
                                        <div className='flex justify-center items-center gap-2'>
                                            <button
                                                type='button'
                                                className='text-green-600 hover:text-green-800 focus:ring-2 focus:ring-green-300'
                                            >
                                                <AiTwotoneEdit size={25} />
                                            </button>
                                            <button
                                                type='button'
                                                onClick={() => handleTrashClick(index)}
                                                className='text-red-600 hover:text-red-800 focus:ring-2 focus:ring-red-300'
                                            >
                                                <BsTrash size={25} />
                                            </button>
                                            <button
                                                type='button'
                                                className='text-red-600 hover:text-red-800 focus:ring-2 focus:ring-red-300'
                                            >
                                                <FaFileDownload size={25} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Confirmation pop-up */}
            {showConfirmation && (
                <div className='fixed inset-0 z-[300] flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-5 rounded-lg shadow-md'>
                        <p className='text-lg font-semibold'>Apakah anda yakin akan menghapus artikel ini?</p>
                        <div className='flex justify-end gap-3 mt-5'>
                            <button
                                className='bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded'
                                onClick={() => setShowConfirmation(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className='bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded'
                                onClick={handleDeleteEntry}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Table;
