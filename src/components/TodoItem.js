import { useState } from "react";

/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem(props) {
  const [style, changeStyle] = useState('panel-block');
  
  function clickCheckbox(){
    props.item.done = !props.item.done;
    if(props.item.done)
      changeStyle('panel-block has-text-grey-light');
    else {
      changeStyle('panel-block');
    }
  }
  
  return (
    <label className={style}>
      <input type="checkbox" onClick={clickCheckbox}/>
      {props.item.text}
    </label>
  );
}

export default TodoItem;