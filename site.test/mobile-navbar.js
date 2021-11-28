class mobileNavbar{
    constructor(mobilemenu, navlist, navlinks){
       this.mobilemenu = document.querySelector(mobilemenu);
       this.navlist = document.querySelector(navlist);
       this.navlinks = document.querySelectorAll(navlinks);
       this.activeClass = "active";
       this.activeClass = this.handleClick.bind();
    } 

     handleClick(){
       console.log(this);
       this.navlist.classlist.toggle(this.activeClass)
}

    addClickEvent(){
        this.mobilemenu.addEventListenner("click", this.handleClick);
        

    }

    init(){
        if(this.mobilemenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new mobileNavbar(
".mobile-menu",
".nav-list",
".nav-list li",
);
mobileNavbar.init()