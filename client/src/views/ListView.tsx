import React from 'react';
import { PROJECTS } from '../components/Static';

const GetProjects = (tech: string) => {

  return PROJECTS.filter(p => p.tags.includes(tech)).map((obj, i) => {
    return <article key={i} className='repo'>
      <a href={obj.link} target='_blank'>
        <img src={obj.img} alt={obj.name} width='100%'/>
        <h3>{obj.name}</h3>
      </a>
      <footer>
        {obj.tech.map((t, j) => {
          return <img key={j} src={t} alt={':)'} width='18%' />
        })}
      </footer>
    </article>
  })
}

function ListView(tech: string) {
  return (
    <div className='view-wrapper home-view'>
      {GetProjects(tech)}
    </div>
  );
}

export default ListView;
