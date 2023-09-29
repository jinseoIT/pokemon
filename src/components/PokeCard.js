import Component from "../core/Component";
import {baseUrl, navigateTo} from '../router';
import { IMG_END_POINT } from "../service/api";
import PokeInfo from "./PokeInfo";

class PoketCard extends Component {
    template() {
		const {pokemonId, name} = this.$props.pokemon
    return ` 
         <li class="pokemon_card_container" data-pokemon-id=${pokemonId}>
				 	<div class="img_container">
				 		<div class="img_wrap">
         	   	<img src='${IMG_END_POINT}${pokemonId}.gif' alt='포켓몬 ${name} 이미지'/>
						</div>
					</div>
					<div class="poketmon_card_info${pokemonId}"/>
         </li>
        `
    }
		
		setEvent() {
			const {goDetailPage} = this;
			// @event deligation
			this.addEvent('click', '.pokemon_card_container', (e) => {
				goDetailPage(e.target.closest('[data-pokemon-id]').dataset.pokemonId)
			})
		}

		goDetailPage(id){
			navigateTo(`${baseUrl}pokemons/${id}`);
	}

	mounted() {
		const {pokemonId} = this.$props.pokemon
		const $poketmonInfo = document.querySelector(`.poketmon_card_info${pokemonId}`);
		new PokeInfo($poketmonInfo, {
			pokemonId
		});	
	}
}

export default PoketCard;