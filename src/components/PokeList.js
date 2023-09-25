import PokeCard from "./PokeCard";
import Componenet from '../core/Component';
import '../styles/components/poke.css'

class PokeList extends Componenet {
    template() {
        return `<ul class="poke_list"></ul>`
    }
		
		mounted() {
			const $pokeList = document.querySelector('.poke_list');

			if(this.$props.pokets) {
				this.$props.pokets.map((pokemon, idx) => {
					new PokeCard($pokeList, {
						pokemon : {...pokemon, pokemonId : idx+1}
					})
				})
			}
		}
}

export default PokeList;