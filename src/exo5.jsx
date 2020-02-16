import React, { useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./exos.css"
import logo from "./logo.svg"

export default function Exo5() {
    let [compt, setCompt] = useState(0)

    // let div_2_img = document.createElement('div')
    // div_2_img.classList = 'row w-100 m-0 p-0'
    // div_2_img.setAttribute('id', "div-imgEx4")

    let ajout_img = () => {
        let div_exo5 = document.getElementById('div-img-exo5')

        let img = document.createElement('img')
        img.src = "./pintainho.jpg"
        img.classList = 'col-1 m-0 p-0 App-logo'
        div_exo5.appendChild(img)
        setCompt(compt+=1)
    }

    let efface_last = () => {
        let div_exo5 = document.getElementById('div-img-exo5')
        
        if (compt > 0) {
            div_exo5.removeChild(div_exo5.lastChild)
            setCompt(compt-=1)
        }
    }

    let efface_all = () => {
        let div_exo5 = document.getElementById('div-img-exo5')

        if (compt > 0) {
            for (let i = 0; i < compt; i++) {
                div_exo5.removeChild(div_exo5.lastChild)
            }
            setCompt(0)
        }
    }

    return (
        <div className="exo1 d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center exo1-1 w-75 p-5 m-5">
                <h2 id="titre">Mon titre modifie</h2>
                <p>Liste de proprietes et methodes a retrouver dans la documentation</p>
                <div>
                    <button id="bt-rajout-exo5" onClick={() => ajout_img()}>Nouveau</button>
                    <button id="bt-last-exo5" onClick={() => efface_last()}>Effacer dernier</button>
                    <button id="bt-all-exo5" onClick={() => efface_all()}>Effacer tout</button>
                    <button>{compt}</button>
                </div>
                <div id="div-img-exo5" className="row w-100 m-0 p-0">

        
                </div>
            </div>
        </div> 
    )
}