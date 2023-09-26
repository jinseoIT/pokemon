import Header from "../components/Header";
import PokeList from "../components/PokeList";
import Page from "../core/Page";
import { getPokeList } from "../service/api";

class Home extends Page {
  template() {
    return `
    <header class='header'></header>
    <main>
      <section class='poke_list_container'></section>
    </main>
    `;
  }
  
  setup() {
    this.$state = {};
    this.$getPokeList();
  }

	mounted() {
		const $header = document.querySelector('.header');
    const $pokeListContainer = document.querySelector('.poke_list_container')

		new Header($header, {
			header: $header
		})
    new PokeList($pokeListContainer, {
      pokets: this.$state.pokets,
    });
	}

  async $getPokeList() {
    const data = await getPokeList();
    this.setState({pokets: data.results});
  }
}

export default Home;