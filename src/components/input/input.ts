import { BaseComponent } from '../base.js';

const styles = `
  loki-input {
    display: block;
  }
  loki-input label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
    color: var(--loki-text-muted, #374151);
  }
  loki-input input {
    width: 100%;
    font-family: inherit;
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
    border: 2px solid var(--loki-border, #e0e0e0);
    border-radius: 6px;
    box-sizing: border-box;
    background: var(--loki-bg, #fff);
    color: var(--loki-text, #111);
    transition: border-color 0.15s;
  }
  loki-input input:focus {
    outline: none;
    border-color: var(--loki-border-strong, #333);
  }
  loki-input input::placeholder {
    color: var(--loki-placeholder, #9ca3af);
  }
`;

export class LokiInput extends BaseComponent {
  static get observedAttributes() {
    return ['label', 'placeholder', 'type', 'name', 'value'];
  }

  protected getStyles(): string {
    return styles;
  }

  protected render(): string {
    const label = this.getAttribute('label') || '';
    const placeholder = this.getAttribute('placeholder') || '';
    const type = this.getAttribute('type') || 'text';
    const name = this.getAttribute('name') || '';
    const value = this.getAttribute('value') || '';
    const labelHtml = label ? `<label>${label}</label>` : '';
    return `
      ${labelHtml}
      <input type="${type}" name="${name}" placeholder="${placeholder}" value="${value}" />
    `;
  }
}

if (!customElements.get('loki-input')) {
  customElements.define('loki-input', LokiInput);
}
