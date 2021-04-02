
var exercises = ["pullups","pushups","jogging","curls"]
var coreExercises = ["situps","plank"]
var selection = []

favExercises.onshow=function(){
    slctExercise.clear()
    for (i=0; i<exercises.length; i++) {
      slctExercise.addItem(exercises[i])
      }
    for (i=0; i<coreExercises.length; i++) {
      slctExercise.addItem(coreExercises[i])
      }
}

btnShowResults.onclick=function(){
  for (i=0; i<slctExercise.text.length; i++) {
    selection.push(slctExercise.text[i])
    }
  console.log(selection)
  if (selection[0]=="situps" && selection[1]=="plank") {
      lblMessage3.value == (`You chose ${selection[0]} and ${selection[1]} - those are the two core exercises.`)
    } else if (selection[0]=="plank" && selection[1]=="situps"){
      lblMessage3.value == (`You chose ${selection[0]} and ${selection[1]} - those are the two core exercises.`)
    } else {
      lblMessage3.value == ("You did not pick the two core exercises.")
      }
}

btnNextForm3.onclick=function(){
  ChangeForm(mobileNav)
}


