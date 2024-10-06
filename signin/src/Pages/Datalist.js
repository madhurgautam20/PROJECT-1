import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Datalist = ({ data, Removedata }) => {
  return (
    <div className='save'>
      {data.map((element, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h2 className="card-title">Saved data</h2>
            <h3 className="card-subtitle mb-2 text-muted">NAME: {element.name}</h3>
            <h3 className="card-subtitle mb-2 text-muted">AGE: {element.age}</h3>
            <h3 className="card-subtitle mb-2 text-muted">EMAIL: {element.email}</h3>
            <h3 className="card-subtitle mb-2 text-muted">PHONE NO: {element.phone}</h3>
            <div className="d-flex justify-content-end">
              <button
                onClick={() => Removedata(index)}
                className="btn btn-danger"
              >
                <i className="bi bi-trash"></i> Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Datalist;

