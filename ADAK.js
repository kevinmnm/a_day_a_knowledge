new Vue({
	el: '#calendarApp',
    data: {
    	year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        prevDays: []
    },
    methods: {
    	
    },
    mounted() {
    	//This creates July,2020 days from 1-23;
    	for (let i=1; i<24; i++){
        	this.prevDays.push({
            	day: i,
                topic: ''
            });
        }
        console.log(this.prevDays);
        
    }
});
