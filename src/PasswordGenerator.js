import React, { useState } from 'react';
import './PasswordGenerator.css';

function PasswordGenerator() {
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(8);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    const generatePassword = () => {
        const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+=-[]{}|;:",.<>?';

        let validChars = lowerCaseLetters;
        if (includeUppercase) {
            validChars += upperCaseLetters;
        }
        if (includeNumbers) {
            validChars += numbers;
        }
        if (includeSymbols) {
            validChars += symbols;
        }

        let generatedPassword = '';
        for (let i = 0; i < passwordLength; i++) {
            const index = Math.floor(Math.random() * validChars.length);
            generatedPassword += validChars[index];
        }
        setPassword(generatedPassword);
    };

    return (
        <div className="generator-container">
            <div className="generator-header">PASSWORD GENERATOR</div>
            <input
                type="text"
                value={password}
                readOnly
                className="generator-input"
            />
            <button onClick={generatePassword} className="refresh-button">Generate</button>
            <div className="options">
                <div className="option">
                    <label>
                        <input
                            type="checkbox"
                            checked={includeUppercase}
                            onChange={(e) => setIncludeUppercase(e.target.checked)}
                        />
                        Uppercase
                    </label>
                </div>
                <div className="option">
                    <label>
                        <input
                            type="checkbox"
                            checked={includeNumbers}
                            onChange={(e) => setIncludeNumbers(e.target.checked)}
                        />
                        Numbers
                    </label>
                </div>
                <div className="option">
                    <label>
                        <input
                            type="checkbox"
                            checked={includeSymbols}
                            onChange={(e) => setIncludeSymbols(e.target.checked)}
                        />
                        Special Characters
                    </label>
                </div>
                <input
                    className="range-slider"
                    type="range"
                    min="4"
                    max="20"
                    value={passwordLength}
                    onChange={(e) => setPasswordLength(e.target.value)}
                />
            </div>
            <button className="copy-button">Copy</button>
        </div>
    );
}

export default PasswordGenerator;
