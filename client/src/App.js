import './App.css';
import React, {useState} from "react";
import {useHttp} from "./helper/http.hook";

const  App = () => {
    const [inputValue, setInputValue] = useState('')
    const {request} = useHttp()

    // const changePerson = (e) => {
    //     console.log(e.target.value)
    // }

    const setPerson = async () => {
        try {
            const data = await request('/api/person/swperson', 'POST', {name: 'Darth Vader'})
            console.log(data);

        } catch (e) {
            console.log(e.message)
        }
    }
  return (
    <div className="App">
        <h1>Персонаж из звёзлных воинов </h1>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text"/>
        <button onClick={setPerson}>Поиск</button>

    </div>
  );
}

export default App;
