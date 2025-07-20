
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
    
    
    let animelems = document.querySelectorAll(".slide-in-anim");
    
    document.addEventListener("scroll", (a)=>{
        animelems.forEach((elem)=>{
            let rect = elem.getBoundingClientRect()
            if (window.innerHeight - rect.top > elem.clientHeight*0.25){
                elem.style.transform = "translateY(0)"
                elem.style.opacity = 1
            }
            
        })
    })
   
   
});

function closeNav(){
        var sideNav = M.Sidenav.getInstance(document.querySelector(".sidenav"))
        sideNav.close()
    }

