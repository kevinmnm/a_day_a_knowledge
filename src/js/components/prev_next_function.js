export function prev_content(e){
    let dv = document.querySelector('.learned_content');
    if (this.parentValue <= 0) {
        dv.classList.remove('animate__bounceInRight');
        return this.parentValue = 0;
    }
    

    if (dv.classList.contains('animate__bounceInRight')) {
        dv.classList.remove('animate__bounceInRight');
    }

    dv.classList.add('animate__bounceOutRight');
    setTimeout(()=>{
        dv.classList.remove('animate__bounceOutRight');
        dv.classList.add('animate__bounceInLeft');
        this.parentValue--;
    },200);
}

export function next_content(e){
    let dv = document.querySelector('.learned_content');
    if (this.parentValue >= this.akad.length - 1) {
        dv.classList.remove('animate__bounceInLeft');
        return this.parentValue = this.akad.length -1;
        
    }
    
    if (dv.classList.contains('animate__bounceInLeft')) {
        dv.classList.remove('animate__bounceInLeft');
    }

    dv.classList.add('animate__bounceOutLeft');
    setTimeout(()=>{
        dv.classList.remove('animate__bounceOutLeft');
        dv.classList.add('animate__bounceInRight');
        this.parentValue++;
    },200);
}