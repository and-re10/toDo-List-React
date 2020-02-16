import React, { useState, useEffect } from "react"
import "./exos.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"

export default function Exo7_2() {

    let addList =()=>{
        let reponse = document.getElementById('error')
        let inpToDoList = document.getElementById("inpToDoList");
        let toDoList = document.getElementById("toDo");
        let toDo=document.getElementById("btnToDo");
        let done=document.getElementById("btnDone");
        let all=document.getElementById("btnAll");
        //creation paragraphe + checkbox
        if(inpToDoList.value !== ""){
            
            //partie de style
            inpToDoList.classList.remove("error")
            reponse.classList.remove("error1")
            reponse.innerHTML = ""

            //partie de creation dans le html
            //cretion de la div avecun checkbox, un span et un button comme contenu

            let ligne= document.createElement("div")
            ligne.classList = "w-100 my-2 p-2 mx-0 d-flex justify-content-between align-items-center"
            ligne.classList.add("toDo");
            ligne.style.backgroundColor = "blue"
               
            toDoList.appendChild(ligne)
            arrayToDoList.push(ligne)

            let check = document.createElement("input");
            check.type = "checkbox";

            let para = document.createElement("p");
            para.classList.add('m-0')
            para.innerHTML = inpToDoList.value;
            para.style.fontWeight = "bolder"
            inpToDoList.value= "";
            
            ligne.appendChild(check);
            ligne.appendChild(para);    
            //checkbox
            check.onclick=()=>{
                if(check.checked){
                    ligne.classList.remove("toDo")
                    ligne.classList.add("done")
                    ligne.style.backgroundColor = "green"
                } else {
                    ligne.classList.remove("done");
                    ligne.classList.add("toDo");
                    ligne.style.backgroundColor = "blue"
                }
            }
            //creation button delete
            let btnDelet = document.createElement("button");
            btnDelet.innerHTML= "x";
            ligne.appendChild(btnDelet)
    
            btnDelet.onclick =()=>{
                btnDelet.parentNode.remove()
            }
            //creation button modifier
            let modif=document.createElement("button");
            modif.innerHTML="Edit";
            ligne.appendChild(modif);
            let inp=document.createElement("input");
    
            modif.onclick=()=>{
                ligne.replaceChild(inp,para)
                inp.defaultValue = para.innerHTML;
                
            }
    
            inp.onkeyup=(e)=>{
                if(e.keyCode ===13){
                    para.innerHTML= inp.value;
                    ligne.replaceChild(para,inp)
                }
            }
            
            toDo.onclick =()=>{
                for(let i = 0; i<arrayToDoList.length; i++){
                    if(arrayToDoList[i].classList.contains("done")){
                        arrayToDoList[i].classList.remove("d-flex");
                        arrayToDoList[i].classList.add("d-none");
                    }else {
                        arrayToDoList[i].classList.add("d-flex");
                        arrayToDoList[i].classList.remove("d-none");
                    }
                }
                    
            }
            done.onclick =()=>{
                for(let i = 0; i<arrayToDoList.length; i++){
                    if(arrayToDoList[i].classList.contains("toDo")){
                        arrayToDoList[i].classList.remove("d-flex");
                        arrayToDoList[i].classList.add("d-none");
            
                    }else {
                        arrayToDoList[i].classList.add("d-flex");
                        arrayToDoList[i].classList.remove("d-none");
                    }
                }
            } 
            all.onclick =()=>{
                for(let i=0; i<arrayToDoList.length; i++){
                    arrayToDoList[i].classList.remove("d-none");
                    arrayToDoList[i].classList.add("d-flex");
                }
            }
        }  
        else {
            reponse.style.color = "red"
            reponse.innerHTML = "ERROR"
            inpToDoList.classList = "error"
            inpToDoList.classList = "error1"
        } 
        inpToDoList.value = ""
    }

let arrayToDoList=[]

    return(
        <div className="exo1 d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column justify-content-center align-items-center exo1-1 w-75 p-5 m-5"> 
                <p id="error"></p>
                <input onKeyUp={(e) => {
                    if (e.keyCode === 13) {
                        addList()
                    }
                }} type="text" className="w-75" id="inpToDoList" />
            
                <div className="d-flex justify-content-center  row mb-5">
                    <button  className="btnToDoList m-2" id="btnAll">All</button>
                    <button  className="btnToDoList m-2" id="btnToDo">To Do</button>
                    <button  className="btnToDoList m-2" id="btnDone">Done</button>
                </div>

                <div id="toDo" className="w-75">
                
                </div>
            </div>
        </div>
    )
}