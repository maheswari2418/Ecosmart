import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5001/signup', data)
      .then((res) => {
        alert(res.data);
        // Handle other logic after a successful response if needed
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);
      });
  };

  return (
    <section className="login-wrapper p-5">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="text-center">Sign Up</h2>
                <p className="text-center mb-3">Join us in shopping!!</p>
                <form onSubmit={submitHandler}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label mb-3">
                      Enter Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter username here ..."
                      value={name}
                      onChange={changeHandler}
                      name="name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label mb-3">
                      Enter Your Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email here ..."
                      value={email}
                      onChange={changeHandler}
                      name="email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label mb-3">
                      Enter Your password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter password here..."
                      value={password}
                      onChange={changeHandler}
                      name="password"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="confirmPassword"
                      className="form-label mb-3"
                    >
                      Confirm Your password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Rewrite password here..."
                      value={confirmPassword}
                      onChange={changeHandler}
                      name="confirmPassword"
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p>
                      Have an account?
                    </p>
                    <Link to="/login" className="form-link">
                      Log In
                    </Link>
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
