import { BaseComponent } from '../base.js';

const styles = `
  loki-card {
    display: block;
  }
  loki-card .loki-card {
    border: 1px solid var(--loki-border, #e0e0e0);
    border-radius: 8px;
    overflow: hidden;
    background: var(--loki-bg, #fff);
    box-shadow: 0 1px 3px var(--loki-shadow, rgba(0,0,0,0.08));
  }
  loki-card .loki-card-header {
    padding: 1rem 1.25rem;
    font-weight: 600;
    font-size: 1.125rem;
    border-bottom: 1px solid var(--loki-border, #eee);
    background: var(--loki-bg-subtle, #fafafa);
    color: var(--loki-text, #111);
  }
  loki-card .loki-card-body {
    padding: 1.25rem;
    color: var(--loki-text, #111);
  }
  loki-card .loki-card-body > * {
    margin: 0;
  }
`;

export class LokiCard extends BaseComponent {
  protected getStyles(): string {
    return styles;
  }

  protected render(): string {
    const title = this.getAttribute('title') || '';
    const headerHtml = title ? `<div class="loki-card-header">${title}</div>` : '';
    return `
      <div class="loki-card">
        ${headerHtml}
        <div class="loki-card-body"></div>
      </div>
    `;
  }

  override connectedCallback(): void {
    const children = Array.from(this.children);
    super.connectedCallback();
    const body = this.querySelector('.loki-card-body');
    if (body) children.forEach((child) => body.appendChild(child));
  }
}

if (!customElements.get('loki-card')) {
  customElements.define('loki-card', LokiCard);
}
