import PokeCard from "./PokeCard";
import Component from '../core/Component';
import '../styles/components/poke.css'
import { getPokeList } from "../service/api";
import {baseUrl, navigateTo} from '../router';

class PokeList extends Component {
		isUpdateList = true;
		nextOffest = 0;
    template() {
        return `<ul class="poke_list"></ul>`
    }
		
		mounted() {
			if(this.$props.pokets) {
				this.renderList(this.$props.pokets);
				window.addEventListener("scroll", this.infiniteScroll.bind(this));
			}
		}

		renderList(list = [], nextOffest = 0) {
			const $pokeList = document.querySelector('.poke_list');
			list.map((pokemon, idx) => {
				new PokeCard($pokeList, {
					pokemon : {...pokemon, pokemonId : nextOffest + idx+1}
				})
			})
		}

		setEvent() {
			const {goDetailPage} = this;
			// @event Delegation
			this.addEvent('click', '.pokemon_card_container', (e) => {
				goDetailPage(e.target.closest('[data-pokemon-id]').dataset.pokemonId);
			})
		}

		goDetailPage(id){
			navigateTo(`${baseUrl}pokemons/${id}`);
		}

		async infiniteScroll() {
			const currentScroll = window.scrollY;
    	const windowHeight = window.innerHeight;
    	const bodyHeight = document.body.clientHeight;
    	const paddingBottom = 100;
    	if(currentScroll + windowHeight + paddingBottom >= bodyHeight){
    	    if(this.isUpdateList){
    	        this.isUpdateList = false;
							this.nextOffest+=30;
							const data = await getPokeList(this.nextOffest, 30);
							this.renderList(data.results, this.nextOffest);
    	        this.isUpdateList = true;
    	    }
    	}
		}
}

export default PokeList;