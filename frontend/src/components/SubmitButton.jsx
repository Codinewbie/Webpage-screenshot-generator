import React from 'react';

const SubmitButton = ({ loading }) => (
    <div className = "flex justify-center">
        <button
        type="submit"
        className="w-full md:max-w-2xl py-2 px-4 bg-green-700 text-white rounded-lg hover:bg-green-800"
        disabled={loading}
        >
        {loading ? "Loading..." : "Take Screenshot"}
        </button>
    </div>
  );
  
  export default SubmitButton;
  