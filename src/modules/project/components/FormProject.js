import React, { useState } from 'react';
import axios from 'axios';

const FormProject = () => {
  const [projectData, setProjectData] = useState({
    projectName: '',
    author: '',
    summary: '',
    detail: null,
    mainImage: null,
    images: null,
    video: null
  });

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setProjectData({ ...projectData, [name]: files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('projectName', projectData.projectName);
    formData.append('author', projectData.author);
    formData.append('summary', projectData.summary);
    formData.append('detail', projectData.detail);
    formData.append('mainImage', projectData.mainImage);
    if (projectData.images) {
      for (let i = 0; i < projectData.images.length; i++) {
        formData.append('images', projectData.images[i]);
      }
    }
    formData.append('video', projectData.video);

    try {
      const res = await axios.post('/dashboard/upload-project', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res.data);
      alert('Successfully');
      window.location.reload(); // Tải lại trang khi upload thành công
    } catch (error) {
      console.error(error);
      alert('Fail');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="projectName" onChange={(e) => setProjectData({ ...projectData, projectName: e.target.value })} />
      <input type="text" name="author" onChange={(e) => setProjectData({ ...projectData, author: e.target.value })} />
      <input type="text" name="summary" onChange={(e) => setProjectData({ ...projectData, summary: e.target.value })} />
      <input type="file" name="detail" onChange={handleFileChange} />
      <input type="file" name="mainImage" onChange={handleFileChange} />
      <input type="file" name="images" onChange={handleFileChange} multiple />
      <input type="file" name="video" accept="video/mp4" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default FormProject;
