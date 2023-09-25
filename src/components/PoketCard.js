import Component from "../core/Component";
import {navigateTo} from '../router';
import { IMG_END_POINT } from "../service/api";
import PoketInfo from "./PoketInfo";

class PoketCard extends Component {
    template() {
		const {poketmonId, name} = this.$props.poketmon
    return ` 
         <li class="poketmon_card_container" data-poketmon-id=${poketmonId}>
				 		<div class="img">
            <img src='${IMG_END_POINT}${poketmonId}.gif' alt='포켓몬 ${name} 이미지'/>
						</div>
						<div class="poketmon_card_info${poketmonId}"/>
         </li>
        `
    }
		
	// 	setEvent() {
	// 	@TODO event delegation 
	// 		const {goViewPage} = this;

	// 		this.addEvent('click', '.poketmon_card_container', (e) => {
	// 			goViewPage(e.target.closest('[data-poketmon-id]'))
	// 		})
	// 	}

	// 	goViewPage(id){
	// 		navigateTo(`/view/${id}`);
	// }

	mounted() {
		const {poketmonId} = this.$props.poketmon
		const $poketmonInfo = document.querySelector(`.poketmon_card_info${poketmonId}`);
		new PoketInfo($poketmonInfo, {
			poketmonId
		});	
	}
}

export default PoketCard;