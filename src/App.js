import React, {useState} from 'react';
import './App.css';
import menu from './data';
import Menu  from './menu';
import Categories from './categories';


function App() {
  const [menuItems, setMenuItems] = useState(menu);

  const filterMenu =(category)=>{
    if(category === 'All'){
      setMenuItems(menu);
      return;
    }
    const newMenuItems = menu.filter((item)=> item.category === category);
    setMenuItems(newMenuItems)
  }

  const categorySet = new Set(menu.map(item=> item.category));
  const categoryItems = ['All', ...categorySet];

  
  // console.log(categoryItems);
  // ['All',{...new set(menuItems.map(item=> item.category))}];
  return (
    <div className='container'>
      <div className='row'>
        <div className='title'>
          <h1>our menu</h1>
        </div>
      </div>
      <div className='row'>
        <Categories filterMenu={filterMenu} categoryItems={categoryItems} />
      </div>
      <div className='row'>
        <Menu items={menuItems} />
      </div>
    </div>
  );
}

export default App;
