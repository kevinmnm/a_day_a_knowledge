
new Vue({
	el: '#calendarApp',
    data: {
    	year: 2020,
        all_2020: [],
        daysList: [],
        currentValue: new Date().getMonth() + 1,
        monthTxt: false,
        coverUp: false
    },
    methods: {
        nextM: function(e){
            e.stopPropagation();
            this.currentValue++;
            if (this.currentValue === 13){
                this.currentValue = 1;
            }
        },
        prevM: function(e){
            e.stopPropagation();
            this.currentValue--;
            if (this.currentValue === 0){
                this.currentValue = 12;
            }
        }
    },
    watch:{
        currentValue: function(){
            let endMonth = new Date(2020, this.currentValue, 0).getDate();
            this.daysList = [];
            for (let i=1; i<endMonth+1; i++){
                this.daysList.push({
                    month: this.currentValue,
                    day: i,
                    topic: ''
                });
            }
            if (this.currentValue < 7) {
                this.coverUp = true;
            } else {
                this.coverUp = false;
            }
        }
    },
    mounted() {
        let currentMonthLastDay = new Date(2020, this.currentValue, 0).getDate();
        for (let i=1; i<currentMonthLastDay+1; i++){
            this.daysList.push({
                month: this.currentValue,
                day: i,
                topic: ''
            });
        }
        
        //This creates all months in months section for 2020;
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

//alert(moment().max('2020'));
//alert(moment().min('2020'));
//alert(moment().endOf('month').week());
//alert(moment().month());