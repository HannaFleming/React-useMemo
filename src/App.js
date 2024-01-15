import { useMemo, useState } from 'react';
import './App.css';
import React from 'react'


const fruits = [
  {id:'1', item:'Peach'},
  {id:'2', item:'Apple'},
  {id:'3', item:'Banana'},
  {id:'4', item:'Pineapple'},
  {id:'5', item:'plum'},
]

function App() {

const [text, setText] = useState('');
const [search, setSearch] = useState('');

const handleText = (e) => {
  setText(e.target.value);
}
const handleSearch = (e) => {
  setSearch(text)

}

const filteredFruit = useMemo( () =>  fruits.filter((fruit) => {

  return fruit.item.toLowerCase().includes(search.toLowerCase())
}), [search])

return(
  <div>
    <h1>Filtering...</h1>
    <input type='text'  onChange={handleText}/>
    <button type="button" onClick={handleSearch}>Search</button>
    <div>
       {filteredFruit.map((filteredFruit) => (
        <p key={(filteredFruit.id)}>{filteredFruit.item}</p>
        ))}
    </div>
  </div>
)

}

export default App;
