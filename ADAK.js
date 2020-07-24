new Vue({
	el: '#calendarApp',
    data: {
    	year: 2020,
        all_2020: [],
        JulyPrevDays: [],
        currentValue: new Date().getMonth(),
        monthTxt: false
    },

    mounted() {
    	//This creates July,2020 missing days of 1-23;
    	for (let i=1; i<24; i++){
        	this.JulyPrevDays.push({
            	month: 7,
            	day: i,
                topic: ''
            });
        }
        
        //This creates all months in 2020;
        for (let i=0; i<12; i++){
        	this.all_2020.push({
            	yy: 2020,
                mm: i + 1,
                mmt: function(){
                	return moment.months()[i];
                }
            });
        }
    }
});