let btnSubmit=document.getElementById("submit");

let fAdults = document.getElementById("n4");

btnSubmit.addEventListener("click",submit);

function submit(event){

    //Foreigner
    event.preventDefault();//prevents page from reloading

    let optActivities =document.getElementById("Factivities");
    let Factivities =optActivities.options[optActivities.selectedIndex].value;
    console.log("Activities:"+Factivities);

    console.log("Number Of Adults:",document.getElementById("n4").value);
    /console.log("Number Of Children :",document.getElementById("n5").value);/

    let Ftime=document.querySelector("input[name='Ftime']:checked");
    console.log("Duration:"+Ftime);

    console.log("Extras Annual Pass:",document.getElementById("exA1").value);
    console.log("Extras Food Token:",document.getElementById("exF1").value); 
}

let btnSubmit1=document.getElementById("submit1");
btnSubmit.addEventListener("click",submit1);

function submit1(){

    //Local
    let optActivities1 =document.getElementById("activities1");
    let activities1 =optActivities1.options[optActivities1.selectedIndex].value;
    console.log("Activities:"+activities1);

    console.log("Number of Local Adults :",document.getElementById("n1").value);
    console.log(" Number of Local Children below 15 :",document.getElementById("n2").value);
    console.log("  Number of Local Children below 6 :",document.getElementById("n3").value);

    let duration=document.getElementById("duration").value;
    let time;
    if (duration == "Three Hours") {
        time = document.getElementById("t1").value 
    }
    else if (duration == "Half Day") {
        time = document.getElementById("t2").value
    }
    else if (duration == "Full Day") {
        time = document.getElementById("t3").value
    }
    else if (duration == "Two Days") {
        time = document.getElementById("t4").value
    }
    console.log("Duration:"+ time);

    console.log("Extras Annual Pass:",document.getElementById("exA").value);
    console.log("Extras Food Token:",document.getElementById("exF").value);

    let totaltickets = parseInt(document.getElementById("n1").value) + parseInt(document.getElementById("n2").value) + parseInt(document.getElementById("n3").value) + parseInt(document.getElementById("n4").value) + parseInt(document.getElementById("n5").value) + parseInt(document.getElementById("exA").value) + parseInt(document.getElementById("exF").value) + parseInt(document.getElementById("exA1").value) + parseInt(document.getElementById("exF1").value);
    console.log(totaltickets);
    
    //foreign
    document.getElementById("price2").innerText = totaltickets;

    let totalPrice = parseInt(document.getElementById("n1").value * 3000) + parseInt(document.getElementById("n2").value * 2500) + parseInt(document.getElementById("n3").value * 2500) + parseInt(document.getElementById("n4").value * 1000) + parseInt(document.getElementById("n5").value * 500) + parseInt(document.getElementById("exA").value * 5000) + parseInt(document.getElementById("exF").value * 500) + parseInt(document.getElementById("exA1").value * 5000) + parseInt(document.getElementById("exF1").value * 500);
    console.log(totalPrice);

    document.getElementById("price4").innerText = totalPrice;

}
    function myFunction() {

    let duration=document.getElementById("duration").value;
    let time;
    if (duration == "Three Hours") {
        time = document.getElementById("t1").value 
    }
    else if (duration == "Half Day") {
        time = document.getElementById("t2").value
    }
    else if (duration == "Full Day") {
        time = document.getElementById("t3").value
    }
    else if (duration == "Two Days") {
        time = document.getElementById("t4").value
    }

        document.getElementById("price1").innerText = "";
        document.getElementById("price3").innerText = "";
    }

    function myFunction1() {

        let activity1 = document.getElementById("Lactivities").value
        let activity2 = document.getElementById("Factivities").value
        if (activity1 == "" && activity2 == "")


        {
            alert("Incomplete Order!!");
        }
        if (activity1 == "Safari" || activity2 == "Safari")
        {
            alert("Thank for your reservation handled by Wasgamuwa National Park");
        }
        else if (activity1 == "Surfing" || activity2 == "Surfing")
        {
            alert("Thank for your reservation handled by Matara Surf Club");
        }
        else if (activity1 == "Hiking" || activity2 == "Hikimg")
        {
            alert("Thank for your reservation handled by Central Hiking Association")
        }

    }

    let tickets = [];
    function addCurrent(){
        console.log("ticketp")

        let currentTickets = parseInt(document.getElementById("n1").value) + parseInt(document.getElementById("n2").value) + parseInt(document.getElementById("exA1").value) + parseInt(document.getElementById("exF1").value);
        console.log(currentTickets) + parseInt(document.getElementById("exA").value) + parseInt(document.getElementById("exF").value);

        //foreign
        document.getElementById("price1").innerText = currentTickets;

        let currentPrice = parseInt(document.getElementById("n1").value * 3000) + parseInt(document.getElementById("n2").value * 2500) + parseInt(document.getElementById("exA1").value * 5000) + parseInt(document.getElementById("exF1").value * 500) + parseInt(document.getElementById("exA").value * 5000) + parseInt(document.getElementById("exF").value * 500);
        console.log(currentPrice);

        document.getElementById("price3").innerText = currentPrice;
       
        
    }

let btnSubmit2=document.getElementById("submit2");
btnSubmit2.addEventListener("click",submit2);

function submit2(){
    
    console.log("Cardholder Name:",document.getElementById("name").value);
    console.log("Card Number:",document.getElementById("no").value);
    console.log("Expiry Date:",document.getElementById("exp").value);
    console.log("CVV / CVC:",document.getElementById("cvc").value);
}

function myFunction2() {

    let cardnumber = document.getElementById("no").value
    if (cardnumber == "")
    {
        //alert("Incomplete Order!!");
        console.log("incomplete order");
    }
    else{
        //alert("Success!!")
        console.log("success");
    }

  }