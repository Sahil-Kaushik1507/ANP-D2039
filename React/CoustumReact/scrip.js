
function CreateElement (Element,att,text, parent){
        const newElement= document.createElement(Element);
        newElement.textContent =text
        att.map((val,key)=>{
           console.log(val)
        })
        parent.appendChild(newElement);
        return parent
}


    const parent = document.getElementById('root')

    CreateElement('h1',[{class:"new"}],"Hello World",parent )