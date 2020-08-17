import months_2020 from "./months_2020.js"
import AKAD from "../ADAKNotes_revamp.js";




const template = `
    <div id='calendar_wrapper'>
        <div class='month' @click.stop='show_str = !show_str'>
            <div class='fa fa-arrow-left prevM' @click.stop='changeM($event)'></div>
            <div v-if='show_str'>{{ month[index].string }}</div>
            <div v-else>{{ month[index].integer }}</div>
            <div class='fa fa-arrow-right nextM' @click.stop='changeM($event)'></div>
        </div>
        <div id='date_wrapper'>
            <div class='days' v-for='all in daysDiv'>{{ all }}</div>
        </div>
    </div>
`;

export default {
    template: template,
    data(){
        return {
            akad: AKAD,
            month: months_2020,
            index: 6,
            show_str: true,
            daysDiv: []
        }
    },
    methods: {
        changeM(e){ //Triggers watch index() function.
            if (e.target.classList.contains('prevM')) {
                this.index !== 0 ? this.index-- : this.index = 11;
            } else {
                this.index !== 11 ? this.index++ : this.index = 0;
            }
        },
        generateDays(){ //Declared here for calling purpose only.
            this.daysDiv = [];
            for (let i=0; i<this.month[this.index].days; i++) {
                this.daysDiv.push(i+1);
            }
            this.generateColor();
        },
        generateColor(){ //Decared to be called in generateDays().
            let a = this.daysDiv.length;
            let b = this.akad;
            let c = this.index;
            for (let i=0; i<a; i++) {
                if (b[i].uniqueIdMatch.substring(0, 2) === 'z'+(c+1)) { 
                    if (b[i].content === 'JS') {
                        document.querySelectorAll('.days')[i].style.backgroundColor = 'yellow';
                    }
                }
            }
        }
    },
    watch: {
        index(){   
            this.generateDays();
        }
    },
    mounted(){
        //this.generateDays();
    }
    
}





//export default calendar_component