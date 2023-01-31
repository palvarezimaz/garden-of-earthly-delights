import React from "react";
import { useState } from "react"
import * as Styled from "./styled"
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function RomanToNumeral() {
    const [number, setNumber] = useState(null);
    const [correct, setCorrect] = useState('');
    const [convertedNumber, setConvertedNumber] = useState('');




    const checkRoman = (event) => {
        const number = (event.target.value).toUpperCase();
        const romanNumeralRegex = new RegExp(
            /^M{0,9}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
        );
        console.log(number)

        if (!romanNumeralRegex.test(number)) {
            setCorrect('The number is not a Real-Roman')
            setConvertedNumber(null)
        } else if (number === '') {
            setCorrect('')
            setConvertedNumber('')
        } else {
            setCorrect('Analizing... Computing... Your number is:')
            numberConversion(number)
        }
    }

    const numberConversion = (number) => {
        let result = 0;
        const romansToNumbers = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        };
        const romanArray = number.split('')


        for (let i = 0; i < romanArray.length; i++) {
            if (
                romansToNumbers[romanArray[i + 1]] > romansToNumbers[romanArray[i]]
            ) {
                result +=
                    romansToNumbers[romanArray[i + 1]] - romansToNumbers[romanArray[i]];
                i++;
            } else {
                result += romansToNumbers[romanArray[i]];
            }
            setConvertedNumber(result)
        }
    }


    return (
        <Styled.Container>
            <h1>Welcome to the Roman to Arabic number converter</h1>
            <fieldset>

                <Input
                    labelName="Roman number to convert:"
                    type="text"
                    className="number-input"
                    value={number}
                    onChange={checkRoman} />
            </fieldset>
            <fieldset>
                <p>{correct}</p>

                <p>{convertedNumber}</p>
            </fieldset>
            {/* <button onClick={NumeralToRoman}>Romanize!</button> */}
            <Button
                to="/"
                value="Back to home"
                width="200px">
            </Button>
        </Styled.Container>
    );
}
