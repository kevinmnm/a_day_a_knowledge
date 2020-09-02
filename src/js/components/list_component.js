import AKAD from "../ADAKNotes_revamp.js";
import custom_title, { custome_title_hide } from "../hover_function.js";
import sort from "../sort_function.js";

const templater = `
    <div id='list_wrapper'>
        <div class='list_all'>All Contents
        <div class="fa fa-sort" @click='sort_icon = !sort_icon'></div>
        <div class='sort_by' @click.capture='sort_import($event)' v-show='sort_icon'>
            <div :class='{js_select: js_selected}'>JavaScript</div>
            <div :class='{vue_select: vue_selected}'>Vue</div>
            <div :class='{css_select: css_selected}'>CSS</div>
            <div :class='{react_select: react_selected}'>React</div>
            <div :class='{other_select: other_selected}'>Other</div>
        </div>
        </div>
            <div 
            class='list_block animate__animated animate__flipInY' 
            v-for='(all,ind) in akad' 
            @click='emitter($event)' 
            @mousemove='hover_func($event)'
            @mouseleave='hover_func2($event)'>
                {{ ind + 1 }}
            </div>
    <div id='hover_el'></div>
    </div>
`

export default {
    template: templater,
    data(){
        return {
            akad: AKAD,
            sort_icon: false,
            js_selected: true,
            vue_selected: true,
            css_selected: true,
            react_selected: true,
            other_selected: true
        }
    },
    computed: {
        akad_length(){
            return this.akad.length;
        }
    },
    methods: {
        hover_func(e){
            custom_title(e); //Imported from another file.
        },
        hover_func2(e){ 
            custome_title_hide(e); //Imported from another file.
        },
        emitter(e){ //Emits block's innerHTML number.
            this.$emit('learn-emit', Number(e.target.innerHTML));
        },
        sort_import(e){
            sort(e); //Imported from another file.
        }
    },
    mounted(){
        let list_block = document.querySelectorAll('.list_block');
        for (let i=0; i<this.akad.length; i++) {
            if (this.akad[i].content === 'JS') {
                list_block[i].classList.add('js');
            } else if (this.akad[i].content === 'Vue') {
                list_block[i].classList.add('vue');
            } else if (this.akad[i].content === 'CSS') {
                list_block[i].classList.add('css');
            } else if (this.akad[i].content === 'React') {
               list_block[i].classList.add('react');
            } else if (this.akad[i].content === 'Other') {
               list_block[i].classList.add('other');
            }
        }
    }
}
