'use client';

import React, { useState } from 'react';

const SignPDF: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div>
      <h2>Sign PDF</h2>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
};

export default SignPDF;