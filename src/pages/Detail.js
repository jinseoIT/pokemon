import Header from "../components/Header";
import Page from "../core/Page";
import { IMG_END_POINT, getPokemoSpecies, getPokemonInfo } from "../service/api";
import { convertedText } from "../utils/convertText";
import { typeColor, typeIcon } from "../utils/pokeType";

class Detail extends Page {
    template() {
      const {info, species} = this.$state
      const types = (info?.types ?? []).reduce((acc, curr) => 
				acc + `<button style="background:${typeColor[curr.type.name]};">
				<img src=${typeIcon[curr.type.name]} alt="rock" width="20"/>
					<span>${convertedText[curr.type.name]}</span>
				</button>` ,'');
      return `
      <header class='header'></header>
      <main>
        <h1>Pokemon Page</h1>
        <div class="pokemon_detail_container">
          <img src='${IMG_END_POINT}${this.$params}.gif' alt='포켓몬 이미지'/>
          <p>No.${String(this.$params).padStart(4,'0')}</p>
          <h3>${species?.names?.[2]?.name ?? ''}</h3>
          <div class="poke-type">${types}</div>
        </div>
      </main>
      `
    }

    setup() {
			this.$params = window.location.pathname.split("/")[2];
      this.$state = {};
			this.$getPokemonDetail(this.$params);
		}

    mounted() {
      const $header = document.querySelector('.header');
      
      new Header($header, {
        hedaer: $header
      })
    }

    async $getPokemonDetail(pokemonId) {
			// @TODO PromiseAll 변경필요
			const species = await getPokemoSpecies(pokemonId);
			const info = await getPokemonInfo(pokemonId);
			this.setState({info, species})
		}

    
}

export default Detail;