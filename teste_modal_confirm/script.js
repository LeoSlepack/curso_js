const openModalButton = document.querySelector("#open-modal1");
const closeModalButton = document.querySelector("#close-modal1");
const modal = document.querySelector("#modal1");
const fade = document.querySelector("#fade1");


const toggleModal = () => {
    [modal1,fade1].forEach((el) => el.classList.toggle("hide"));
};

/*------------------------------------*/



