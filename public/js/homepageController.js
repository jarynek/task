import Ui from './components/ui';

/**
 * HomepageController
 */
class HomepageController {
    constructor(options) {
        this.options = options;

        try{
            Ui.aside();
            Ui.hamburgerMenu();
            Ui.toggleBox();
        }catch (e) {
            console.log(e);
        }
    }

    run(){
        console.log(this.options);
    }
}

window.HomepageController = HomepageController;



