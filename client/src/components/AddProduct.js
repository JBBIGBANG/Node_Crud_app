import React from 'react';

import './AddProduct.css';
import {Form} from 'react-bootstrap';

const AddProduct = () => {

    const [inputValue, setInputValue] = React.useState({

        name: '',
        username: '',
        email: '',
        password: ''
        
    });

    const setData = (event) => {
        const {name, value} = event.target;
        setInputValue({
            ...inputValue,
            [name]: value
        });
    };

    return(
        <div className="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h3>Register Today</h3>
                        <p>Fill in the data below.</p>
                        <form className="requires-validation" novalidate>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="name" value={inputValue.name} onChange={setData} placeholder="Full Name" required />
                               <div className="valid-feedback">Name field is valid!</div>
                               <div className="invalid-feedback">Name field cannot be blank!</div>
                            </div>

                            <div className="col-md-12">
                                <input className="form-control" type="text" name="username" value={inputValue.username} onChange={setData} placeholder="User Name" required />
                                 <div className="valid-feedback">Username field is valid!</div>
                                 <div className="invalid-feedback">Username field cannot be blank!</div>
                            </div>

                            <div className="col-md-12">
                                <input className="form-control" type="email" name="email" value={inputValue.email} onChange={setData} placeholder="E-mail Address" required />
                                 <div className="valid-feedback">Email field is valid!</div>
                                 <div className="invalid-feedback">Email field cannot be blank!</div>
                            </div>

                            <div className="col-md-12">
                                <input className="form-control" type="password" name="password" value={inputValue.password} onChange={setData} placeholder="Password" required />
                                 <div className="valid-feedback">Password field is valid!</div>
                                 <div className="invalid-feedback">Password field cannot be blank!</div>
                            </div>
                        

                            <div className="form-button mt-3">
                                <button id="submit" type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default AddProduct;