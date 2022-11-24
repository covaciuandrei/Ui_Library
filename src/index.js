import Tooltip from "./project-ui/tooltip";
import Dropdown from "./project-ui/dropdown";
import Tabs from "./project-ui/tabs";
import Snackbar from "./project-ui/snackbar";
//create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.Init();

//create dropdowns 
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})

//create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () =>{
    snackbar.show('You clicked me:)');
});