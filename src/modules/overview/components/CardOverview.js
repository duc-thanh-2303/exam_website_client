import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CardOverview.css'
import {Link} from "react-router-dom";
// import profile from '../assets/profile.png'

const CardOverview = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await axios.get('https://exam-website-server-api.vercel.app/home/overview'); // Định nghĩa route này trên server
        setProjects(response.data);
      } catch (error) {
        console.error('Có lỗi xảy ra khi lấy thông tin dự án:', error);
      }
    }
    fetchProjects();
  }, []);

  return (
      <div style={{
        marginTop: '6vh',
        marginLeft: '12vh',
        marginBottom: '5vh'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto',
          gridTemplateRows: 'auto auto auto',
          rowGap: '5vh',
        }}>
          {projects.map((project, index) => (
              <Link style={{
                textDecoration: 'none'
              }} to={`/home/overview/${project._id}`}>
                <div className='card__overview'  key={project._id}>
                  <div className='overview__image'>
                    {/* {project.mainImage && <img src={project.mainImage} alt={project.projectName} />} */}
                    {/* {project.mainImage && <img src={`/${project.mainImage}`} alt={project.projectName} />} */}
                    {/* <img src={`${project.mainImage}`} alt={project.projectName} /> */}
                    <img src={`/images/${project.mainImage}`} alt={project.projectName} />
{/*<img src={`/images/${project.mainImage.split('\\').pop()}`} alt={project.projectName} />*/}
                  </div>
                  <span>Point: {project.point}</span>
                  <h2>{project.projectName}</h2>
                  <div className='profile'>
                    <p>By: {project.author}</p>
                  </div>
                </div>

              </Link>
          ))}
        </div>
      </div>
  );
}

export default CardOverview;
