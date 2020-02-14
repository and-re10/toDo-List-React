import React, { useState } from "react"
import "./exos.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"

export default function Exo6() {
    const [result1,setResult1] = useState("Resultat")

    //Niveau 1 
    // let nb1 = document.getElementById('nb_1_exo6')
    // let nb2 = document.getElementById('nb_2_exo6')
    // let sel = document.getElementById('sel-exo6')
    // let resultat = document.getElementById('resultat')

    // //niveau 2
    // let i = false;
    // let reponse_n2 = document.getElementById('rep-n2-exo6')
    // let bt_egal = document.getElementById('')
    // let valeur
    // let reset
    // let calcule
    // let resultatTotal

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

    // //Niveau 2
    // window.valeur = (num) => {
    //     if(i === true){
    //         reponse_n2.value = "";
    //     }
    //     reponse_n2.value += num;
    //     i = false;
    // }

    // window.reset = () => {
    //     // codigo para limpar o visor
    //     reponse_n2.value = " ";
    // }

    // window.calcule = (num) => {
    //     // codigo para calcular o visor
    //     // pegar o valor do visor como variavel
    //     // fazer o calculo: eval
    //     // pegar o resultado e colocar no visor 
    //     //resultado = eval ("254 + 257");
    //     resultatTotal = eval(reponse_n2.value)
    //     reponse_n2.value = resultatTotal;
    //     i = true

    // }

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
                <h3>Niveau 2</h3>
                <div className="calculatrice d-flex justify-content-center align-items-center flex-column m-0">
                    <input type="text" name="" className="resposta" id="rep-n2-exo6"></input>
                    <div className="row1 mt-5 mb-2 mx-2">
                        <input type="button" name="" className="cal mx-1" value="7" onclick="valeur(value)"></input>
                        <input type="button" name="" className="cal mx-1" value="8" onclick="valeur(value)"></input>
                        <input type="button" name="" className="cal mx-1" value="9" onclick="valeur(value)"></input>
                        <input type="button" name="" className="cal mx-1" value="/" onclick="valeur(value)"></input>
                    </div>
                    <div className="row1 m-2">
                        <input type="button" name="" className="cal mx-1" value="4" onclick="valeur(value)"></input>
                        <input type="button" name="" className="cal mx-1" value="5" onclick="valeur(value)"></input>
                        <input type="button" name="" className="cal mx-1" value="6" onclick="valeur(value)"></input>
                        <input type="button" name="" className="cal mx-1" value="*" onclick="valeur(value)"></input>
                    </div>
                    <div className="row1 m-2">
                        <input type="button" name="" className="cal mx-1" value="1" onclick="valeur(value)"></input>
                        <input type="button" name="" className="cal mx-1" value="2" onclick="valeur(value)"></input>
                        <input type="button" name="" className="cal mx-1" value="3" onclick="valeur(value)"></input>
                        <input type="button" name="" className="cal mx-1" value="-" onclick="valeur(value)"></input>
                    </div>
                    <div className="row1 m-2">
                        <input type="button" name="" className="cal mx-1" value="0" onclick="valeur(value)"></input>
                        <input type="button" name="" className="cal mx-1" value="=" onclick="calcule(value)"></input>
                        <input type="button" name="" className="cal mx-1" value="C" onclick="reset()"></input>
                        <input type="button" name="" className="cal mx-1" value="+" onclick="valeur(value)"></input>
                    </div>
                </div>
            </div>
        </div> 
    )
}