import React from 'react';

import './AddProduct.css';
import {Form} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const AddProduct = () => {

    const navigator = useNavigate();
    const [inputValue, setInputValue] = React.useState({

        name: '',
        username: '',
        mobile: '',
        email: '',
        password: '',
        description: ''
        
    });

    const setData = (event) => {
        const {name, value} = event.target;
        setInputValue({
            ...inputValue,
            [name]: value
        });
    };

    const addinputdata = async (event) => {
        event.preventDefault();
        
        const res = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputValue)
        });
        const data = await res.json();
        console.log({data,res});

        if(res.status === 200) {
            // res.status(200).json(data);
            console.log('added');
            // alert('Data added successfully');
            navigator('/');
            
        } else {
            alert('Error');
        }
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
                                <input className="form-control" type="text" name="mobile" value={inputValue.mobile} onChange={setData} placeholder="Mobile" required />
                                 <div className="valid-feedback">Mobile field is valid!</div>
                                 <div className="invalid-feedback">Mobile field cannot be blank!</div>
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
                            <div className="col-md-12">
                                <input className="form-control" type="text" name="description" value={inputValue.description} onChange={setData} placeholder="Description" required />
                                 <div className="valid-feedback">Description field is valid!</div>
                                 <div className="invalid-feedback">Description field cannot be blank!</div>
                            </div>
                        

                            <div className="form-button mt-3">
                                <button id="submit" type="submit" className="btn btn-primary" onClick={addinputdata} >Submit</button>
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