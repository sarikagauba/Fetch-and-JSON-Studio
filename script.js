// TODO: add code here
// TODO: add code here
window.addEventListener("load", function(){


    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
   response.json().then(function(json) {
    console.log(json);
    for(let i = 0; i < json.length; i++) {
    div = document.getElementById("container");
    elem = document.createElement("div");
   

     elem.innerHTML = `
     <div class = "astronaut">
        <h3>Name :${json[i].firstName}</h3>
        <ul>
           <li>Hours in space:${json[i].hoursInSpace} </li>
           <li>Active:${json[i].active} </li>
           <li>Skills: ${json[i].skills}</li>
        </ul>
        <img src=${json[i].picture} class = "avatar">
        </div>
     
`;
        div.appendChild(elem);
    }
   });
});




  });
