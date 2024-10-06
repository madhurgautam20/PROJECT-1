import React, { useState, useEffect } from "react";
import Datalist from "./Datalist";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [home, sethome] = useState({ name: "", age: "", email: "", phone: "" });
  const [alert, setAlert] = useState(null);
  const [dataList, setDataList] = useState([]);
  // useEffect(() => {
  //   document.body.style.backgroundColor = "DodgerBlue"; // Set background color
  //   return () => {
  //     document.body.style.backgroundColor = ""; // Reset background color on unmount
  //   };
  // }, []);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleData = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify(home),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json(); // Parse the JSON response
    console.log(data); // Log the parsed data
    if (home.name && home.age && home.email && home.phone) {
      setDataList([...dataList, home]);
      sethome({ name: "", age: "", email: "", phone: "" });
      setAlert(
        <div
          className="alert alert-success d-flex align-items-center"
          role="alert"
        >
          <svg
            className="bi flex-shrink-0 me-2"
            width="24"
            height="24"
            role="img"
            aria-label="Success:"
          >
            <use xlinkHref="#check-circle-fill" />
          </svg>
          <div>Data added successfully!</div>
        </div>
      );
    } else {
      setAlert(
        <div
          className="alert alert-danger d-flex align-items-center"
          role="alert"
        >
          <svg
            className="bi flex-shrink-0 me-2"
            width="24"
            height="24"
            role="img"
            aria-label="Danger:"
          >
            <use xlinkHref="#exclamation-triangle-fill" />
          </svg>
          <div>Please fill all the Textfields</div>
        </div>
      );
    }
  };

  const removeData = (index) => {
    const newDataList = dataList.filter((_, i) => i !== index);
    setDataList(newDataList);
  };

  return (
    <>
      <div className="container mt-5">
        {alert}
        <section>
          <form onSubmit={handleData}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>

              <input
                type="text"
                className="form-control"
                id="name"
                value={home.name}
                onChange={(e) => sethome({ ...home, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="age"
                className="form-label"
                // style={{ color: "white" }}
              >
                Age
              </label>
              <input
                type="text"
                className="form-control"
                id="age"
                value={home.age}
                onChange={(e) => sethome({ ...home, age: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label"
                // style={{ color: "white" }}
              >
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={home.email}
                onChange={(e) => sethome({ ...home, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="phone"
                className="form-label"
                // style={{ color: "white" }}
                inputProps={{ maxLength: 10 }}
              >
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={home.phone}
                onChange={(e) => sethome({ ...home, phone: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
          <Datalist data={dataList} Removedata={removeData} />
        </section>
      </div>
      <div className="text-center">
        {/* <div className="bg-success p-3 d-inline-block"> */}
        <a href="/Login" className=" text-black">
          <u>Log Out</u>
        </a>
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
