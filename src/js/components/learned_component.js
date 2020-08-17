import AKAD from "../ADAKNotes_revamp.js";
import { prev_content, next_content } from "./prev_next_function.js";

const templater = `
    <div class='learned_section animate__animated'>

        <div class='learned_previous' @click='prev($event)'>
            <div class='fa fa-chevron-circle-left'></div>
        </div>
    
        <div class='learned_content'>
            <code class='date'>{{ akad[pv_new].date }}</code>
            <div class='title'><u>{{ akad[pv_new].topic }}</u></div>
            <div class='description'>{{ akad[pv_new].description }}</div>
            <div class='reference'>
                <a :href="akad[pv_new].referenceLink1" target='_blank'>Link1</a>
                <a :href="akad[pv_new].referenceLink2" target='_blacnk'>Link2</a>
            </div>
            <div class='example'>
                <div class='embed' 
                v-html='akad[pv_new].codepenEmbed'>
                </div>
            </div>
        </div>
    
        <div class='learned_next' @click='next($event)'>
            <div class='fa fa-chevron-circle-right'></div>
        </div>

    </div>
`

export default {
    template: templater,
    props: ['parent-value'],
    data(){
        return {
            akad: AKAD,
        }
    },
    computed: {
        pv_new(){
            return this.parentValue
        }
    },
    methods: {
        prev: prev_content,
        next: next_content
    }
}