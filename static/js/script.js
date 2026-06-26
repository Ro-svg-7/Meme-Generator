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
