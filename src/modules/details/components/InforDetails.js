import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const InforDetails = () => {
  const { projectId } = useParams(); // Lấy giá trị của _id từ URL

  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`https://exam-website-server-api.vercel.app/home/overview/${projectId}`); // Truyền _id vào endpoint
        setProject(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProject();
  }, [projectId]); // Thêm projectId vào dependency array để trigger useEffect khi _id thay đổi

  if (!project) {
    return <div>Loading...</div>; // Hiển thị thông báo loading khi đang lấy dữ liệu từ server
  }

  return (
    <div>
      <img src={project.mainImage} alt={project.projectName}/>
      <h2>NAME: {project.projectName}</h2>
      <p>Author: {project.author}</p>
      <p>Summary: {project.summary}</p>
      <Link to={project.detail} target='_blank'>
        <button>READ MORE</button>
      </Link>
      <p>Point: {project.point}</p>
      <p>Comment: {project.comment}</p>
    </div>
  );
};

export default InforDetails;
