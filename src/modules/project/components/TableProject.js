import React, {useEffect, useState} from 'react'
import './TableProject.css'
import axios from 'axios';

const TableProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://exam-website-server-api.vercel.app/dashboard/project');
        setProjects(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);
  return (
    <div style={{
      position:'absolute',
      top: '10vh',
      left: '0',
      right: '0'
    }}>
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Author</th>
            <th>Summary</th>
            <th>Comment</th>
            <th>Point</th>
          </tr>
        </thead>
        <tbody>
        {projects.map(project => (
            <tr key={project._id}>
              <td>{project.projectName}</td>
              <td>{project.author}</td>
              <td>{project.summary}</td>
              <td>{project.comment}</td>
              <td>{project.point}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableProject
