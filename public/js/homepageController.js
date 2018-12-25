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
}

new HomepageController('index');



