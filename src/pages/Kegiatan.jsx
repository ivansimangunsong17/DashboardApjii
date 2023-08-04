import React, { useState } from 'react';
import { BsTrash, BsPlusSquare } from 'react-icons/bs';
import { AiTwotoneEdit } from 'react-icons/ai';
import { FaFileDownload } from 'react-icons/fa';
import Modal from '../components/Modal';

const Kegiatan = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState([]);
    const [judul, setJudul] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [file, setFile] = useState(null);
    const [modalDelete, setModalDelete] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEntry = {
            judul: judul,
            deskripsi: deskripsi,
            tanggal: tanggal,
            file: file,
        };


        setFormData([...formData, newEntry]);

        setJudul("");
        setDeskripsi("");
        setTanggal("");
        setFile(null);


        setShowModal(false);
    };

    const handleDeleteEntry = (index) => {
        const updatedFormData = formData.filter((_, i) => i !== index);
        setFormData(updatedFormData);
    };
    return (
        <div className='bg-white min-h-screen min-w-full p-3 '>
            <div className='m-1 bg-[#EFEFEF] rounded-md min-h-full pb-4'>
                <div className='bg-[#EFEFEF] flex flex-row items-center justify-between p-3 rounded-xl'>
                    <h1 className='font-bold text-2xl'>List Artikel APJII Directory</h1>
                    <div>
                        <button
                            type='button'
                            onClick={() => setShowModal(true)}
                            className='flex flex-row text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-1 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4'
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
                            {formData.length === 0 ? (
                                <tr>
                                    <td className='border border-black px-3 py-10 text-center text-xl' colSpan={6}>
                                        Data Kosong
                                    </td>
                                </tr>
                            ) : (
                                formData.map((entry, index) => (
                                    <tr key={index} className='border border-x-black'>
                                        <td className='w-1/6 border border-black px-2 py-2 text-center'>{entry.tanggal}</td>
                                        <td className='w-1/6 border border-black px-2 py-2'>{entry.judul}</td>
                                        <td className='w-2/6 border border-black px-2 py-2 text-justify'>{entry.deskripsi}</td>
                                        <td className='w-1/6 border border-black px-2 py-2 text-center'>{entry.tipe || 'PDF'}</td>
                                        <td className='w-1/6 border border-black px-2 py-2 text-center'>{entry.format || 'Dokumen'}</td>
                                        <td className='w-1/6 border border-black px-2 py-2'>
                                            <div className='flex justify-center items-center gap-2'>
                                                <button type='button' className='text-green-600 hover:text-green-800 focus:ring-2 focus:ring-green-300'>
                                                    <AiTwotoneEdit size={25} />
                                                </button>
                                                <button
                                                    onClick={() => setModalDelete(true)}
                                                    type='button'
                                                    className='text-red-600 hover:text-red-800 focus:ring-2 focus:ring-red-300'
                                                >
                                                    <BsTrash size={25} />
                                                </button>
                                                <button type='button' className='text-red-600 hover:text-red-800 focus:ring-2 focus:ring-red-300'>
                                                    <FaFileDownload size={25} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>


                <div>
                    <Modal showModal={showModal}>
                        <form onSubmit={handleSubmit} className='w-[400px]'>

                            <div className='mb-4'>
                                <label htmlFor="documentType" className="block text-gray-700 font-bold mb-2">
                                    Judul:
                                </label>
                                <input
                                    type="text"
                                    id="documentType"
                                    value={judul}
                                    onChange={(e) => setJudul(e.target.value)}
                                    className="border border-gray-400 px-3 py-2 w-full"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                                    Deskripsi Singkat:
                                </label>
                                <textarea
                                    id="description"
                                    value={deskripsi}
                                    onChange={(e) => setDeskripsi(e.target.value)}
                                    className="border border-gray-400  px-3 py-2 w-full"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                                    Date:
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    value={tanggal}
                                    onChange={(e) => setTanggal(e.target.value)}
                                    className="border border-gray-400 px-3 py-2 w-full"
                                    required
                                />
                            </div>

                            <div className="mb-4 ">
                                <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
                                    Upload File (PDF only):
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    accept=".pdf"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    className="border border-gray-400 rounded-md py-2 ps-[30px] w-full"
                                    required
                                />
                            </div>

                            <div className='flex justify-end gap-3'>
                                <div>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        type='button'
                                        className='bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-white text-sm px-5 py-2.5 me-4'
                                    >
                                        Close
                                    </button>
                                </div>
                                <div>
                                    <button
                                        type='submit'
                                        className='bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-white text-sm px-5 py-2.5'
                                    >
                                        Upload
                                    </button>
                                </div>
                            </div>
                        </form>
                    </Modal>
                    <Modal showModal={modalDelete}>
                        <h1>Apakah anda yakin akan menghapus artikel ini?</h1>
                        <div className='flex justify-end mt-3'>
                            <button
                                onClick={() => setModalDelete(false)}
                                type='button'
                                className='bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-white text-sm px-5 py-2.5 me-3'
                            >
                                Cancel
                            </button>

                            <button
                                onClick={() => {
                                    handleDeleteEntry(formData.length - 1); // Delete the last entry for simplicity
                                    setModalDelete(false);
                                }}
                                type='button'
                                className='bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-white text-sm px-5 py-2.5'
                            >
                                Hapus
                            </button>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Kegiatan;