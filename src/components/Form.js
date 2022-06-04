import React from 'react';

const Form = () => (
  <div>
    <h2> Add book </h2>
    <form className="form-container">
      <div className="form-input">
        <input type="text" className="input-field" placeholder="Book Title" />
      </div>
      <div className="form-input">
        <input type="text" className="input-field" placeholder="Book Author" />
      </div>
      <div className="form-input">
        <input type="button" className="button" value="Add book" />
      </div>
    </form>
  </div>
);

export default Form;
