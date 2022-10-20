import React, { useState, useCallback } from 'react'
import logo from './logo.png';
import './App.css';

function App() {
    const [word, setWord] = useState("");
    const [words, setWords] = useState([]);

    const updateWords = useCallback(
        (value) => {
            setWords([...words, value]);
        },
        [words]
    );

    const handleClick = () => {
        updateWords(word)
        document.getElementById('input').value = "";
    };

    let longestCommonPrefix = function (strs) {
        if (strs.length === 0) {
            return '';
        }

        const first = strs[0];
        let response = '';
        let prefix = '';

        for (let i = 0; i < first.length; i++) {
            prefix += first[i];
            // eslint-disable-next-line no-loop-func
            let find = strs.filter(s => s.startsWith(prefix));
            if (find.length === strs.length) {
                response = prefix;
            }
        }
        return response;
    }

    return (
        <div className="app">
            <header>
                <img src={logo} className="logo" alt="logo" />
                <h1>Technical Exercise - Longest Common Prefix</h1>
            </header>
            <body>
                <input type="text" id='input' onChange={(e) => setWord(e.target.value)} />
                <button onClick={handleClick}>Save</button>
                <h1>{longestCommonPrefix(words)}</h1>
            </body>
        </div>
    );
}

export default App;
