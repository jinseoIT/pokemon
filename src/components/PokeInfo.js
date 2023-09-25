import Page from "../core/Page";
import { getPokemonDetail } from "../service/api";

class PokeInfo extends Page {
    template() {
			const {pokemonId} = this.$props
			const {names} = this.$state
      return `
      <div class="bx-txt">
				<p>No.${String(pokemonId).padStart(4,'0')}</p>
				<h3>${names?.[2]?.name ?? ''}</h3>
			</div>
        `
    }

		setup() {
			this.$state = {};
			this.$getPokemonDetail();
		}

		async $getPokemonDetail() {
			const {pokemonId} = this.$props;
			const data = await getPokemonDetail(pokemonId);
			this.setState(data)
		}
}

export default PokeInfo;