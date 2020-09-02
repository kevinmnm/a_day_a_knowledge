export default function sort(e) {
   let x = e.target;
   let blocks = document.querySelectorAll('.list_block');
   let js_blocks = document.querySelectorAll('.js');
   let vue_blocks = document.querySelectorAll('.vue');
   let css_blocks = document.querySelectorAll('.css');
   let react_blocks = document.querySelectorAll('.react');
   let other_blocks = document.querySelectorAll('.other');

   blocks.forEach(item => {
       item.addEventListener('animationend', () => {
           for (let z of blocks) {
               z.classList.remove('animate__flipInY');
               z.classList.remove('animate__flipOutY');
           }
       });
   });

   // blocks.addEventListener('animationend',()=>{
   //     for (let z of blocks){ 
   //         z.classList.remove('animate__flipInY');
   //         z.classList.remove('animate__flipOutY');
   //     }
   // });

   if (x.innerHTML === 'JavaScript') { //Toggle js.
       this.js_selected = !this.js_selected; //Remove shining class.
       if (this.js_selected) {
           for (let y of js_blocks) {
               y.style.display = 'block';
               y.classList.add('animate__flipInY');
           }
       } else {
           for (let y of js_blocks) {
               y.classList.add('animate__flipOutY');
               y.style.display = 'none';
           }
       }
   } else if (x.innerHTML === 'Vue') { //Toggle vue.
       this.vue_selected = !this.vue_selected; //Remove shining class.
       if (this.vue_selected) {
           for (let y of vue_blocks) {
               y.style.display = 'block';
           }
       } else {
           for (let y of vue_blocks) {
               y.style.display = 'none';
           }
       }
   } else if (x.innerHTML === 'CSS') { //Toggle css.
       this.css_selected = !this.css_selected; //Remove shining class.
       if (this.css_selected) {
           for (let y of css_blocks) {
               y.style.display = 'block';
           }
       } else {
           for (let y of css_blocks) {
               y.style.display = 'none';
           }
       }
   } else if (x.innerHTML === 'React') { //Toggle css.
       this.react_selected = !this.react_selected; //Remove shining class.
       if (this.react_selected) {
           for (let y of css_blocks) {
               y.style.display = 'block';
           }
       } else {
           for (let y of react_blocks) {
               y.style.display = 'none';
           }
       }
   } else if (x.innerHTML === 'Other') { //Toggle css.
       this.other_selected = !this.other_selected; //Remove shining class.
       if (this.other_selected) {
           for (let y of other_blocks) {
               y.style.display = 'block';
           }
       } else {
           for (let y of other_blocks) {
               y.style.display = 'none';
           }
       }
   }
}