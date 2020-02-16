import React, { useState, useEffect } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./exos.css"

export default function Exo6() {
    const [result1, setResult1] = useState("Resultat")
    const [result2, setResult2] = useState("")
    const [verf, setVerf] = useState(false)

    //Niveau 1
    let niveau1 = () => {
        let nb1 = document.getElementById('nb_1_exo6')
        let nb2 = document.getElementById('nb_2_exo6')
        let sel = document.getElementById('sel-exo6')
        switch (sel.value) {
            case '+':
                setResult1(parseFloat(nb1.value) + parseFloat(nb2.value)) 
                break
            case '-':
                setResult1(parseFloat(nb1.value) - parseFloat(nb2.value)) 
                break
            case '*':
                setResult1(parseFloat(nb1.value) * parseFloat(nb2.value)) 
                break
            case '/':
                setResult1(parseFloat(nb1.value) / parseFloat(nb2.value)) 
                break
        }
    }

    //Niveau 2
    let valeur = (num) => {
        console.log(verf)
        if(verf === true) {
            switch(num) {
                case "/":
                    setResult2(result2 + num)
                    break
                case "*":
                    setResult2(result2 + num)
                    break
                case "-":
                    setResult2(result2 + num)
                    break
                case "+":
                    setResult2(result2 + num)
                    break
                default:
                    setResult2(num)
                    break
            }
        }
        else {
            console.log(result2)
            setResult2(result2 + num)
            console.log(result2)
        }
        setVerf(false)
    }

    let reset = () => {
        // codigo para limpar o visor
        setResult2('')
    }

    let calcule = () => {
        let resultatTotal
        // codigo para calcular o visor
        // pegar o valor do visor como variavel
        // fazer o calculo: eval
        // pegar o resultado e colocar no visor 
        //resultado = eval ("254 + 257");
        let reponse_n2 = document.getElementById('rep-n2-exo6')
        resultatTotal = eval(reponse_n2.value)
        setResult2(resultatTotal);
        setVerf(true)
        console.log(verf)
    }

    return (
        <div className="exo1 d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center exo1-1 w-75 p-5 m-5"> 
                <h2>Exo 6</h2>
                <h2 id="titre">Creation calculatrice</h2>
                <h3>Niveau 1</h3>
                <div className="row">
                    <input type="text" name="" id="nb_1_exo6"></input>
                    <select name="" id="sel-exo6">
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="/">/</option>
                        <option value="*">*</option>
                    </select>
                    <input type="text" name="" id="nb_2_exo6"></input>
                    <button id="egal" onClick={() => niveau1()}>=</button>
                    <button id="resultat">{result1}</button>
                </div>
                {/* Exo 6 Niveau 2 */}
                <h3>Niveau 2</h3>
                <div className="calculatrice d-flex justify-content-center align-items-center flex-column m-0">
                <input type="text" name="" className="resposta" value={result2} id="rep-n2-exo6"></input>
                    <div className="row1 mt-5 mb-2 mx-2">
                        <input type="button" id="bt-exo6B7" name="" className="cal mx-1" value="7" onClick={() => valeur(document.getElementById('bt-exo6B7').value)}></input>
                        <input type="button" id="bt-exo6B8" name="" className="cal mx-1" value="8" onClick={() => valeur(document.getElementById('bt-exo6B8').value)}></input>
                        <input type="button" id="bt-exo6B9" name="" className="cal mx-1" value="9" onClick={() => valeur(document.getElementById('bt-exo6B9').value)}></input>
                        <input type="button" id="bt-exo6B/" name="" className="cal mx-1" value="/" onClick={() => valeur(document.getElementById('bt-exo6B/').value)}></input>
                    </div>
                    <div className="row1 m-2">
                        <input type="button" id="bt-exo6B4" name="" className="cal mx-1" value="4" onClick={() => valeur(document.getElementById('bt-exo6B4').value)}></input>
                        <input type="button" id="bt-exo6B5" name="" className="cal mx-1" value="5" onClick={() => valeur(document.getElementById('bt-exo6B5').value)}></input>
                        <input type="button" id="bt-exo6B6" name="" className="cal mx-1" value="6" onClick={() => valeur(document.getElementById('bt-exo6B6').value)}></input>
                        <input type="button" id="bt-exo6B*" name="" className="cal mx-1" value="*" onClick={() => valeur(document.getElementById('bt-exo6B*').value)}></input>
                    </div>
                    <div className="row1 m-2">
                        <input type="button" id="bt-exo6B1" name="" className="cal mx-1" value="1" onClick={() => valeur(document.getElementById('bt-exo6B1').value)}></input>
                        <input type="button" id="bt-exo6B2" name="" className="cal mx-1" value="2" onClick={() => valeur(document.getElementById('bt-exo6B2').value)}></input>
                        <input type="button" id="bt-exo6B3" name="" className="cal mx-1" value="3" onClick={() => valeur(document.getElementById('bt-exo6B3').value)}></input>
                        <input type="button" id="bt-exo6B-" name="" className="cal mx-1" value="-" onClick={() => valeur(document.getElementById('bt-exo6B-').value)}></input>
                    </div>
                    <div className="row1 m-2">
                        <input type="button" id="bt-exo6B0" name="" className="cal mx-1" value="0" onClick={() => valeur(document.getElementById('bt-exo6B0').value)}></input>
                        <input type="button" name="" className="cal mx-1" value="=" onClick={() => calcule()}></input>
                        <input type="button" name="" className="cal mx-1" value="C" onClick={() => reset()}></input>
                        <input type="button" id="bt-exo6B+" name="" className="cal mx-1" value="+" onClick={() => valeur(document.getElementById('bt-exo6B+').value)}></input>
                    </div>
                </div>
            </div>
        </div> 
    )
}