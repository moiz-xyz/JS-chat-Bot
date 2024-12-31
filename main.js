let useer_input = document.getElementById("prompt");
useer_input.addEventListener("keydown" , (e) => {
    if (e.key === "Enter"){
        console.log(useer_input.value);
        
    }
    
} )