export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  readTimeMinutes: number;
  content: string[];
}

export const posts: Post[] = [
  {
    slug: 'building-component-library',
    title: 'Building a component library with web components',
    date: '2025-02-10',
    excerpt:
      'How we built the Loki component library using custom elements and Light DOM for maximum flexibility and theme support.',
    author: 'Loki',
    readTimeMinutes: 5,
    content: [
      'When we set out to build a small design system for our projects, we wanted something framework-agnostic, easy to theme, and simple to integrate. Web components fit the bill: they work in any HTML environment, support both Shadow DOM and Light DOM, and can be styled with CSS custom properties.',
      'We chose Light DOM for Loki so that global theme variables (e.g. for dark mode) could flow through without piercing a shadow boundary. Each component injects a scoped <style> block and uses the host tag name as the root selector (e.g. loki-button), so we get predictable styling without isolating the markup from the rest of the page.',
      'The base class handles a single render pass in connectedCallback: it concatenates optional styles and the template string, then sets innerHTML on the host. Subclasses override render() and getStyles() to supply markup and CSS. Slotted content is handled where needed—for example, the card saves its children before calling super.connectedCallback(), then appends them into the body container after the template is in place.',
      'If you’re starting a similar library, we recommend keeping the API surface small (attributes and light DOM content), using a consistent naming prefix to avoid clashes, and driving visuals from theme variables so one stylesheet can switch the whole UI between light and dark.',
    ],
  },
  {
    slug: 'light-dark-themes',
    title: 'Light and dark themes in one stylesheet',
    date: '2025-02-08',
    excerpt:
      'Using CSS custom properties and a single theme toggle to support both light and dark mode across all components.',
    author: 'Loki',
    readTimeMinutes: 4,
    content: [
      'Supporting light and dark mode doesn’t require separate stylesheets or duplicate rules. A single set of CSS custom properties, switched by a theme attribute or class on the root, is enough to restyle the entire app.',
      'We define variables like --loki-bg, --loki-text, --loki-border, and --loki-accent on :root for the light theme, and override them under [data-theme="dark"]. Components use these variables instead of hard-coded colors, so changing the theme is instant and consistent.',
      'To respect system preference when the user hasn’t chosen a theme, we use @media (prefers-color-scheme: dark) and apply the dark palette to :root when data-theme isn’t set. A small script on load reads localStorage and, if present, applies the user’s last choice; otherwise it leaves the attribute unset so the media query can apply.',
      'The theme toggle is a single button that flips data-theme between "light" and "dark" and persists the value. No flash of the wrong theme: the script runs as soon as the layout loads, and all components already reference the same variables.',
    ],
  },
  {
    slug: 'astro-storybook-design-systems',
    title: 'Astro and Storybook for design systems',
    date: '2025-02-05',
    excerpt:
      'Combining Astro’s fast static sites with Storybook’s component development environment for documentation and testing.',
    author: 'Loki',
    readTimeMinutes: 6,
    content: [
      'Astro is great for content-focused sites and blogs: minimal JavaScript by default, fast builds, and a simple file-based routing model. When you add a component library—whether React, Vue, or web components—you still want a place to develop and document those components in isolation. That’s where Storybook comes in.',
      'We use the Web Components (Vite) framework in Storybook so that our Loki custom elements render as they would in the browser. Each component has a small set of stories that cover default state, variants, and disabled or invalid cases. The stories are just template strings or functions that return HTML, so we’re not pulling in a UI framework only for docs.',
      'Getting the components into Storybook is straightforward: the preview script imports the registry that defines all custom elements, so every story runs with the full set of Loki components available. Controls and docs are generated from the same stories, so designers and developers can tweak props and see the result without touching the app.',
      'For teams that also use the Astro Docs MCP server or similar tooling, having a single source of truth for components (the same source files used in Astro pages and in Storybook) keeps documentation and implementation in sync and makes it easier for AI-assisted workflows to reference the right APIs.',
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsSortedByDate(): Post[] {
  return [...posts].sort((a, b) => (b.date > a.date ? 1 : -1));
}
