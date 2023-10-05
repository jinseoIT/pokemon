import Header from "../components/Header";
import Component from "../core/Component";
import '../styles/components/detail.css'
import { IMG_END_POINT, getPokemoSpecies, getPokemonInfo } from "../service/api";
import { convertedText } from "../utils/convertText";
import { typeColor, typeIcon } from "../utils/pokeType";

class Detail extends Component {
    template() {
      const {info, species} = this.$state
      const types = (info?.types ?? []).reduce((acc, curr) => 
				acc + `<button style="background:${typeColor[curr.type.name]};">
				<img src=${typeIcon[curr.type.name]} alt="type icon" width="20"/>
					<span>${convertedText[curr.type.name]}</span>
				</button>` ,'');

      return `
      <header class='header'></header>
      <main>
        <div class="pokemon_detail_container">
          <div class="pokemon_img_wrap">
            <img src='${IMG_END_POINT}${this.$params}.gif' alt='포켓몬 이미지' width="120" height="120"/>
          </div>
          <p>No.${String(this.$params).padStart(4,'0')}</p>
          <h3>${species?.names?.[2]?.name ?? ''}</h3>
          <div class="poke_type">${types}</div>
          <p>${species?.genera?.[1]?.genus}</p>
          <span class="flavor_txt">${species?.flavor_text_entries?.[23]?.flavor_text ?? "??????"}</span>
          <div class="poke_size_container">
            <div class="poke_size_info_wrap">
              <div class="poke_size_info">신장</div>
              <span>${info?.height ? info?.height / 10 : "??"} m</span>
            </div>
            <div class="poke_size_info_wrap">
              <div class="poke_size_info">무게</div>
              <span>${info?.weight ?  info?.weight / 10 : "??"} kg</span>
            </div>
          </div>
        </div>
      </main>
      `
    }

    setup() {
			this.$params = window.location.pathname.split("/")[3];
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
      // console.time('promise all example');
      const [species, info] = await Promise.all([
        getPokemoSpecies(pokemonId),
        getPokemonInfo(pokemonId)
      ]);
      // console.timeEnd('promise all example');
			this.setState({info, species})
		}

    
}

export default Detail;