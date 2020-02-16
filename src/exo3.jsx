import React, { useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./exos.css"

export default function Exo3() {
    const [span, setSpan] = useState('inconnu')

    function changeNom() {
        let nom = document.getElementById('nom').value
        setSpan(nom)
        document.getElementById('nom').innerHTML = ""
    }
    return (
        <div className="exo1 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-start exo1-1 w-75 p-5 m-5">
                <h2>Welcome {span}</h2>
                <p>Écrire dans l'input ci-dessous le nom de la personne que vous voulez acceuillir lorsque couz cliquez sur le bouton "go" le nom que vous avez ajouté dans l'input sera alors mis dans le spam du h2 et l'input sera alors vidé de tout contenu.</p>
                <p>Attention, interdiction detoucher à l'html</p>
                <div className="d-flex">
                    <input type="text"id='nom'></input>
                    <button onClick={() => changeNom()}>go</button>
                </div>
                
            </div>
        </div> 
    )
}