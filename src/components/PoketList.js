import PoketCard from "./PoketCard";
import Componenet from '../core/Component';
import '../styles/components/poket.css'
import { getPoketmonDetail } from "../service/api";

class PoketList extends Componenet {
    template() {
        return `<ul class="poket_list"></ul>`
    }
		
		mounted() {
			const $poketList = document.querySelector('.poket_list');

			if(this.$props.pokets) {
				this.$props.pokets.map((poketmon, idx) => {
					new PoketCard($poketList, {
						poketmon : {...poketmon, poketmonId : idx+1}
					})
				})
			}
		}
}

export default PoketList;