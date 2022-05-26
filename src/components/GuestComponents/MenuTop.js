import React from "react";

import "./MenuTop.scss";

export default function MenuTop() {
  return (
    <div className='menu-top-user'>
      <ul>
        <li>
          <a href='/'>SigIn</a>
        </li>
        <li>
          <a href='/'>Login</a>
        </li>
      </ul>
    </div>
  );
}
