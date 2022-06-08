import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatusAction } from '../store/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  return (
    <div>
      <button
        type="button"
        className="button"
        onClick={() => {
          dispatch(checkStatusAction());
        }}
      >
        Check status
      </button>
      <p>{status}</p>
    </div>
  );
};

export default Categories;
