let myLeads = []
/*myLeads = jsons.stringfy(myLeads)//for converting string into array we can use json.parse()*/
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

tabBtn.addEventListener("click",function(){
    
})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    renderLeads()
})

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value= ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()
})

function renderLeads() {
    let listElements = ""
    for (let i = 0; i < myLeads.length; i++) {
    listElements += `
        <li>
            <a href="${myLeads[i]}" target="_blank">
                 ${myLeads[i]} 
            </a>
        </li>`
 }
ulEl.innerHTML = listElements
}