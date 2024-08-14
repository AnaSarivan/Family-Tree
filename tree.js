// task 1

function getCountDate() {

    const countDate = new Date();
    const day = countDate.getDate();
    const month = countDate.toLocaleString('default', { month: 'long' });
    const year = countDate.getFullYear();
    const dayWeek = countDate.toLocaleString('default', { weekday: 'long' });
    const time = countDate.getHours() + ":" + countDate.getMinutes() + ":" + countDate.getSeconds();

    return `${day} ${month} ${year}, ${dayWeek}<br> ${time}`;

};

function upTime() {
    const display = getCountDate();

    document.getElementById("timeDate").innerHTML = display;
    document.getElementById("timeDate").style = `font-size: 1.8rem;
                                             font-family: 'Sofia', sans-serif;
                                             text-align: center;
                                             padding: 50px;`;
}

setInterval(upTime, 1000); 

// task 2 - Show/Hide “refresh” button

function showBtn(x) {
    button = x.getElementsByClassName("addBtn")[0]
    button.style = `display: block;`
}

function hideBtn(x) {
    button = x.getElementsByClassName("addBtn")[0]
    button.style = `display: none;`
}



// task 3 - Edit (on double click) and Save name
function editName(x) {

    button = x.getElementsByClassName("button")[0];
    button.style = `display: flex;`

    nume = x.getElementsByClassName("nume1")[0]
    nume.contentEditable = true

    nume.style = `font-style: italic;
                  color: yellowgreen;`;

}

function saveName(x) {
    numeElement = x.parentNode.parentNode.getElementsByClassName("nume1")[0];
    button = x.closest(".nume").getElementsByClassName("button")[0];
    numeElement = x.closest(".nume").getElementsByClassName("nume1")[0];

    numeElement.style = `font-style: normal;
                         color: green;`;
    numeElement.contentEditable = false;
    button.style.display = "none";
}

//task 4 - delete name
function clearName(x) {
    deleteText = x.parentNode.parentNode.getElementsByClassName("nume1")[0];  
    deleteText.innerText = "";
    
    nume = x.getElementsByClassName("nume1")[0]
    nume.contentEditable = true

    deleteText.style.display = "inline-block";
    numeElement = x.closest(".nume").getElementsByClassName("nume1")[0];
    numeElement.contentEditable = false;
}

// task 5 - Open modal window and task 6 - Close modal window
const openModal = (check) => {
    const content = document.getElementById("modalPage");
    check ? content.showModal() : content.close();

    content.style.display = check ? "flex" : "none";
}








