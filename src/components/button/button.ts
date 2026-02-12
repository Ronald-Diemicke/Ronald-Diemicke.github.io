import { BaseComponent } from '../base.js';

const styles = `
  loki-button {
    display: inline-block;
  }
  loki-button button {
    font-family: inherit;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--loki-border-strong, #333);
    border-radius: 6px;
    background: var(--loki-bg, #fff);
    color: var(--loki-text, #111);
    cursor: pointer;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
  }
  loki-button button:hover {
    background: var(--loki-accent, #333);
    color: var(--loki-accent-contrast, #fff);
  }
  loki-button button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  loki-button button.primary {
    background: var(--loki-accent, #333);
    color: var(--loki-accent-contrast, #fff);
  }
  loki-button button.primary:hover:not(:disabled) {
    background: var(--loki-accent-hover, #555);
  }
`;

export class LokiButton extends BaseComponent {
  static get observedAttributes() {
    return ['disabled', 'variant', 'label'];
  }

  protected getStyles(): string {
    return styles;
  }

  protected render(): string {
    const disabled = this.hasAttribute('disabled');
    const variant = this.getAttribute('variant') || 'default';
    const label = this.getAttribute('label') ?? this.textContent?.trim() ?? 'Button';
    return `<button type="button" class="${variant}" ${disabled ? 'disabled' : ''}>${label}</button>`;
  }
}

if (!customElements.get('loki-button')) {
  customElements.define('loki-button', LokiButton);
}
