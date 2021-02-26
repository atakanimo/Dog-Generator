const imgEl = document.querySelector(".fetchPhoto");

class dogApiClass {

    constructor(breed) {
        this.breed = breed;
    }
    async getDogData() {

        const response = await fetch("https://dog.ceo/api/breed/" + this.breed + "/images/random");
        const data = await response.json()
            .then(dogData => {

                imgEl.innerHTML = "";
                imgEl.src = dogData.message;

            })

    }
    async getDogDataRandom() {

        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json()
            .then(dogData => {

                imgEl.innerHTML = "";
                imgEl.src = dogData.message;
            })

    }

    changeBreed(breed) {
        this.breed = breed;
    }



}