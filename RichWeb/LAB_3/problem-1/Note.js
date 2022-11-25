let Buttons = document.createElement("button1")
rxjs.fromEvent(Buttons, 'click')
.subscribe(() => addElement()
);
function addElement () {
    // create a new div element
    let newtextArea = document.createElement("textarea")
  

    // and give it some content
    // const newContent = document.createTextNode("Hi there and greetings!");
    let texting = document.getElementById("texting").value
    console.log(texting)
    
    // add the text node to the newly created div and style 
    newtextArea.innerHTML=texting;
    newtextArea.style.border="2px solid black"
    newtextArea.style.width="15%"
    newtextArea.style.padding="5px"
    
    // add the delete node to the newly created newtextArea and function 
    let Ndelete = document.createElement("button");
    // Ndelete.onclick=()=>{newtextArea.remove(); colourTag.remove(); colorChange.remove(); Ndelete.remove();}
    rxjs.fromEvent(Ndelete, 'click')
    .subscribe(() => delleting()
    );
    Ndelete.innerHTML="Delete"
    Ndelete.style.display="block"

    let colourTag = document.createElement("input")
    colourTag.type="color"
    
    colourTag.style.display="block"

    let colorChange = document.createElement("button")
    colorChange.innerHTML="Change Colour"
    //colorChange.onclick=()=>{newtextArea.style.backgroundColor=colourTag.value;}
    rxjs.fromEvent(colorChange, 'click')
    .subscribe(() => cwolower()
    );


    let breaker = document.createElement("br")
    let breaker1 = document.createElement("br")

    // add the newly created elements and its content into the DOM
    const currentDiv = document.getElementById("printSpace")
    document.body.insertBefore(newtextArea, currentDiv)
    document.body.after(Ndelete, newtextArea)
    document.body.after(colourTag, newtextArea)
    document.body.after(colorChange, colourTag)
    document.body.after(breaker,colorChange)
    document.body.after(breaker1,breaker)
    
    function delleting () {
        // 
        newtextArea.remove(); colourTag.remove(); colorChange.remove(); Ndelete.remove();
    }
    function cwolower () {
        // 
        newtextArea.style.backgroundColor=colourTag.value;
    }
}

