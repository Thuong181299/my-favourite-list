import React from 'react'
import { IState as IProps } from "../App"

  

export const List: React.FC<IProps> = ({ people }) => {
   const renderList = (): JSX.Element[] => {
       return people.map((person) => {
          return (
            <li className='List'>
                <div className="List-header">
                    <img src={person.img} className="List-img" alt="" />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className='List-note'>{person.address}</p>
           </li>
          )
       })
   }
    return (
    <ul>
       {renderList()}
    </ul>
  )
}
