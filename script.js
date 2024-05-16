window.onload = function() {
    const grid = document.querySelector('.grid');
    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });
};

document.addEventListner("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"}');

    for(const link of links){
        link.addEventListner("click", function(e)){
            e.preventDefault();

            const targetID = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetID);

            if(targetElement){
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        };
    }
});