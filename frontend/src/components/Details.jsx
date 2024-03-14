import React from 'react';
import { useLocation } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

const Details = () => {
    const location = useLocation();
    const data = location.state?.data;

    return (
        <>
            <div className="max-w-4xl mx-auto pt-10">
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Phone Number</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.map((row, index) => (
                            <Tr key={index}>
                                <Td>{row.Name}</Td>
                                <Td>{row['Phone Number']}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>

            </div>
            <div className='flex justify-center mt-6'>
                <Button colorScheme="blue">
                    Send SMS
                </Button>
            </div>
        </>
    );
};

export default Details;
