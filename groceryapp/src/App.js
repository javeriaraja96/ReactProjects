import './App.css';
import { useState } from 'react'
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Header from './Header'; 
import Content from './Content'
import Footer from './Footer';




function App() {
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [items,setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')))

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  }

  const addItems = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItems(newItem);
    setNewItem('');
  }
  const handleCheck = (id) => {
      console.log(`key: ${id}`);
      const listItems = items.map((item) => item.id === id ? {...item, checked:!item.checked}: item);
      setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  }


  return (
    <div className="App">

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Header title='Grocery list'/>
      <Content 
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
