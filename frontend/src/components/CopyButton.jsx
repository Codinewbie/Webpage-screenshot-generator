import React from 'react';

const CopyButton = ({ handleCopyImage, copyText }) => (
  <button
    onClick={handleCopyImage}
    className="absolute top-0 right-0 text-center items-center opacity-90 bg-slate-800 border-t border-r rounded rounded-r-none text-xs text-white px-2 py-1"
  >
    <i className={`bx ${copyText === "Copied!" ? "bx-check" : "bx-copy"} pr-1`} style={{ color: '#ffffff' }}></i>
    {copyText}
  </button>
);

export default CopyButton;
