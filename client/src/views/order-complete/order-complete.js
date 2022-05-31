import { sidebar } from '../../common/sidebar/sidebar.js'
import { changeNavbar, handleLogoutBtn } from '../../common/navbar/navbar.js';


sidebar();
changeNavbar();
handleLogoutBtn();

const historyBtnElem = document.querySelector("#history-btn");
const continueBtnElem= document.querySelector("#continue-btn");


handleAllEvent();

function handleAllEvent() {
    historyBtnElem.addEventListener("click", ()=>{
        window.location.href="/order/history";
    })
    continueBtnElem.addEventListener("click", ()=>{
        window.location.href="/";
    })
}