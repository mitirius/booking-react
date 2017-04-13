import React from 'react';
import './RoomList.css';

function RoomList(props){
    return(
      <div className={`mainlist ${props.className}`}>
            <ul className='list-group'>
                {props.roomList.map((room, idx) => 
                  <li className="list-group-item" key={idx} onClick={props.handleClick.bind(undefined, idx)}>
                    <a href='#'>{room.name}</a>
                  </li>)}  
            </ul>
      </div>
    )
  }

export default RoomList;