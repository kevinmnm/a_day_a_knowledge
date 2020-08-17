import AKAD from "./ADAKNotes_revamp.js";

export default function custom_title(e){
    let el = document.querySelector('#hover_el');

    el.style.display = 'block';
    el.style.top = e.pageY - 50 + 'px';
    el.style.left = e.pageX - 200 + 'px';

    el.innerHTML = AKAD[Number(e.target.innerHTML)-1].topic;
}

export function custome_title_hide(e){
    let el = document.querySelector('#hover_el');
    el.style.display = 'none';
}

