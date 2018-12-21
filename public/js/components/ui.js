class Ui {

    /**
     * aside
     */
    static aside() {
        window.onscroll = function () {
            let thisHeader = document.getElementsByClassName('header')[0];
            let thisBody = document.getElementsByTagName('body')[0];

            if (window.scrollY > thisHeader.getBoundingClientRect().height) {
                console.log('fixed');
                thisBody.classList.add('fixed');
            } else {
                console.log('float');
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

        thisEl.forEach((item) => {
            item.addEventListener('click',() => {
                console.log(thisMenu[0].classList.contains('open'));
                if(thisMenu[0].classList.contains('open')){
                    thisMenu[0].classList.remove('open');
                }else{
                    thisMenu[0].classList.add('open');
                }
            });
        });
    }
}

export default Ui;