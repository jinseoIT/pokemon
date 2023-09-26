import PokeCard from "./PokeCard";
import Page from '../core/Page';
import '../styles/components/poke.css'

class PokeList extends Page {
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