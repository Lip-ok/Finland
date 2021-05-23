import './App.css';
import React, {useState} from "react";
import {useHttp} from "./helper/http.hook";

const  App = () => {
    const [inputValue, setInputValue] = useState('')
    const [person, setPerson] = useState([])
    const {request} = useHttp()


    const findPerson = async () => {
        try {
            const data = await request('/api/person/swperson', 'POST', {name: inputValue})
            console.log(data);
            setPerson(data.person)
        } catch (e) {
            console.log(e.message)
        }
    }
    const showPerson = person.map(item => {
        return <div>{item.name}</div>
    })

  return (
    <div className="App">
        <h1>Персонаж из звёзлных воинов </h1>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text"/>
        <button onClick={findPerson}>Поиск</button>
        <div>
            {showPerson}
        </div>
    </div>
  );
}

export default App;
