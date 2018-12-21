import Ui from './components/ui';

/**
 * HomepageController
 */
class HomepageController {
    constructor(options) {
        this.options = options;

        Ui.aside();
    }

    run(){
        console.log(this.options);
    }
}

window.HomepageController = HomepageController;



