import React from 'react';
import "../../styles/skills.css";
import 'font-awesome/css/font-awesome.min.css';

export const Skills = () => {
  const skillsData = [
    { skill: 'HTML', percentage: '90%', iconClass: 'fa-html5', color: '#E44D26' },
    { skill: 'CSS', percentage: '60%', iconClass: 'fa-css3', color: '#147BBC' },
    { skill: 'JavaScript', percentage: '70%', iconClass: 'fa-js', color: '#F0DB4F' },
    { skill: 'Python', percentage: '60%', iconClass: 'fa-python', color: '#306998' },
    { skill: 'React', percentage: '70%', iconClass: 'fa-react', color: '#61DAFB' },
  ];

  const professionalSkills = [
    { skill: 'Project Management', percentage: '80%', iconClass: 'fa-tasks', color: '#FF5733' },
    { skill: 'Communication', percentage: '90%', iconClass: 'fa-comments', color: '#2E86C1' },
    // Add more professional skills as needed
  ];

  return (
    <div className='sub-title'>
      <h1>My <span>Skills</span></h1>
      <div className="container">
        <div className="row">
          <div className="skills-container">
            <div className="col-md-12">
              <div className='technical-skills'>
                <h2 className='heading1'>Technical Skills</h2>
                <div className='Technical-bars'>
                  {skillsData.map((data, index) => (
                    <div className='bar' key={index}>
                      <i className={`fa-brands ${data.iconClass}`} style={{ color: data.color }}></i>
                      <div className='info'>
                        <p>{data.skill}</p>
                      </div>
                      <div className='progress-line'>
                        <span className='animate' style={{ width: data.percentage }}></span>
                      </div>
                      <div className='percentage'>{data.percentage}</div>
                    </div>
                  ))}
                </div>
              </div>
              
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}