let person = document.getElementById("person")
let content = document.getElementById("content") 
let btn = document.getElementById("btn")
let love = document.getElementById("love")

btn.addEventListener("click", function() {
  love.innerHTML += `
    <div class="news" style="text-align: left;font-family: 'Times New Roman'">
      <h2>${person.value}</h2>
      <p>${content.value}</p>
    </div>
  `
})