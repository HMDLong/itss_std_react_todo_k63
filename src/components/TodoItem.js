import { useState } from "react";

/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({item}) {
  const [done, setDone] = useState(item.done);
  
  function clickCheckbox(){
    item.done = !item.done;
    setDone(!done);
  }
  
  return (
    <label className={`panel-block ${done? 'has-text-grey-light' : ''}`}>
      <input type="checkbox" checked={done} onClick={clickCheckbox}/>
      {item.text}
    </label>
  );
}

export default TodoItem;