import React, { useState } from 'react';

const FormInput = ({ onSubmit, onClose }) => {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [documentType, setDocumentType] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            date,
            description,
            documentType,
            file,
        };
        onSubmit(formData);

        setDate('');
        setDescription('');
        setDocumentType('');
        setFile(null);
    };

    const handleCloseClick = () => {
        onClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='mb-4'>
                <label htmlFor="documentType" className="block text-gray-700 font-bold mb-2">
                    Judul:
                </label>
                <input
                    type="text"
                    id="documentType"
                    value={documentType}
                    onChange={(e) => setDocumentType(e.target.value)}
                    className="border border-gray-400 px-3 py-2 w-full"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                    Dekripsi Singkat:
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
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

            </div>
            <div className='flex justify-end gap-3'>
                <div>
                    <button
                        type='button'
                        onClick={handleCloseClick}
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
    );
};

export default FormInput;