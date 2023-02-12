import React from 'react'
import ItemList from './itemList'

const Content = ({items, handleCheck, handleDelete}) => {

//   const [name, setName] = useState('Javeria');
//   const [count, setCount] = useState(0);
//   const handleNameChange = () => {
//         const names = ['bob', 'Kevin', 'Jav'];
//         const int = Math.floor(Math.random() * 3);
//         setName(names[int]);
//     }    
//     const handleClick = () => {
//         console.log(count)
//     }
//     const handleClick2 = (name) => {
//         console.log(`${name} was clicked!!`)
//         console.log(count);
//         setCount(count+1)
//         setCount(count+1)
//         console.log(count+1)
//     }
//     const handleClick3 = (e) => {
//         console.log(e.type);
//         console.log(e.target.innerText);
//     }
  return (
    <main>
        {items.length?
        (
            <ItemList 
            items={items} 
            handleCheck={handleCheck} 
            handleDelete={handleDelete}/>
        ) : (
            <p style={{marginTop:'2rem'}}>Your list is empty!</p>
        )}

        {/* <p onDoubleClick={handleClick}>
            Hello {name}
        </p>
        <br />
        <br />
        <button onClick={handleNameChange}>
            Change Name!
        </button>
        <button onClick={handleClick}>
            Click it!
        </button>
        <button onClick={() => handleClick2('Dave')}>
            Click it!
        </button>
        <button onClick={(e) => handleClick3(e)}>
            Click it!
        </button> */}
    </main>
  )
}

export default Content
