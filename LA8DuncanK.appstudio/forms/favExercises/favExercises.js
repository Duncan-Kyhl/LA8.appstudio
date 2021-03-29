
var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
    favExercises.clear()   
    for (i=0; i<exercises.length; i++) {
      exercises.addItem(exercises[i])
      }
    for (i=0; i<core.length; i++) {
      exercises.addItem(exercises[i])
      }
}
