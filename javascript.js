document.getElementById("btn1").onClick= togglePython()

function togglePython() {
  document.getElementById("collapsible").classList.toggle("expanded");
  document.getElementById("collapsible").classList.toggle("collapsed");
}