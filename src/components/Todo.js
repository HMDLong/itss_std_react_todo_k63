  import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems] = React.useState([
      /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);

  const [filteredItems, putFilteredItems] = React.useState([]);

  const tabs = [
    { id: 1, text: '全て' },
    { id: 2, text: '未完了'},
    { id: 3, text: '完了'}
  ];

  const [activeTab, changeActiveTab] = useState(1);

  function addItems (new_item){
    putItems([...items, new_item])  
  }

  function checkItemByTab(item, tabId){
    switch(tabId){
      case 1: return true;
      case 2: return !item.done;
      case 3: return item.done;
      default: return false;
    }
  }
  
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      { <Input 
          addItems={addItems}
        />
      }
      <div class="panel-block tabs is-centered">
        <ul>
          {
            tabs.map(tab => (
              <li class={tab.id === activeTab? 'is-active' : ''}>
                <a onClick={() => {changeActiveTab(tab.id)}}>
                  {tab.text}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
      {items.filter(item => checkItemByTab(item, activeTab)).map(item => (
        <TodoItem
          key={item.key}
          item={item}
        />
      ))}
      <div className="panel-block">
        {items.length} items
      </div>
    </div>
  );
}

export default Todo;