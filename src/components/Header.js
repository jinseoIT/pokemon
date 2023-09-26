import Component from "../core/Component";
import '../styles/components/header.css';
import logo from '../assets/main_logo.png';
// import Button from "./common/Button";

class Header extends Component {
    template() {
        return `
					<img src="${logo}" alt="logo" width="180"/>
        `
    }
    // mounted() {
    //   const isHomePage = window.location.pathname = "/";

		// 	// if(!isHomePage) {
		// 	// 	new Button()
		// 	// }
    // }
}

export default Header;