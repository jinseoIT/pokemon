import Component from "../core/Component";
import {navigateTo} from '../router';
import { IMG_END_POINT } from "../service/api";

class PoketCard extends Component {
    template() {
		const {poketmonId, name} = this.$props.poketmon
    return ` 
         <li class="poketmon_card_container" data-poketmon-id=${poketmonId}>
				 		<div class="img">
            <img src='${IMG_END_POINT}${poketmonId}.gif' alt='포켓몬 ${name} 이미지'/>
						</div>
						<div class="bx-txt">
						<p>${poketmonId}</p>
						<h3>${name}</h3>
						</div>
         </li>
        `
    }
		
		setEvent() {
		// @TODO event delegation 
		// 	const {goViewPage} = this;

		// 	this.addEvent('click', '.poketmon_card_container', (e) => {
		// 		goViewPage(e.target.closest('[data-poketmon-id]'))
		// 	})
		// }

		// goViewPage(id){
		// 	navigateTo(`/view/${id}`);
	}
}

export default PoketCard;