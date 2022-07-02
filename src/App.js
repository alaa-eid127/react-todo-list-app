import './App.css';
import Header from './component/header/Header';
import Form from './component/form/Form';
import { useEffect, useState } from 'react';
import ListItems from './component/listItems/ListItems';
function App() {
  const initialState = JSON.parse(localStorage.getItem('list')) || []
  const [input, setInput] = useState("");
  const [list, setList] = useState(initialState);
  const [edit, setEdit] = useState(null);
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <div className='container'>
      <div className="App">
        <Header />
        <Form
          input={input}
          setInput={setInput}
          list={list}
          setList={setList}
          edit={edit}
          setEdit={setEdit} />
        <ListItems input={input} list={list} setList={setList} setEdit={setEdit} />
      </div>
    </div>


  );
}

export default App;
