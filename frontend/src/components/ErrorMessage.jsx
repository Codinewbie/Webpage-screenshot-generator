import React from 'react';

const ErrorMessage = ({ errorMessage }) => (
    errorMessage && (
      <div className="mt-2 text-center text-red-500">
        {errorMessage}
      </div>
    )
);
  
export default ErrorMessage;
  