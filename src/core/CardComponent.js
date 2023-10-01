import Component from "./Component";

class CardComponent extends Component {
  render() {
    if (this.$target && this.template().length > 0)
      this.$target.appendChild(this.parseNodeFromString(this.template()));
    this.mounted();
  }

  parseNodeFromString(htmlString) {
    const domParser = new DOMParser();

    const node = domParser.parseFromString(htmlString, "text/html").body
      .firstChild;

    node.normalize();

    return node;
  }
}

export default CardComponent;
