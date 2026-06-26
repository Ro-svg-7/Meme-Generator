function selectTemplate(templateId, card){
    document.getElementById("template_id").value = templateId;
    document 
        .querySelectorAll(".template-card")
        .forEach(card => card.classList.remove("selected"));
    card.classList.add("selected");
}
function showMore(){
   const hidden = Array.from(document.querySelectorAll(".hidden")).slice(0,10);
   hidden.forEach(card => card.classList.remove("hidden"));

   if(document.querySelectorAll(".hidden").length === 0){
    document.getElementById("show-more-btn").style.display = "none";
   }
}
function shuffleTemplate(){
    const grid = document.querySelector(".template-grid");
    const cards = Array.from(grid.querySelectorAll(".template-card"));

    //shuffle the array
    cards.sort(() => Math.random() - 0.5);

    //re-append in new order, hide all past 10
    cards.forEach((card, index) => {
        card.classList.toggle("hidden", index >= 10);
        grid.appendChild(card);
    });
}
