function openarticle(e){
    let btntarget = e.currentTarget;
    let content = btntarget.nextElementSibling;
    let actualstyle = getComputedStyle(content);
    if(actualstyle.display === "none" ){
        btntarget.className += " active";
        content.style.display = "block";
    }else if(actualstyle.display === "block" ){
        content.style.display = "none";
        btntarget.className = "btnacd";
    }
} 


