import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import './PasswordGenerator.css';



function PasswordGenerator() {


    const [password, setPassword] = useState('');
    const [copySuccess, setCopySuccess] = useState('');
    const [passwordLength, setPasswordLength] = useState(8);
    const [passwordStrength, setPasswordStrength] = useState('');
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    const assessStrength = (length) => {
        if (length < 8) return 'Weak';
        if (length <= 12) return 'Optimal';
        return 'Strong';
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(password);
            setCopySuccess('Copied!');
            setTimeout(() => setCopySuccess(''), 1000);
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };

    const handleSliderChange = (e) => {
        const newLength = e.target.value;
        setPasswordLength(newLength);
        setPasswordStrength(assessStrength(newLength));
    };

    const generatePassword = () => {
        const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+=-[]{}|;:",.<>?';

        let validChars = '';
        if (includeLowercase) {
            validChars += lowerCaseLetters;
        }
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
            <div className="password-output">
                <input
                    type="text"
                    value={password}
                    readOnly
                    className="generator-input"
                />
                {
                     copySuccess === 'Copied!' ? (
                        <button className="copy-button" disabled>
                          {copySuccess}
                        </button>
                      ) : (
                    <button onClick={handleCopy} className="copy-button">
                        <FontAwesomeIcon icon={faClone} className="icon-button" />
                        Copy
                    </button>
                        )
                }
                
            </div>

            <div className="password-strength">{passwordStrength}</div>

            <div className="options">
                <div className="option">
                    <label>
                        <input
                            type="checkbox"
                            checked={includeLowercase}
                            onChange={(e) => setIncludeLowercase(e.target.checked)}
                        />
                        Lowercase
                    </label>
                </div>
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

                <div className="password-length">Password Length: {passwordLength}</div>
                <input
                    className="range-slider"
                    type="range"
                    min="4"
                    max="20"
                    value={passwordLength}
                    onChange={handleSliderChange}
                />
            </div>
            <button onClick={generatePassword} className="refresh-button">Generate</button>
        </div>

    );
}

export default PasswordGenerator;
