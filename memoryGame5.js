const selectors = {
    all_cards: document.querySelector('.all_cards'),
    clock: document.querySelector('.clock'),
    win: document.querySelector('.win')
}

const state = {
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null,
    cardsFlipped: false,
}
    // all the img in arr
    var CardsArr = [
        {src: './img/img20.jpg' ,alt:'20'},
        {src: './img/img2.jpg' , alt:'2'},
        {src: './img/img3.jpg' , alt:'3'},
        {src: './img/img4.jpg' , alt:'4'},
        {src: './img/img5.jpg' , alt:'5'},
        {src: './img/img6.jpg' , alt:'6'},
        {src: './img/img7.jpg' , alt:'7'},
        {src: './img/img8.jpg' , alt:'8'},
        {src: './img/img9.jpg' , alt:'9'},
        {src: './img/img10.jpg' , alt:'10'},   
        {src: './img/img11.jpg' , alt:'11'},
        {src: './img/img12.jpg' , alt:'12'},
        {src: './img/img13.jpg' , alt:'13'},
        {src: './img/img14.jpg' , alt:'14'},
        {src: './img/img15.jpg' , alt:'15'},
        {src: './img/img16.jpg' , alt:'16'},
        {src: './img/img17.jpg' , alt:'17'},
        {src: './img/img18.jpg' , alt:'18'},
        {src: './img/img19.jpg' , alt:'19'},
        {src: './img/img1.jpg' , alt:'1'} ]
    
    //func to random the Img arr
     const randomize = () => {
        const cardData2 = CardsArr;
        cardData2.sort(() => Math.random() - 0.5);
        return cardData2
    };

    //funcion on click "startGame"
    //generate all cards (random)
    //show on screen the name of the player
    //toggle all card on the back
    function start(){    
        state.totalTime = 0;
        selectors.clock.innerText = `time: ${state.totalTime} sec`
        state.loop = setInterval(() => {
            state.totalTime++
            console.log(state.totalTime);
            selectors.clock.innerText = `time: ${state.totalTime} sec`
        }, 1000)
        
        //rendomize Cards
        var cardsData = randomize();
        console.log(cardsData);

        //take login data
        const inputUserName = $('.inputUserName').val();
        const howManyCards = $('.howManyCards').val();
        console.log(howManyCards +"howMany");
        CardsArr = [
            {src: './img/img20.jpg' ,alt:'20'},
            {src: './img/img2.jpg' , alt:'2'},
            {src: './img/img3.jpg' , alt:'3'},
            {src: './img/img4.jpg' , alt:'4'},
            {src: './img/img5.jpg' , alt:'5'},
            {src: './img/img6.jpg' , alt:'6'},
            {src: './img/img7.jpg' , alt:'7'},
            {src: './img/img8.jpg' , alt:'8'},
            {src: './img/img9.jpg' , alt:'9'},
            {src: './img/img10.jpg' , alt:'10'},   
            {src: './img/img11.jpg' , alt:'11'},
            {src: './img/img12.jpg' , alt:'12'},
            {src: './img/img13.jpg' , alt:'13'},
            {src: './img/img14.jpg' , alt:'14'},
            {src: './img/img15.jpg' , alt:'15'},
            {src: './img/img16.jpg' , alt:'16'},
            {src: './img/img17.jpg' , alt:'17'},
            {src: './img/img18.jpg' , alt:'18'},
            {src: './img/img19.jpg' , alt:'19'},
            {src: './img/img1.jpg' , alt:'1'} ]
        if (howManyCards<=20)
        {
            cardsData.length=howManyCards;
            generateCards(cardsData, howManyCards);
            generateCards(cardsData, howManyCards);
        }
        else
        {
            var countdoun = howManyCards;
            var arrx =0;
            var arr = cardsData;
            while(countdoun>20)
            {
                if(arrx>19)
                    arrx=0;
                    arr.push(cardsData[arrx]);
                arrx++;
                countdoun--;
            }
            generateCards(CardsArr,howManyCards);
            generateCards(CardsArr,howManyCards);
        }

        //show login
        $(".show_userName").html("<b>השחקן: </b> " + inputUserName);
        $('.row2').addClass('p-2');
        let element1 = document.getElementById("clockID");
        element1.style.display = "contents";
        let element2 = document.getElementById("btnLogin")
        element2.style.display = "none"

        debugger;
        //this row toggle the cards
        toggle('.gameCard>div');
        
        //call to func that run the game
        clickCards(howManyCards);
        return true;
    }
    //this func toggle the cards
    function toggle(itemX){
        $(itemX).toggleClass('toggleCard');
    }
    function generateCards(arr, howManyCards)
    {
        arr.sort(() => Math.random() - 0.5);
        for (let index = 0; index < howManyCards; index++) {
            debugger;
            var card = $('.card-col').html();
            var card2 = $('.card-col').prop('outerHTML');
            var card3 = $(card2).removeClass('d-none');
            $("img", card3).attr('src',arr[index].src);
            $("img", card3).attr('alt', arr[index].alt);
            card3.addClass("gameCard");
            $('.all_cards').append(card3);

        }
    }

    $('#startGame').click(() => {
        start();

    });
    //     function validateBeforeSubmit(event) {
            
    //         const inputUserNam = $('.inputUserName').val();
    //         const howManyCards = $('.howManyCards').val();
    //         if (typeof howManyCards != "number")
    //         {
    //             $('.invalidLogin').html("<b>לא הזנת מספר כראוי<b>");
    //             event.preventDefault();
    //         }
            
    //         if (howManyCards <2) {
    //             $('.invalidLogin').html("<b>חייבים לפחות 2 זוגות של כרטיסים<b>");
    //             event.preventDefault();
    //         }
    //         if (inputUserNam.length <2)
    //         {
    //             $('.invalidLogin').html("<b>אהלן, השם שהוקלד לא נכון. חייבים מעל  אות אחת בשמך<b>");
    //             event.preventDefault();
    //         }
    //         else {
    //             $('.invalidLogin').text('');
    //         }
    // }
    // $('#startGame').submit(validateBeforeSubmit);
    
    //func that run the game
    function clickCards(howManyCardsLeft){
        var count=0;
        var cat1 = -1;
        var cat2=-2;
        
            $('.card').click(function (e) {
                if (count < 2 && howManyCardsLeft>0 && $(this).hasClass('toggleCard') && !state.cardsFlipped)
                {
                    toggle(this);
                    state.flippedCards++
                    state.totalFlips++
                    if (count ==0)
                    {
                        cat1 =  $(this).children("img").attr("alt");
                        card1 = this;
                    }
                    else
                     {   
                        cat2 = $(this).children("img").attr("alt");
                        card2=this;
                    }
                     count++;
                     //if the cards identical remove from them the option toggle
                     //insert them clss 'knownCard'
                    if (count==2)
                    {
                        if(cat1==cat2){
                            $(card1).addClass('knownCard');
                            $(card2).addClass('knownCard');
    
                            $(card1).removeClass('toggleCard');
                            $(card2).removeClass('toggleCard');
                            howManyCardsLeft--;
                            console.log(howManyCardsLeft +"howMany");
                            count =0;
                            card1=null;
                            card2=null
                            cat1=-1;
                            cat2=-2;
                            if(howManyCardsLeft<=0){
                                WinGame();
                            }
                        }
                        else{
                            state.cardsFlipped = true;
                            setTimeout(() => {
                                count=0;
                                console.log(card1, card2);
                                toggle(card1);
                                toggle(card2);
                                cat1=-1;
                                cat2=-2;
                                card1=null;
                                card2=null;
                                state.cardsFlipped = false;
                            }, 1000);
                        }
                    }                    
                }
                //if the game is finished
                else if(howManyCardsLeft==0)
                {
                    count =0;
                    //call to func that shoe the "end game" to the player and start over
                    WinGame();

                    return;
                }
            });
        if (howManyCardsLeft==0)
        {
            WinGame();
        }
    }

        //func that clean the game, and show the results
        function WinGame(){
            setTimeout(() => {
                var div = $('.gameCard');

                for (let index = 0; index < div.length; index++) {
                    div[index].remove();
                }
                clearInterval(state.loop);
                $('.card-col').addClass('d-none');
                let element2 = document.getElementById("btnLogin");
                element2.style.display = "block";
            }, 1000)

    }
