import React from 'react';
import Counter from './components/Counter';
import PersonalInfo from './components/PersonalInfo';
import ProductListCheckbox from './components/ProductListCheckbox';
import ProductListRadio from './components/ProductListRadio';
import CounterComponent from './ex12/CounterEx12';
import ControlledInputField from './ex12/ConInputField';
import ToggleVisibility from './ex12/ToggleVisibility';
import TodoList from './ex12/TodoList';
import ColorSwitcher from './ex12/ColorSwitcher';
import SearchFilter from './ex12/SearchFilter';
import DragDropList from './ex12/DragDropList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* <h1>Ứng Dụng useState</h1>
      <h2>Ví dụ 1: Bộ Đếm</h2>
      <Counter />
      <h2>Ví dụ 2: Thông Tin Cá Nhân</h2>
      <PersonalInfo />
      <h2>Ví dụ 3: Chọn Nhiều Sản Phẩm</h2>
      <ProductListCheckbox />
      <h2>Ví dụ 4: Chọn Một Sản Phẩm</h2>
      <ProductListRadio /> */}
      
      <h1>Exercise 12</h1>
      <h2>Ex1</h2>
      <CounterComponent/>
      <h2>Ex2</h2>
      <ControlledInputField />
      <h2>Ex3</h2>
      <ToggleVisibility/>
      <h2>Ex4</h2>
      <TodoList/>
      <h2>Ex5</h2>
      <ColorSwitcher/>
      <h2>Ex6</h2>
      <SearchFilter/>
      <h2>Ex7</h2>
      <DragDropList/>
 
    </div>
  );
}

export default App;