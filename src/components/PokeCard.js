import CardComponent from "../core/CardComponent";
import { IMG_END_POINT, IMG_ERROR_END_POINT} from "../service/api";
import PokeInfo from "./PokeInfo";

class PoketCard extends CardComponent {
    template() {
		const {pokemonId, name} = this.$props.pokemon
    return ` 
         <li class="pokemon_card_container" data-pokemon-id=${pokemonId}>
				 	<div class="img_container">
				 		<div class="img_wrap">
         	   	<img src='${IMG_END_POINT}${pokemonId}.gif' onerror="this.onerror=null; this.src='${IMG_ERROR_END_POINT}${pokemonId}.png'" alt='포켓몬 ${name} 이미지'/>
						</div>
					</div>
					<div class="poketmon_card_info${pokemonId}"/>
         </li>
        `
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