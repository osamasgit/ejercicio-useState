import './App.css'
import { useState } from 'react'


function App() {
    const [name, setName] = useState('Sofia')
    const [newName, setNewName] = useState('')

    return (
        <div>
        <h2>Teacher Name: {name}</h2>
        <ul>
            <li onClick={() => setName('Data')}>Data</li>
            <li onClick={() => setName('Reyes')}>Reyes</li>
            <li onClick={() => setName('Yolanda')}>Yolanda</li>
        </ul>
        </div>
    );
}

export default App
