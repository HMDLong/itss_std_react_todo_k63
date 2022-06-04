import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/

import { getKey } from '../lib/util.js'

function Input({addItems}) {
  function onEnterPressed(event){
    if (event.key === 'Enter'){
      const new_todo = { key: getKey(), text: event.target.value, done: false};
      addItems(new_todo);
    }
  }

  return (
    <div className="panel-block">
      <input class='input' type='text' onKeyPress={(e) => onEnterPressed(e)}/>
    </div>
  );
}

export default Input;
