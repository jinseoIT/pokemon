import Page from "../../core/Page";

class Button extends Page {
  template() {
    const { content, className, disabled} = this.$props
    return `
      <button class="${className ? className : 'button'}" ${disabled ? "disabled" : ""}>
      ${content}
      </button>
    `
  }

  setEvent() {
    const {onClick, className} = this.$props;
    this.addEvent("click", className ? `.${className.split(' ')[0]}` : 'button'), (e) => {
      e.preventDefault();
      onClick();
    }
  }
}

export default Button