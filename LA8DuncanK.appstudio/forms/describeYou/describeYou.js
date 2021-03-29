


rdoStatus.onchange=function(s) {
// get the text of the option chosen by the user
   let status = $("input[name=rdoStatus]:checked").prop("value")
   lblMessage2.value = (`I would agree that you are a ${status} person too!`)
}
btnNextForm2.onclick=function(){
  ChangeForm(favExercises)
}
