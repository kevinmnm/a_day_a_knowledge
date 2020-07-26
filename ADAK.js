
new Vue({
	el: '#calendarApp',
    data: {
    	year: 2020,
        all_2020: [],
        daysList: [],
        currentValue: new Date().getMonth() + 1,
        monthTxt: false,
        coverUp: false,
        akad: AKAD,
        renderClass: '',
        renderIndex: null,
        date: '',
        topic: '',
        description: '',
        referenceLink1: '',
        referenceLink2: '',
        codepenEmbed: ''
    },
    methods: {
        rendClass: function(e){
            e.stopPropagation();
            //this.renderClass = all[indd].uniqueId;
            this.renderClass = e.target.classList[1];
            //document.getElementsByClassName(this.renderClass)[0].classList.add('sel');
            // if (document.querySelector('.sel')){
            //     document.querySelector('.sel').classList.remove('sel');
            // }
            // e.target.classList.add('sel');
            let endMonth = new Date(2020, this.currentValue, 0).getDate();
            for (let i=0; i<endMonth; i++){
                if (this.akad[i].uniqueIdMatch === this.renderClass){
                    this.renderIndex = i;
                    //document.querySelector('#test').innerHTML = this.akad[i].uniqueIdMatch;
                    this.date = this.akad[i].date;
                    this.topic = this.akad[i].topic;
                    this.description = this.akad[i].description;
                    this.referenceLink1 = this.referenceLink1 = this.akad[i].referenceLink1;
                    this.referenceLink2 = this.akad[i].referenceLink2;
                    this.codepenEmbed = this.akad[i].codepenEmbed;
                }
            }
        },
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
                    uniqueId: 'z' + this.currentValue + i
                });
            }
            if (this.currentValue < 7) {
                this.coverUp = true;
            } else {
                this.coverUp = false;
            }
        },
        renderClass: function(){
            if (document.querySelector('.sel')){
                document.querySelector('.sel').classList.remove('sel');
            }
            document.getElementsByClassName(this.renderClass)[0].classList.add('sel');
        }
        // renderClass: function(){
        //     let endMonth = new Date(2020, this.currentValue, 0).getDate();
        //     for (let i=0; i<endMonth-1; i++){
        //         //console.log(this.akad[i].uniqueIdMatch);
        //         //onsole.log(endMonth);
        //         if (this.akad[i].uniqueIdMatch
        //     }
        // }
    },
    mounted() {
        let currentMonthLastDay = new Date(2020, this.currentValue, 0).getDate();
        for (let i=1; i<currentMonthLastDay+1; i++){
            this.daysList.push({
                month: this.currentValue,
                day: i,
                uniqueId: 'z' + this.currentValue + i
            });
        }

        //This creates all months in months section for 2020;
        for (let i=0; i<12; i++){
        	this.all_2020.push({
            	yy: 2020,
                mm: i + 1,
                mmt: ()=>{
                	return moment.months()[i]
                }
            });
        }
    }
});

//alert(moment().max('2020'));
//alert(moment().min('2020'));
//alert(moment().endOf('month').week());
//alert(moment().month());