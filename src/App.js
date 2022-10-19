import React from 'react'
import logo from './logo.png';
import './App.css';
import { useState } from 'react'

function App() {
    const [inputsValue, setInputsValue] = useState(["flower","flow","flight"])

    const getCommonPrefix = (arrStr) => {
        let output = ''
        if (arrStr === null || arrStr.lenght === 0) return output
        let minLenght = arrStr[0].length
        for (let i = 1; i < arrStr.length; i++) minLenght = Math.min(minLenght, arrStr[i].length)
        
        for (let i = 0; i< minLenght; i++) {
          let currentChar = arrStr[0][i]
          for (let j = 0; j< arrStr.length; j++) {
            if (arrStr[j][i] !== currentChar) return output
          }
          output += currentChar
        }
        return output
    }

    const addingPositionArrayInput = () => setInputsValue(current => [...current, ''])

    const handleChangeInput = (e, i) => {
        const tempArray = [...inputsValue]
        tempArray[i] = e.target.value
        setInputsValue(tempArray)
    }

    return (
        <div className="app">
            <header>
                <img src={logo} className="logo" alt="logo" />
                <h1>Technical Exercise - Longest Common Prefix</h1>
            </header>
            <div>
                <div>{getCommonPrefix(inputsValue)}</div>
                <div className='row'>
                { inputsValue.map((valueInput, i) => 
                    <div className='col-12' key={i}>
                        <input
                            type="text"
                            id={i}
                            value={valueInput}
                            onChange={e => handleChangeInput(e, i)}
                        />
                    </div>
                )}
                </div>
                <button onClick={addingPositionArrayInput}>Agregar Input</button>
            </div>
        </div>
    );
}

export default App;
