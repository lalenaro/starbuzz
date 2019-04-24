var now = new Date()
var hour = now.getHours()

if (hour>=6 && hour<12) {
  alert("Buna dimineata!")
} else if (hour<17) {
  alert("Buna Ziua!")
} else if (hour<22){
  alert("Buna Seara!")
} else{
  alert('Noapte buna!')
}
