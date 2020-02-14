import React, { useState} from "react"

import "./exos.css"

export default function Exo1() {
    const [verify, setVerify] = useState(false)
    
    function verifier() {
        if(verify == true) {
            setVerify(false)
            let h2_exo1 = document.getElementById('titre')

            h2_exo1.innerHTML = 'Le titre modifie'
            h2_exo1.style.color = "yellow"
            h2_exo1.classList.add('bg-danger')
        }
        else {
            setVerify(true)
            let h2_exo1 = document.getElementById('titre')

            h2_exo1.innerHTML = 'Mon titre modifie'
            h2_exo1.style.color = "white"
            h2_exo1.classList.remove('bg-danger')
        }
    }

    return (
        <>
            <div id='div-exo1' className="exo1 d-flex align-items-center justify-content-center">
                <div onClick ={() => verifier()} className="d-flex flex-column align-items-start exo1-1 w-75 p-5 m-5">
                    <h2 id="titre">Mon titre modifie</h2>
                    <p>Liste de propriété et méthodes a retrouver dans la documentation:</p>
                    <ul>
                        <li>InnerText</li>
                        <li>InnerHtml</li>
                        <li>querySelector()</li>
                        <li>querySelectorAll()</li>
                        <li>style</li>
                        <li>classList</li>
                    </ul>
                    <p>Changer le contenu du h2 par "le titre modifié"</p>
                    <p>Changer la couleur du h2 (la couleur que vous coulez)</p>
                    <p>Ajouter une class background boostrap au h2</p>
                </div>
            </div> 
        </>
    )
}