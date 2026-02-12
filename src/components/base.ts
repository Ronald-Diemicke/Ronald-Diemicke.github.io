/**
 * Base class for library web components.
 * Uses Light DOM; styles are scoped via the custom element tag name.
 */
export abstract class BaseComponent extends HTMLElement {
  constructor() {
    super();
  }

  /** Override to return the component's template HTML */
  protected abstract render(): string;

  /** Override to return the component's styles (use tag name as root selector, e.g. loki-button) */
  protected getStyles(): string {
    return '';
  }

  connectedCallback(): void {
    const styles = this.getStyles();
    const template = this.render();
    this.innerHTML = styles ? `<style>${styles}</style>${template}` : template;
  }
}
