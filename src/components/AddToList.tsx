import React, {useState} from 'react'
import { IState as Props } from "../App" 

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

export const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        img: "",
        address: ""
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleClick = () => {
         if(
             !input.name || !input.age || !input.img || !input.address
         ) {
             return
         }

         setPeople([
              ...people, 
              {
                  name: input.name,
                  age: parseInt( input.age ),
                  img: input.img,
                  address: input.address
              }
              
         ]);
         setInput({
            name: "",
            age: "",
            img: "",
            address: ""
         })
    }
  return (
    <div className='AddToList'>
        <input 
            type="text"
            placeholder='Name'
            className='AddToList-input'
            value={input.name}
            onChange={handleChange}
            name="name"
        />
        <input 
            type="text"
            placeholder='Age'
            className='AddToList-input'
            value={input.age}
            onChange={handleChange}
            name="age"
        />
        <input 
            type="text"
            placeholder='Image'
            className='AddToList-input'
            value={input.img}
            onChange={handleChange}
            name="img"
        />
        <input 
            type="text"
            placeholder='Address'
            className='AddToList-input'
            value={input.address}
            onChange={handleChange}
            name="address"
        />
        <button
           className='AddToList-btn'
           onClick={handleClick}
        >Add To List</button>
    </div>
  )
}
