import React from 'react';
import ContentMovies from './ContentMovies';


export default function ContentRowMovies() {

    let data = [
        {
          title : 'Movies in Data Base',
          color : 'primary',
          value : 21,
          icon : 'fa-film'
    
        },
        {
          title : 'Total awards',
          color : 'success',
          value : 79,
          icon : 'fa-award'
    
        },
        {
          title : 'Actors quantity',
          color : 'warning',
          value : 49,
          icon : 'fa-user'
        }
      ];
    
    return (

    <div className="row">

            {/* <!-- Movies in Data Base --> */}
            {/* <!-- Total awards --> */}
            {/* <!-- Actors quantity --> */}
            {
                data.map((elem, i) => {
                    return <ContentMovies 
                        title= {elem.title}
                        color= {elem.color}
                        value= {elem.value}
                        icon= {elem.icon}
                        key= {i}
                    />
                })
            }
        </div>
  )
}
