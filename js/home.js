function rpsGame(yourchoise){
    console.log(yourchoise);
 var humanChoise, botChoise;
 humanChoise= yourchoise.id;
 console.log(humanChoise);

 //calling declared functions
botChoise=NumberToChoice(RanToRpsInt());
console.log(botChoise);
var message =FinalMessage(humanChoise,botChoise);
console.log(message);
rpsFrontEnd(humanChoise, botChoise, message);
 
    
 
 
 

        

 //Functions below this point      

function RanToRpsInt(){
        return Math.floor(Math.random() * 3);
       }

function NumberToChoice(number){
    return ["rock","paper","scissor"][number];
}

function FinalMessage(humanChoise,botChoise){
    if (humanChoise === botChoise) {
        return {'message':'Its a Tie', 'color':'yellow'};
        }
    else if( (humanChoise==="rock" && botChoise==="paper") || 
              (humanChoise==="paper" && botChoise==="scissor")||
             (humanChoise==="scissor" && botChoise==="paper")){
        return {'message':'You Lose', 'color':'red'};
        }

        else if((humanChoise==="rock" && botChoise==="scissor") || 
                (humanChoise==="paper" && botChoise==="rock")||
                (humanChoise==="scissor" && botChoise==="paper")){
         return {'message':'You Won', 'color':'Green'};
    }
}

       
function rpsFrontEnd(HumanImageChoice, BotImageChoice, FinalMessage){
    var ImageDatabase={
        'rock': document.getElementById("rock").src,
        'paper': document.getElementById("paper").src,
        'scissor': document.getElementById('scissor').src
    }
    console.log(document.getElementById("paper").src);
    // lets remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    
    var botDiv = document.createElement("div");
    var UserDiv = document.createElement("div");
    var MessageDiv= document.createElement("div");
    
    UserDiv.innerHTML = "<img src='" + ImageDatabase[humanChoise] + "' height=150px width=150px style=' box-shadow : 0px 10px 50px rgba(32,50,233,1)'; >"

    botDiv.innerHTML = "<img src='" + ImageDatabase[BotImageChoice] + "' height=150px width=150px style=' box-shadow : 0px 10px 50px rgba(243,22,23,1)'; >"

MessageDiv.innerHTML = "<h1 style='color: " + FinalMessage['color'] + " ; font-size:60px; padding: 30px; '>" +FinalMessage['message'] + "</h1>"


     document.getElementById("flex-box-rps-div").appendChild(UserDiv);
      
     document.getElementById("flex-box-rps-div").appendChild(MessageDiv);   
    
     document.getElementById("flex-box-rps-div").appendChild(botDiv);    
}

       
 }
 
/* _____________________________till this line only first part________________________________________
_________________________________________________________________________________________________________________ */



 //Cat generate function 
 function generateCat(){
    var catImage = document.createElement('img');
    catImage.src= "https://picsum.photos/200"
    var catFlexBox = document.getElementById("flex-box-catt");
    catFlexBox.appendChild(catImage);
   
}
 

/* ______________ till this part second chaellenge _____________________________________________________
___________________________________________________________________________________________________________*/



//change button  color
var btnInfo = document.getElementsByTagName('button');
    console.log(btnInfo);


     
   var CopyButtons =new Array();
    for( let i=0;i<btnInfo.length; i++)
    {
     CopyButtons.push(btnInfo[i].classList[1]);
    } 
    console.log(CopyButtons);
     
   

function ChangeColor(ButtonThingy)
{

    //create an array of button info
 

      //  change color based on passed arguenemt this aka ButtonThingy
     if(ButtonThingy.value === "red")
     {
         ChangeRed();
     }
     else if(ButtonThingy.value==="blue")
     {
         ChangeBlue();
     }
     else if(ButtonThingy.value==="green")
     {
         ChangeGreen();
     }
    
     else if(ButtonThingy.value==="random")
     {
         Changerandom();
     }
     else if(ButtonThingy.value==="reset")
     {
         Colorreset();
     }



     
    // function to change color by changing classes of buttons
 function ChangeRed()
 {
     for (let i=0; i< btnInfo.length; i++ )
     {
         btnInfo[i].classList.remove(btnInfo[i].classList[1]);
         btnInfo[i].classList.add('btn-danger');
     }
 }
 function ChangeBlue()
 {
     for (let i=0; i< btnInfo.length; i++ )
     {
         btnInfo[i].classList.remove(btnInfo[i].classList[1]);
         btnInfo[i].classList.add('btn-primary');
     }
 }
 function ChangeGreen()
 {
     for (let i=0; i< btnInfo.length; i++ )
     {
         btnInfo[i].classList.remove(btnInfo[i].classList[1]);
         btnInfo[i].classList.add('btn-success');
     }
 }
 function Colorreset()
 {
     for (let i=0; i< btnInfo.length; i++ )
     {
         btnInfo[i].classList.remove(btnInfo[i].classList[1]);
         btnInfo[i].classList.add(CopyButtons[i]);
     }
 }
 function Changerandom()
 {     var choice =['btn-primary','btn-success','btn-danger', 'btn-warning', 'btn-dark','btn-light','btn-secondary','btn-info']
     for (let i=0; i< btnInfo.length; i++ )
     {
         var randomNumber = Math.floor(Math.random() * 7)
         btnInfo[i].classList.remove(btnInfo[i].classList[1]);
         btnInfo[i].classList.add(choice[randomNumber]);
     }
 }
        
 
}       
        
/// Chaellange 5 black chaellange of the javascript content


    
 
 
 
