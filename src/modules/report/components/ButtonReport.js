import React from 'react'
import axios from 'axios';

const ButtonReport = () => {
    const handleExportExcel = () => {
        axios.get('/dashboard/report', { responseType: 'blob' })
          .then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'project.xlsx');
            document.body.appendChild(link);
            link.click();
          })
          .catch(error => console.error(error));
      };
    
      return (
        <button onClick={handleExportExcel}>Export to Excel</button>
      );
}

export default ButtonReport