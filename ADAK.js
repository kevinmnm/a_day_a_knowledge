// Vue.component('calendar-weeks', {
//     props: ['render-list'],
//     data: function(){
//         return {
//             weeksList: ['SUN','MON','TUE','WED','THU','FRI','SAT']
//         }
//     },
//     template: `
//             <div class='weeks'>{{ renderList }}</div>
//     `
// });

new Vue({
	el: '#calendarApp',
    data: {
        year: 2020,
        //weeksList: ['SUN','MON','TUE','WED','THU','FRI','SAT'],
        all_2020: [],
        daysList: [],
        currentValue: new Date().getMonth() + 1,
        endMonth: null,
        monthTxt: false,
        coverUp: false,
        akad: AKAD,
        renderClass: '',
        renderIndex: null,
        date: '',
        topic: '',
        description: '',
        referenceLink1: '',
        ref1show: false,
        referenceLink2: '',
        ref2show: false,
        codepenEmbed: '',
        content: '',
        learnNextShow: false,
        learnPrevShow: false,
        learnSectionShow: false,
        arrowDownIcon: arrowDownSVG,
        showGuide: false
    },
    methods: {
        rendClass: function(e){
            e.stopPropagation();
            this.renderClass = e.target.classList[1];
            let endMonth = new Date(2020, this.currentValue, 0).getDate();
            for (let i=0; i<endMonth; i++){
                if (this.akad[i].uniqueIdMatch === this.renderClass){
                    this.learnSectionShow = true;
                    this.renderIndex = i;
                    this.date = this.akad[i].date;
                    this.topic = this.akad[i].topic;
                    this.description = this.akad[i].description;
                    this.referenceLink1 = this.akad[i].referenceLink1;
                    this.referenceLink1 ? this.ref1show = true : this.ref1show = false;
                    this.referenceLink2 =  this.akad[i].referenceLink2;
                    this.referenceLink2 ? this.ref2show = true : this.ref2show = false;
                    this.codepenEmbed = this.akad[i].codepenEmbed;
                    if (this.akad[i].content === 'JS'){
                        this.content = '<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="js-square" class="svg-inline--fa fa-js-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path></svg>';
                    } else if (this.akad[i].content === 'Vue'){
                        this.content = '<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="vuejs" class="svg-inline--fa fa-vuejs fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"></path></svg>';
                    } else if (this.akad[i].content === 'CSS'){
                        this.content = '<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="css3-alt" class="svg-inline--fa fa-css3-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path></svg>';
                    } else {
                        this.content = '';
                    }
                }
            }
        },
        nextM: function(e){
            e.stopPropagation();
            this.currentValue++;
            if (this.currentValue === 13){
                this.currentValue = 1;
            }
            this.learnSectionShow = false;
            this.learnNextShow = false;
            this.learnPrevShow = false;
        },
        prevM: function(e){
            e.stopPropagation();
            this.currentValue--;
            if (this.currentValue === 0){
                this.currentValue = 12;
            }
            this.learnSectionShow = false;
            this.learnNextShow = false;
            this.learnPrevShow = false;
        },
        learnPrev: function(){
            let learnSection = document.querySelector('.learnSection');
            let extractedNumber = Number(this.renderClass.substring(1));

            learnSection.classList.remove('animate__bounceInRight');
            learnSection.classList.add('animate__bounceOutRight');
            setTimeout(()=>{
                learnSection.classList.remove('animate__bounceOutRight');
                learnSection.classList.add('animate__bounceInLeft');
                this.renderClass = 'z' + (extractedNumber - 1);
                document.getElementsByClassName(this.renderClass)[0].click();
            },200);
        },
        learnNext: function(){
            let learnSection = document.querySelector('.learnSection');
            let extractedNumber = Number(this.renderClass.substring(1));

            learnSection.classList.remove('animate__bounceInLeft');
            learnSection.classList.add('animate__bounceOutLeft');
            setTimeout(()=>{
                learnSection.classList.remove('animate__bounceOutLeft');
                learnSection.classList.add('animate__bounceInRight');
                this.renderClass = 'z' + (extractedNumber + 1);
                document.getElementsByClassName(this.renderClass)[0].click();
            },200);
            
        },
        hoverTS: function(e){
            let el = document.querySelector('.hoverShowDiv');
            let et = e.target;

            if (et === document.querySelector('.prevM')){
                el.style.top = e.pageY + 20 + 'px';
                el.style.left = e.pageX + 20 + 'px';
                el.style.display = 'block';
                el.innerHTML = 'Previous Month';
            } else if (et === document.querySelector('.nextM')){
                el.style.top = e.pageY + 20 + 'px';
                el.style.left = e.pageX + 20 + 'px';
                el.style.display = 'block';
                el.innerHTML = 'Next Month';
            } else if (et === document.querySelector('.monthsToggle')){
                el.style.top = e.pageY + 20 + 'px';
                el.style.left = e.pageX + 20 + 'px';
                el.style.display = 'block';
                el.innerHTML = 'Months Toggle';
            } else if (et === document.querySelector('.vue')){
                el.style.top = e.pageY + 20 + 'px';
                el.style.left = e.pageX + 20 + 'px';
                el.style.display = 'block';
                el.innerHTML = 'Vue';
            } else if (et === document.querySelector('.js')){
                el.style.top = e.pageY + 20 + 'px';
                el.style.left = e.pageX + 20 + 'px';
                el.style.display = 'block';
                el.innerHTML = 'JavaScript';
            } else if (et === document.querySelector('.css')){
                el.style.top = e.pageY + 20 + 'px';
                el.style.left = e.pageX + 20 + 'px';
                el.style.display = 'block';
                el.innerHTML = 'CSS';
            } else if (et === document.querySelector('.empty')){
                el.style.top = e.pageY + 20 + 'px';
                el.style.left = e.pageX + 20 + 'px';
                el.style.display = 'block';
                el.innerHTML = 'Empty';
            } else if (et === document.querySelector('#arrowDownIcon')){
                el.style.top = e.pageY + 20 + 'px';
                el.style.left = e.pageX + 20 + 'px';
                el.style.display = 'block';
                el.innerHTML = 'Color Indicator Guide';
            } else {
                el.style.display = 'none';
            } 
        },
        guide: function(){
            this.showGuide = !this.showGuide;
            document.querySelector('.flex-indicator').classList.add('animate__flash');
        }
    },
    watch:{
        currentValue: function(){
            //let days = document.querySelectorAll('.days');
            let endMonth = new Date(2020, this.currentValue, 0).getDate();
            this.endMonth = endMonth; //Storing for renderIndex watch();
            this.daysList = [];
            let delay = 0;
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
        renderIndex: function(){
            let learnPrev = document.querySelector('.learnPrev');
            let learnNext = document.querySelector('.learnNext');
            let learnSection = document.querySelector('.learnSection');
            let calendar = document.querySelector('.calendar');
            let year = document.querySelector('.year');

            if (this.renderIndex !== null){ 
                this.renderIndex === this.endMonth-1 ? this.learnNextShow = false : this.learnNextShow = true;
                this.renderIndex === 0 ? this.learnPrevShow = false : this.learnPrevShow = true;
                learnNext.style.top = learnSection.offsetTop + 'px';
                learnPrev.style.top = learnSection.offsetTop + 'px';
                learnPrev.style.height = document.body.offsetHeight - calendar.offsetHeight - year.offsetHeight + 'px';
                learnNext.style.height = document.body.offsetHeight - calendar.offsetHeight - year.offsetHeight + 'px';
            } else {
                this.learnNextShow = false;
                this.learnPrevShow = false;
            }
        }
    },
    mounted() {
        let currentMonthLastDay = new Date(2020, this.currentValue, 0).getDate();
        this.endMonth = currentMonthLastDay;
        for (let i=1; i<currentMonthLastDay+1; i++){
            this.daysList.push({
                month: this.currentValue,
                day: i,
                uniqueId: 'z' + this.currentValue + i
            });
        }

        for (let i=0; i<12; i++){
        	this.all_2020.push({
            	yy: 2020,
                mm: i + 1,
                mmt: ()=>{
                	return moment.months()[i]
                }
            });
        }
        
        for (let i=0; i<this.akad.length; i++){
            if (this.akad[i].topic === ''){
                this.akad[i].topic = 'Empty';
            }
        }

        // for (let i=0; i<this.akad.length; i++){
        //     if (this.akad[i].content === 'JS'){
        //         this.akad[i].col = 'yellow';
        //     } else if (this.akad[i].content === 'Vue'){
        //         this.akad[i].col = 'lightGreen';
        //     } else if (this.akad[i].content === 'CSS'){
        //         this.akad[i].col = 'skyBlue';
        //     } else {
        //         this.akad[i].col = 'none';
        //     }
        // }
    }
});
    // created() {
    //     let uniqueIds = [];
    //     for (let i=0; i<this.akad.length; i++){
    //         if (this.akad[i].content === 'JS'){
    //             uniqueIds.push(this.akad[i].uniqueIdMatch);
    //             document.querySelector('.z71').style.color = 'yellow';
    //         }
    //     }
    // } 


//alert(moment().max('2020'));
//alert(moment().min('2020'));
//alert(moment().endOf('month').week());
//alert(moment().month());
