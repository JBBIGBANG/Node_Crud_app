import React,{useState, useEffect} from "react";

import { Button } from "react-bootstrap";
import { useParams ,useNavigate} from "react-router-dom";
import "./AddProduct.css";

const EditProduct = () => {

    const usehistory = useNavigate()
  const [inputValue, setInputValue] = React.useState({
        name: '',
        username: '',
        mobile: '',
        email: '',
        password: '',
        description: ''
  });

  const setData = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const {id} = useParams();
    const getinputdata = async (event) => {
        const res = await fetch(`/finduser/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
            
        });
        const data = await res.json();
        console.log(data);

        if(res.status === 200) {
            setInputValue(data);
            res.status(200).json(data);
        } else {
            alert('Did not get any data');
        }
    };

    useEffect(() => {
        getinputdata();
    }, []);

    const updateuser = async(event) => {
        event.preventDefault();

        const {name,username,mobile,email,password,description} = inputValue;
        const res2 = await fetch(`/updateuser/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name,username,mobile,email,password,description
            })
        });
        const data2 = await res2.json();
        console.log(data2);

        if(res2 === 404 || !data2){
            alert("fill the data")
        }
        else{
            alert("data added")
            usehistory("/");
        }
    }

  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Edit Member Details</h3>
              <p>Edit in the data below.</p>
              <form className="requires-validation" novalidate>
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={inputValue.name}
                    onChange={setData}
                    placeholder="Full Name"
                    required
                  />
                  <div className="valid-feedback">Name field is valid!</div>
                  <div className="invalid-feedback">
                    Name field cannot be blank!
                  </div>
                </div>

                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    value={inputValue.username}
                    onChange={setData}
                    placeholder="User Name"
                    required
                  />
                  <div className="valid-feedback">Username field is valid!</div>
                  <div className="invalid-feedback">
                    Username field cannot be blank!
                  </div>
                </div>
                
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    name="mobile"
                    value={inputValue.mobile}
                    onChange={setData}
                    placeholder="User Name"
                    required
                  />
                  <div className="valid-feedback">mobile field is valid!</div>
                  <div className="invalid-feedback">
                  mobile field cannot be blank!
                  </div>
                </div>

                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={inputValue.email}
                    onChange={setData}
                    placeholder="E-mail Address"
                    required
                  />
                  <div className="valid-feedback">Email field is valid!</div>
                  <div className="invalid-feedback">
                    Email field cannot be blank!
                  </div>
                </div>

                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={inputValue.password}
                    onChange={setData}
                    placeholder="Password"
                    required
                  />
                  <div className="valid-feedback">Password field is valid!</div>
                  <div className="invalid-feedback">
                    Password field cannot be blank!
                  </div>
                </div>

                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    name="description"
                    value={inputValue.description}
                    onChange={setData}
                    placeholder="description"
                    required
                  />
                  <div className="valid-feedback">description field is valid!</div>
                  <div className="invalid-feedback">
                  description field cannot be blank!
                  </div>
                </div>

                <div className="form-button mt-3">
                  <Button id="submit" type="submit" variant="success" onClick={updateuser} >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
