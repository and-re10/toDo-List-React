import React, { useState } from "react"
import "./exos.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"

export default function Exo4() {
    const [position, setPosition] = useState(false)
    let [compt, setCompt] = useState(0) 

    let changement = () => {
        let div_block_1 = document.getElementById('block_1')
        let div_block_2 = document.getElementById('block_2')
        setCompt(compt+=1)
        
        if (position === true) {
            div_block_2.classList = 'd-none'
            div_block_1.classList = 'box-exo4 m-0'
            setPosition(false)
        }
        else {
            div_block_2.classList = 'box-exo4 m-0'
            div_block_1.classList = 'd-none'
            setPosition(true)
        }
        console.log(position)
        document.getElementById('nbClick-exo4').innerHTML = compt
    }

    let bt_del = () => {
        console.log(compt)
        document.getElementById('nbClick-exo4').innerHTML = compt
    }

    return (
        <div className="exo1 d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center exo1-1 w-75 p-5">
            <h2 id="titre">Deplacer les elements</h2>
            <div class="d-flex justify-content-center px-5 m-0 w-100">
                <div class="col-6 d-flex justify-content-center align-items-center rtg1-ex4 m-3" id="rtg-1-ex4">
                    <div id="block_1" class="box-exo4 m-0">

                    </div>
                </div>
                <div class="col-6 d-flex justify-content-center align-items-center rtg2-ex4 m-3" id="rtg-2-ex4">
                    <div id="block_2" class="d-none">

                    </div>
                </div>
            </div>
            <button id="bt-change-exo4" onClick={() => changement()}>Change</button>
            <button class="nbClick-box" onClick={() => bt_del()}>Generer les elements du DOM<span id="nbClick-exo4">0</span></button>
            </div>
        </div>
    )
}