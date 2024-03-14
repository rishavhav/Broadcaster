import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { Button } from '@chakra-ui/react';

const Home = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };

    const handleUpload = () => {
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const workbook = XLSX.read(e.target.result, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const data = XLSX.utils.sheet_to_json(worksheet);
                navigate('/details', { state: { data } });
            };
            reader.readAsBinaryString(file);
        }
    };

    return (
        <>
            <div className="font-[sans-serif] max-w-md mx-auto pt-40">
                <label className="text-sm text-black mb-2 block">Upload file</label>
                <input
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={handleChange}
                    className="w-full text-black text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-black rounded"
                />
                <p className="text-xs text-gray-400 mt-2">Only Excel files are allowed.</p>
                <Button onClick={handleUpload} colorScheme="blue" mt="4">
                    Process file
                </Button>
            </div>
        </>
    );
};

export default Home;
