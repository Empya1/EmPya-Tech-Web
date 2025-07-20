
document.addEventListener("DOMContentLoaded", ()=>{
    var sidenav = document.querySelector(".sidenav");
    var sidenavOptions = {
        draggable:true
    };
    var sideNav = M.Sidenav.init(sidenav, sidenavOptions);
    
    var floatingbtns = document.querySelectorAll(".fixed-action-btn")
    var floatingbtnOptions = {}
    M.FloatingActionButton.init(floatingbtns, floatingbtnOptions);
    
    var sliders = document.querySelectorAll(".slider")
    M.Slider.init(sliders, {interval:6000, indicators:false, duration:2000});
    
    
    
   
    
});

function closeNav(){
        var sideNav = M.Sidenav.getInstance(document.querySelector(".sidenav"))
        sideNav.close()
    }

