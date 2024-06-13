import  { useState } from 'react';
import './Categoty.css'
import PropTypes from 'prop-types';
const Category = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle Headerbtn"
        type="button"
        onClick={toggleDropdown}
      >
        {props.children}
      </button>
      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        <button className="dropdown-item" href="#">
          Action
        </button>
        <button className="dropdown-item" href="#">
          Another action
        </button>
        <button className="dropdown-item" href="#">
          Something else here
        </button>
      </div>
    </div>
  );
};
Category.propTypes = {
  children: PropTypes.node,
};
export default Category;
