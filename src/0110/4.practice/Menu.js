import { useState } from 'react';
import './Menu.css';

function Menu() {
  const [activeText, setActiveText] = useState('');
  const menuItems = ['首頁', '關於我們', '產品'];

  return (
    <>
      <ul>
        {menuItems.map((v, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                setActiveText(v);
              }}
            >
              <a href="#/" className={activeText === v ? 'active' : ''}>
                {v}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Menu;
