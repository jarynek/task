class Ui {

    /**
     * aside
     */
    static aside() {
        window.onscroll = function () {
            let thisHeader = document.getElementsByClassName('header')[0];
            let thisBody = document.getElementsByTagName('body')[0];

            if (window.scrollY > thisHeader.getBoundingClientRect().height) {
                thisBody.classList.add('fixed');
            } else {
                thisBody.classList.remove('fixed');
            }
        };
    }

    /**
     * hHamburger menu
     */
    static hamburgerMenu() {

        let thisEl = document.querySelectorAll('[data-click="hamburger"]');
        let thisMenu = document.getElementsByClassName('nav');

        if (!thisEl) {
            throw 'not thisEl';
        }else if(!thisMenu){
            throw 'not thisMenu'
        }

        /**
         * Click on hamburger trigger
         */
        thisEl.forEach((item) => {
            item.addEventListener('click',() => {
                if(thisMenu[0].classList.contains('open')){
                    thisMenu[0].classList.remove('open');
                }else{
                    thisMenu[0].classList.add('open');
                }
            });
        });

        /**
         * Scroll nav fixed toolbar
         */
        thisMenu[0].addEventListener('scroll', (event)=>{
            let thisEl = event.target;
            thisEl.classList.add('in-scroll');
        });
    }

    /**
     * Toggle box
     */
    static toggleBox(){

        let thisEl = document.querySelectorAll('[data-click="toggle"]');

        if (!thisEl) {
            throw 'not thisEl';
        }

        thisEl.forEach((item) => {
            item.addEventListener('click',() => {
                let thisBox = item.parentNode;

                if(thisBox.classList.contains('open')){
                    thisBox.classList.remove('open');
                    item.textContent = 'open';
                }else{
                    thisBox.classList.add('open');
                    item.textContent = 'close';
                }
            });
        });

    }
}

export default Ui;