
    
window.addEventListener("load", ()=>{
    
    setTimeout(()=>{
        let hiddenItems = document.querySelectorAll(".hide-before-load")
        hiddenItems.forEach((item)=>{
            item.style.display = "block";
        })
        
        }, 5500)
        
    setTimeout(()=>{
        var splash = document.querySelector(".splash");
        splash.style.display = "None"
    },5000);
})

document.addEventListener("DOMContentLoaded", ()=>{


    var sidenav = document.querySelector(".sidenav");
    var sidenavOptions = {
        draggable:true
    };
    var sideNav = M.Sidenav.init(sidenav, sidenavOptions);
    
    var floatingbuttons = document.querySelectorAll(".fixed-action-btn");
    var floatingbtnOptions = {
        
    };
    var floatingbuttons = M.FloatingActionButton.init(floatingbuttons, floatingbtnOptions);
    
    var sliders = document.querySelectorAll(".slider");
    var sliderOptions = {
        interval:6000, 
        indicators:false, 
        duration:2000
    }
    M.Slider.init(sliders, sliderOptions);
    
    
    
    
    let animatedElements = document.querySelectorAll(".slide-in-anim");
    
    document.addEventListener("scroll", (event)=>{
        animatedElements.forEach((element)=>{
            let rect = element.getBoundingClientRect()
            if (window.innerHeight - rect.top > element.clientHeight*0.25){
                element.style.transform = "translateY(0)"
                element.style.opacity = 1
            }
        })
    })
});

function closeNav(){ 
    var sideNav = M.Sidenav.getInstance(document.querySelector(".sidenav"));
    sideNav.close();
}

