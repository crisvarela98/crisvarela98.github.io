const sidebar = document.getElementById("sidebar")
const toggleBtn = document.getElementById("toggleBtn")
const overlay = document.getElementById("overlay")

toggleBtn.addEventListener("click", ()=>{

sidebar.classList.toggle("open")
overlay.classList.toggle("active")

})

overlay.addEventListener("click", ()=>{

sidebar.classList.remove("open")
overlay.classList.remove("active")

})