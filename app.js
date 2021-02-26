const randomButton = document.querySelector("#randomButton");
const select = document.querySelector("#selectFeeds");
const dogApi = new dogApiClass();

eventListeners();


function eventListeners() {

    randomButton.addEventListener("click",getDataRandom);
    select.onchange = function getDatabyBreed() {

        const breed = select.options[select.selectedIndex].textContent;
        console.log(breed);
        dogApi.changeBreed(breed);
        dogApi.getDogData();
    }
    
}
function getDataRandom() {
    dogApi.getDogDataRandom();
}





