function openTab(evt, pageName) {
    // Declare all variables
    var i, tabcontent, nav;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    navlink = document.getElementsByClassName("navlink");
    for (i = 0; i < navlink.length; i++) {
      navlink[i].className = navlink[i].className.replace(" active", "");
    }
  
    document.getElementById(pageName).style.display = "block";
    document.getElementById("banner").innerHTML = "<h1><b>wliandev</b> / " + pageName + "</h1>";
    evt.currentTarget.className += " active";
  } 

document.getElementById("default").click();