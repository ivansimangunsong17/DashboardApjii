import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrudComponent = () => {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({});

    // Fungsi untuk mendapatkan data dari API (Read)
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/$(id)`); // Ganti dengan URL endpoint Anda
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // Fungsi untuk menambah data (Create)
    const addData = async () => {
        try {
            await axios.post(`https://jsonplaceholder.typicode.com/todos/$(id)`, formData); // Ganti dengan URL endpoint Anda
            fetchData(); // Setelah menambah data, panggil kembali fetchData untuk memperbarui data di halaman.
        } catch (error) {
            console.error(error);
        }
    };

    // Fungsi untuk mengedit data (Update)
    const updateData = async (id) => {
        try {
            await axios.put(`https://jsonplaceholder.typicode.com/todos/$(id)`, formData); // Ganti dengan URL endpoint Anda
            fetchData(); // Setelah mengedit data, panggil kembali fetchData untuk memperbarui data di halaman.
        } catch (error) {
            console.error(error);
        }
    };

    // Fungsi untuk menghapus data (Delete)
    const deleteData = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/$(id)`); // Ganti dengan URL endpoint Anda
            fetchData(); // Setelah menghapus data, panggil kembali fetchData untuk memperbarui data di halaman.
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {/* Tampilkan data di sini */}
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.description}
                        <button onClick={() => updateData(item.id)}>Edit</button>
                        <button onClick={() => deleteData(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            {/* Form untuk menambah data */}
            <form>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                    type="text"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
                <button type="button" onClick={addData}>Add Data</button>
            </form>
        </div>
    );
};

export default CrudComponent;
