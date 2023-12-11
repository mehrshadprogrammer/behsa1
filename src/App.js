import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'


const App = () => {
  const [names, setNames] = useState(['mehrshad', 'samaei']);
  const [inputValue, setInputValue] = useState('');

  const handleRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    alert(names[randomIndex]);
  };

  const handleAddName = () => {
    setNames([...names, inputValue]);
    setInputValue('');
  };
  return (
    
    <div>
      <button onClick={handleRandomName}>نمایش نام تصادفی</button>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddName}>اضافه کردن نام</button>
      <button onClick={() => alert(names.join(', '))}>دیدن لیست اسامی</button>
    </div>
  );
};
export default App;
