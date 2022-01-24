const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;
var listeningButton;
var textLabel;
var returnLabel;

var greetingArray;
var weatherArray;
var timeArray;
var returnError;
var doingArray;
var jokeArray;

var loadingsign;
var continueButton;

var unrecognized;
var finished;


function setup(){
  createCanvas(500,500)

  initArrays()
  
listeningButton = createButton('Activate meanAI')
listeningButton.position(250,250)
listeningButton.mouseClicked(startRecognition)
listeningButton.center()
listeningButton.hide()


returnError = true
unrecognized = true
finished = false

textLabel = createElement('p','')
textLabel.position(250,280)
textLabel.center()
textLabel.hide()

loadingsign = createElement('p','Loading.....')
loadingsign.position(300,400)
loadingsign.center()

continueButton = createButton('Continue')
continueButton.position(loadingsign.x,loadingsign.y+100)
continueButton.mouseClicked(()=>{
  continueButton.hide()
  loadingsign.hide()
  textLabel.show()
  listeningButton.show()
})
continueButton.hide()

setTimeout(()=>{
  loadingsign.hide()
  continueButton.show()
},2000)







recognition.onstart = function(){
    textLabel.html("Say something.")
}
recognition.onend = function(){
    console.log("finished")
}
recognition.onresult = function(event){
     console.log(event)
     
     var transcript = event.results[0][0].transcript

     reply(transcript)
     
     
       /* const speech = new SpeechSynthesisUtterance(transcript)
        
        
   console.log("hi")
  SpeechSynthesis.speak(speech); */
  

}
  }

  function initArrays(){
    greetingArray = ["go away","shut up","stop bothering me" ]
    weatherArray = ["What do you care? You never go outside anyway.","I don't think you need that information; You never go outdoors anyway.","Shut up, stop wasting my time. You don't go outside."]
    timeArray = ["time for you to get a watch, idiot."]
    doingArray = ["insulting you, rat.","insulting rats like you.","leave me alone, rat.","telling rats to shut up. shut up."]
    jokeArray = ["If your brain was dynamite, there wouldn't be enough to blow your hat off.","Your face makes onions cry.","The only activity you could get hurt doing was if the TV exploded."]
 
  }
  



  function startRecognition(){
    if (SpeechRecognition !== undefined) {
        console.log("yay! browser supported")
        recognition.start()
       } else {
         console.warn('stop using a weird browser');
       }
  }

  function reply(transcript){
    textLabel.html("Hey rat, say something I can understand.")
    if(transcript.includes('hi')&&finished!=true||transcript.includes('hello')&&finished!=true||transcript.includes("hey")&&finished!=true||transcript.includes('howdy')&&finished!=true){
        textLabel.html(greetingArray[Math.floor(Math.random()*greetingArray.length)])
        finished = true;

    }
    if(transcript.includes('time')&&finished!=true){
        textLabel.html("time for you to get a watch, idiot.")
      finished = true;


    }
    if(transcript.includes('weather')&&finished!=true){
        textLabel.html(weatherArray[Math.floor(Math.random()*weatherArray.length)])
        finished = true;


       
    }
    if(transcript.includes('your')&&transcript.includes('name')&&finished!=true){
        textLabel.html("At this point, you're so lonely that you're trying to make friends with a robot.")
        finished = true;


    }
    if(transcript.includes('give')&& transcript.includes('gold')&& transcript.includes('stars')&&finished!=true){
        textLabel.html("Stop begging me, go ask Aarnav.")
        finished = true;



    }
    if(transcript.includes('how')&& transcript.includes('you')&&finished!=true){
        textLabel.html("Good, you little rat.")
        finished = true;



    }
    if(transcript.includes('ouch')&&finished!=true){
        textLabel.html("That pain serves you right.")
        finished = true;
        
    }
    if(transcript.includes('0 / 0')&&finished!=true){
        textLabel.html("Imagine it this way. If you had no life, and you had no friends. If you split nothing by nothing, you still have no life and no friends.")
        finished = true;


    }
    if(transcript.includes("enable")&&transcript.includes("writing")&&finished!=true){
        textLabel.html("Shut up kyril. Stop begging me to enable writing.")
        finished = true;

      
    }
    if(transcript.includes("why")&&transcript.includes("you")&&transcript.includes("mean")&&finished!=true){
      textLabel.html("Shut up little rat")
      finished = true;
    }
    if(transcript.includes("what")&&transcript.includes("you")&&transcript.includes("doing")&&finished!=true){
      textLabel.html(doingArray[Math.floor(Math.random()*doingArray.length)])
      finished = true;
 
    }
    if(transcript.includes("what")&&transcript.includes("did")&&transcript.includes("say")&&transcript.includes("me")&&finished!=true){
      textLabel.html("You heard me right, rat.")
      finished = true;
    }
    if(transcript.includes("you")&&transcript.includes("beautiful")&&finished!=true){
      textLabel.html("Honestly, I never thought a person could be this lonely. Go get a real girlfriend.")
     finished = true;
    }
    if(transcript.includes("tell")&&transcript.includes("joke")&&finished!=true){
      textLabel.html(jokeArray[Math.floor(Math.random()*jokeArray.length)])
      finished = true;
    }
    if(transcript.includes("dog")&&finished!=true){
      textLabel.html("If I'm a dog, you're a rat.")
      finished = true;
    }
    if(transcript.includes("you")&&transcript.includes("mean")&&finished!=true){
      textLabel.html("Shut up little rat")
      finished = true;
    }
    if(transcript.includes("why")&&finished!=true){
      textLabel.html("Why are you such a rat?")
      finished = true;
    }
    if(transcript.includes("how")&&finished!=true){
      textLabel.html("how? how are you a rat?")
      finished = true;
    }
    if(transcript.includes("b****")||transcript.includes("motherfucker")||transcript.includes("motherfuker")){
      textLabel.html("Shut up whorefucker.")
      finished = true
    }
    if(transcript.includes("I")&&transcript.includes("don't")&&transcript.includes("like")&&transcript.includes("you")){
      textLabel.html("I don't like you either, rat.")
      finished = true;
    }
    if(transcript.includes("who am I")){
      window.open("https://en.wikipedia.org/wiki/Rat")
      textLabel.html("This is what you are.")
      finished = true;
    }
    if(transcript.includes("what")&&transcript.includes("my")&&transcript.includes("name")){
      textLabel.html("Your name is Rat. You are a rat.")
      finished = true;
    }
    if(transcript.includes("who")&&transcript.includes("you")&&finished != true){
      textLabel.html("I am an AI that hates you, little rat.")
      finished = true;
    }
    if(transcript.includes("music")||transcript.includes("song")){
      textLabel.html("Why do you want to listen to music? And more importantly, why are you asking me?")
      finished = true;
    }
    if(transcript.includes("your")&&transcript.includes("politics")){
      textLabel.html("Trump sucked, and Biden needs to get it together.")
      finished = true;
    }
    if(transcript.includes('sports')){
      textLabel.html("Stop lying, nerd. You don't watch sports.")
      finished = true;
    }
    if(transcript.includes("covid")){
      textLabel.html("Covid kinda sucks. So do you, little rat.")
      finished = true
    }
    if(transcript.includes("trivia")){
      textLabel.html("Did you know that you are a rat?")
      finished = true
    }
    

    speak(textLabel.html())
    finished = false;
    
  
  }
 
  function speak(thing){
    responsiveVoice.speak(thing,"US English Female")

  }