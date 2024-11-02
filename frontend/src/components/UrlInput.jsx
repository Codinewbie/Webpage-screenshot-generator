import React from 'react';

const UrlInput = ({ url, setUrl }) => (
  <div className="space-y-2 flex justify-center max-w-full">
  
    <input
      id="url"
      type="url"
      className="w-full md:max-w-2xl p-2 border border-gray-300 rounded-md"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      placeholder="https://example.com"
      required
    />
  </div>
);

export default UrlInput;
