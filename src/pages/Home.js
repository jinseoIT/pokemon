import Header from "../components/Header";
import PoketList from "../components/PoketList";
import Page from "../core/Page";
import { getPoketList } from "../service/api";

class Home extends Page {
  template() {
    return `
    <header class='header'></header>
    <main>
    	<h2>Home Page</h2>
      <section class='poket_list_container'></section>
    </main>
    `;
  }
  
  setup() {
    this.$state = {};
    this.$getPoketList();
  }

	mounted() {
		const $header = document.querySelector('.header');
    const $poketListContainer = document.querySelector('.poket_list_container')

		new Header($header, {
			header: $header
		})
    new PoketList($poketListContainer, {
      pokets: this.$state.pokets,
    });
	}

  async $getPoketList() {
    const data = await getPoketList(0,30);
    console.log("data ::", data );
    this.setState({pokets: data.results});
  }
}

export default Home;