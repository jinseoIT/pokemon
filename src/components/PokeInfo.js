import Component from "../core/Component";
import { getPokemoSpecies, getPokemonInfo } from "../service/api";
import { convertedText } from "../utils/convertText";
import { typeColor, typeIcon } from "../utils/pokeType";

class PokeInfo extends Component {
    template() {
			const {pokemonId} = this.$props
			const {info, species} = this.$state
			const types = (info?.types ?? []).reduce((acc, curr) => 
				acc + `<button style="background:${typeColor[curr.type.name]};">
				<img src=${typeIcon[curr.type.name]} alt="rock" width="20"/>
					<span>${convertedText[curr.type.name]}</span>
				</button>` ,'');
      return `
      	<div class="poke-info">
					<div class="poke-txt">
						<p>No.${String(pokemonId).padStart(4,'0')}</p>
						<h3>${species?.names?.[2]?.name ?? ''}</h3>
					</div>
					<div class="poke-type">${types}</div>
				</div>
      `
    }

		setup() {
			this.$state = {};
			this.$getPokemonDetail();
		}

		// async $getPokemonDetail() {
		// 	const {pokemonId} = this.$props;
		// 	// @TODO PromiseAll 변경필요 or PromiseAllSetteld
		// 	const species = await getPokemoSpecies(pokemonId);
		// 	const info = await getPokemonInfo(pokemonId);
		// 	this.setState({info, species})
		// }

		async $getPokemonDetail() {
			const {pokemonId} = this.$props;
      const callReqs = [getPokemoSpecies(pokemonId), getPokemonInfo(pokemonId)];
      const results = await Promise.allSettled(callReqs); 
      const [species, info] = results.map((result,idx) => {
        if(result.status === 'rejected') {
					console.log("rejected");;
          this.retryApi(callReqs[idx], idx, 3).then(data => {
            return data;
          });
        } 
        return result.value;
      })
			this.setState({species, info})
		}

    async retryApi(PromiseReq, idx, count) {
      console.log("count ::", count);
      if(!count) return null
      count--;
      try {
        const result = await PromiseReq();
        return result;
      } catch (error) {
        return this.retryApi(PromiseReq, idx, count);
      }
    }
}

export default PokeInfo;