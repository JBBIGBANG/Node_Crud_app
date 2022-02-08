import React from 'react';


import './Home.css';
import { Button, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='mt-5'>
            <div className='container'>
                <div className='add_btn mt-2'>
                    <Link to='/addProduct'>
                      <Button variant="success" ><i class="fas fa-plus" />Add Product</Button>
                    </Link>
                </div>
                
                <Table striped bordered hover className='mt-5'>
                    <thead>
                        <tr className='table-dark'>
                        <th>Serial</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td className='d-flex justify-content-between'>
                            <Button variant='success'><i class="fas fa-eye"></i></Button>
                            <Button variant='warning'><i class="fas fa-edit"></i></Button>
                            <Button variant='danger'><i class="fas fa-trash-alt"></i></Button>
                            
                        </td>
                        </tr>
                        
                        
                    </tbody>
                    </Table>

            </div>
        </div>
    );
};
export default Home;