const playerArray =[];

function player(selectedPlayer){

    const ol_list  = document.getElementById('select_player');
    ol_list.innerHTML ="";

    for(let i=0; i<playerArray.length<5; i++){
        // console.log(playerArray[i].playerName);
        
        const name = playerArray[i].playerName;

        const ol = document.createElement("p");

        ol.innerHTML =`
        <p>${i+1}. ${name}</p>
        `;
        ol_list.appendChild(ol);
    }
};

function addToSelected(element){

    const playerName = element.parentNode.children[0].innerText;

    element.style.backgroundColor = '#CFCFCF';
    element.innerText = "SELECTED";
    element.setAttribute("disabled", true);

    const playerObj = {
        playerName: playerName,
    };

    // console.log(playerName);
    
    // console.log(playerArray.length);

    if(playerArray.length<5){
        playerArray.push(playerObj);
        document.getElementById('selected').innerText = playerArray.length;
    }
    else{
        alert("Already Selected Your Best Five!!!!");
    }

    player(playerArray);
};