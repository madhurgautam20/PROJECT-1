import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    // to covert into string use json.stringyfy and to convert object then we use json .parse
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
        localStorage.setItem("loggedIn",true)
      navigate("/Home");
    } else {
      alert("Wrong email and password");
    }
  };
  return (
    <>
      <section
        className="vh-100 bg-image"
        style={{
          backgroundColor: "black",
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Login</h2>
                    <form onSubmit={handleLogin}>
                      <div className="form-outline mb-4">
                        <input
                          name="email"
                          value={input.email}
                          onChange={(e) =>
                            setInput({
                              ...input,
                              [e.target.name]: e.target.value,
                            })
                          }
                          type="email"
                          id="form3Examplelcg"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Examplelcg">
                          Your email
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          name="password"
                          value={input.password}
                          onChange={(e) =>
                            setInput({
                              ...input,
                              [e.target.name]: e.target.value,
                            })
                          }
                          type="text"
                          id="form3Examplelcg"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Examplelcg">
                          Password
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body text-white">
                          Login
                        </button>
                      </div>
                      <p className="tex-center text-muted mt-5 mb-0">
                        I dont have any account. 
                        <a href="/" className="fw-bold text-body">
                        <u>Register</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;