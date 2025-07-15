var input = document.getElementById("name");

input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("fetchbtn").click();
  }
});
async function fetchdata(){
    try{
        const pokename=document.getElementById("name").value.toLowerCase();

        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
        if(!response.ok){
            throw new Error("Pokemon not found!");
        }
        const data=await response.json();
        const pokesprite =data.sprites.front_default;
        const imgelement=document.getElementById("sprite");
        imgelement.src=pokesprite;
        imgelement.style.display="block";
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}