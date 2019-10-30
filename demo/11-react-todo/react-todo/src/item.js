import React from 'react'
import './item.css'

// 待办项组件
function Item(props) {
  return (
    <div>
      <p className='item'>
        <span className={props.checked?'checkStyle':''}>{props.value}</span>
        <input
          id="myitem"
          type="checkbox"
          checked={props.checked}
          readOnly
          />
        <label htmlFor="myitem" onClick={props.handleChild}></label>
      </p>
    </div>
  )
}

export default Item