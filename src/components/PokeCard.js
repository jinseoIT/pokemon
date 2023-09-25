import Component from "../core/Component";
import {navigateTo} from '../router';
import { IMG_END_POINT } from "../service/api";
import PoketInfo from "./PokeInfo";

class PoketCard extends Component {
    template() {
		const {pokemonId, name} = this.$props.pokemon
    return ` 
         <li class="pokemon_card_container" data-poketmon-id=${pokemonId}>
				 		<div class="img">
            <img src='${IMG_END_POINT}${pokemonId}.gif' alt='포켓몬 ${name} 이미지'/>
						</div>
						<div class="poketmon_card_info${pokemonId}"/>
         </li>
        `
    }
		
	// 	setEvent() {
	// 	@TODO event delegation 
	// 		const {goViewPage} = this;

	// 		this.addEvent('click', '.pokemon_card_container', (e) => {
	// 			goViewPage(e.target.closest('[data-poketmon-id]'))
	// 		})
	// 	}

	// 	goViewPage(id){
	// 		navigateTo(`/view/${id}`);
	// }

	mounted() {
		const {pokemonId} = this.$props.pokemon
		const $poketmonInfo = document.querySelector(`.poketmon_card_info${pokemonId}`);
		new PoketInfo($poketmonInfo, {
			pokemonId
		});	
	}
}

export default PoketCard;