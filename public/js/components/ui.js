class Ui {

    /**
     * aside
     */
    static aside(){
        window.onscroll = function() {
            let thisHeader = document.getElementsByClassName('header')[0];
            let thisBody = document.getElementsByTagName('body')[0];

            if (window.scrollY > thisHeader.getBoundingClientRect().height) {
                console.log('fixed');
                thisBody.classList.add('fixed');
            }else{
                console.log('float');
                thisBody.classList.remove('fixed');
            }
        };
    }
}

export default Ui;