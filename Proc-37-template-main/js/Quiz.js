class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.hide();

    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
fill("blue")
textSize(23)
text("Result of the Quiz :",310,50)
fill("blue")
textSize(23)
text("____________________ ",300,55)
    //call getContestantInfo( ) here
      Contestant.getPlayerInfo();


    //write condition to check if contestantInfor is not undefined
if(allContestants!== undefined){


    //write code to add a note here
fill("blue");
textSize(20);
var y=250;
text("NOTE: Contestant who answered correct is highlighted in green colour",130,250)
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns="2";
      if(correctAns === allContestants[plr].answer)
      
       
      fill("green")

      else
         fill("red")
       
        

//allContestants[plr].name+=30
         textSize(20)
         y=y+40;

         text(allContestants[plr].name+": " + allContestants[plr].answer,220,y)
    }
  }
  }
}