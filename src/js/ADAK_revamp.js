
import calendar_component from "./components/calendar_component.js";
//import AKAD from "./ADAKNotes_revamp.js";
import list_component from "./components/list_component.js";
import learned_component from "./components/learned_component.js";





const AKAD_app = new Vue({
    el: "#app",
    data: {
        show_list_comp: true,
        show_learned_comp: false,
        value_passer: null
    },
    methods: {
        learned_data($dat){ //Catch emitted data
            this.show_learned_comp = true;
            this.value_passer = $dat - 1;
        }
    },
    components: {
        'calendar-comp': calendar_component,
        'list-comp': list_component,
        'learned-comp': learned_component
    }
});
