import Page from "../core/Page";
import { getPoketmonDetail } from "../service/api";

class PoketInfo extends Page {
    template() {
			const {poketmonId} = this.$props
			const {names} = this.$state
      return `
      <div class="bx-txt">
				<p>No.${String(poketmonId).padStart(4,'0')}</p>
				<h3>${names?.[2]?.name ?? ''}</h3>
			</div>
        `
    }

		setup() {
			this.$state = {};
			this.$getPoketmonDetail();
		}

		async $getPoketmonDetail() {
			const {poketmonId} = this.$props;
			const data = await getPoketmonDetail(poketmonId);
			this.setState(data)
		}
}

export default PoketInfo;