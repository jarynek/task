/**
 * User interface class
 */
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
     * Hamburger menu
     */
    static hamburgerMenu() {

        let thisEl = document.querySelectorAll('[data-click="hamburger"]');
        let thisMenu = document.getElementsByClassName('nav');

        if (!thisEl) {
            throw 'not thisEl';
        } else if (!thisMenu) {
            throw 'not thisMenu'
        }

        /**
         * Click on hamburger trigger
         */
        thisEl.forEach((item) => {
            item.addEventListener('click', (event) => {

                let thisEl = event.target;

                if (thisMenu[0].classList.contains('open')) {
                    thisMenu[0].classList.remove('open');
                    thisEl.classList.remove('active');
                } else {
                    thisMenu[0].classList.add('open');
                    thisEl.classList.add('active');
                }
            });
        });

        /**
         * Scroll nav fixed toolbar
         */
        thisMenu[0].addEventListener('scroll', (event) => {
            let thisEl = event.target;
            thisEl.classList.add('in-scroll');
        });
    }

    /**
     * Toggle box
     */
    static toggleBox() {

        let thisEl = document.querySelectorAll('[data-click="toggle"]');

        if (!thisEl) {
            throw 'not thisEl';
        }

        thisEl.forEach((item) => {
            item.addEventListener('click', () => {
                let thisBox = item.parentNode;

                if (!thisBox) {
                    throw 'not thisBox';
                }

                if (thisBox.classList.contains('open')) {
                    thisBox.classList.remove('open');
                } else {
                    thisBox.classList.add('open');
                }
            });
        });

    }

    /**
     * pageReload
     */
    static pageReload() {
        let thisLinks = document.querySelectorAll('[data-click="reload"]');

        if(!thisLinks){
            return;
        }

        thisLinks.forEach((item) => {
            item.addEventListener('click', () => {
                location.reload();
            });
        });

    }
}

export default Ui;