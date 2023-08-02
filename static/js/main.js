var btns = document.getElementsByClassName("navbaritem");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {

    //code to edit the navbar underline
  var current = document.getElementsByClassName("active");
    for (var j = 0; j < current.length; j++){
      current[j].classList.remove("active");
    }
  this.classList.add("active");

    
    //code to hide and display the specific content section
  var selected_tab = this.innerText.toLowerCase()
  var manip_sections = document.getElementsByClassName("mainsection")
  for (var j = 0; j < manip_sections.length; j++){
    var div = manip_sections[j]
    if (div.classList.contains(selected_tab)){
      div.classList.remove("hide")
    } else {
      div.classList.add("hide")
    }
  }

    //code to hide the navbar, footer, content body

  var footer = document.getElementById("footer")
  var content = document.getElementById("content")
    var navbar = document.getElementById("navbar")
    if(selected_tab == 'home') {

      navbar.classList.add("home")
      content.classList.add("hide")
    
      footer.classList.remove("main")

      
    } else {

      navbar.classList.remove("home")
      content.classList.remove("hide")
      footer.classList.add("main")
    }

    togglemenu();
  });
}


$(document).on('submit','#contact-form',function(e){
    console.log('hello');
    e.preventDefault();
    $.ajax({
      type:'POST',
      url:'/',
      data:$("#contact-form").serialize(),
      success:function()
      {
        alert('message sent');
      }
    })
  });


document.getElementById("js-navbar-toggle").addEventListener("click", togglemenu);

function togglemenu(){
  var navbar = document.getElementById("navbar")
  var menu = document.getElementById("menu")
  var menubutton = document.getElementById("js-navbar-toggle")
  if(!navbar.classList.contains("expand")){
    menubutton.innerHTML = '<i class="fa fa-window-close"></i>'
  } else {
    menubutton.innerHTML = '<i class="fa fa-bars"></i>'
  }

  navbar.classList.toggle("expand")
  menu.classList.toggle("expand")
                                                                                
                                                                               };