<slot />

<style>
  :root {
    --primary-light: #005faf;
    --on-primary-light: #ffffff;
    --primary-container-light: #d3e3ff;
    --on-primary-container-light: #001c3b;
    --secondary-light: #a8382f;
    --on-secondary-light: #ffffff;
    --secondary-container-light: #ffdad4;
    --on-secondary-container-light: #410001;
    --tertiary-light: #556500;
    --on-tertiary-light: #ffffff;
    --tertiary-container-light: #d4ef45;
    --on-tertiary-container-light: #181e00;
    --error-light: #b3261e;
    --on-error-light: #ffffff;
    --error-container-light: #f9dedc;
    --on-error-container-light: #410e0b;
    --outline-light: #79747e;
    --background-light: #fffbfe;
    --on-background-light: #1c1b1f;
    --surface-light: #fffbfe;
    --on-surface-light: #1c1b1f;
    --surface-variant-light: #e7e0ec;
    --on-surface-variant-light: #49454f;
    --inverse-surface-light: #313033;
    --inverse-on-surface-light: #f4eff4;
    --bg-gradient-light: #007e8f;
    --on-bg-gradient-light: linear-gradient(0deg, #008799 0%, #0095a8 50%, #00b0c7 100%);

    --primary-dark: #a4c8ff;
    --on-primary-dark: #00305f;
    --primary-container-dark: #004788;
    --on-primary-container-dark: #d3e3ff;
    --secondary-dark: #ffb4a9;
    --on-secondary-dark: #670507;
    --secondary-container-dark: #871f1a;
    --on-secondary-container-dark: #ffdad4;
    --tertiary-dark: #b8d227;
    --on-tertiary-dark: #2b3400;
    --tertiary-container-dark: #3f4c00;
    --on-tertiary-container-dark: #d4ef45;
    --error-dark: #f2b8b5;
    --on-error-dark: #601410;
    --error-container-dark: #8c1d18;
    --on-error-container-dark: #f9dedc;
    --outline-dark: #938f99;
    --background-dark: #1c1b1f;
    --on-background-dark: #e6e1e5;
    --surface-dark: #1c1b1f;
    --on-surface-dark: #e6e1e5;
    --surface-variant-dark: #49454f;
    --on-surface-variant-dark: #cac4d0;
    --inverse-surface-dark: #e6e1e5;
    --inverse-on-surface-dark: #1c1b1f;
    --bg-gradient-dark: #121416;
    --on-bg-gradient-dark: linear-gradient(0deg, #17191c 0%, #1e2024 50%, #25272d 100%);

    --black: #1c1b1f;
    --white: #e6e1e5;
  }

  @media (prefers-color-scheme: light) {
    :root {
      --primary: var(--primary-light);
      --on-primary: var(--on-primary-light);
      --primary-container: var(--primary-container-light);
      --on-primary-container: var(--on-primary-container-light);
      --secondary: var(--secondary-light);
      --on-secondary: var(--on-secondary-light);
      --secondary-container: var(--secondary-container-light);
      --on-secondary-container: var(--on-secondary-container-light);
      --tertiary: var(--tertiary-light);
      --on-tertiary: var(--on-tertiary-light);
      --tertiary-container: var(--tertiary-container-light);
      --on-tertiary-container: var(--on-tertiary-container-light);
      --error: var(--error-light);
      --on-error: var(--on-error-light);
      --error-container: var(--error-container-light);
      --on-error-container: var(--on-error-container-light);
      --outline: var(--outline-light);
      --background: var(--background-light);
      --on-background: var(--on-background-light);
      --surface: var(--surface-light);
      --on-surface: var(--on-surface-light);
      --surface-variant: var(--surface-variant-light);
      --on-surface-variant: var(--on-surface-variant-light);
      --inverse-surface: var(--inverse-surface-light);
      --inverse-on-surface: var(--inverse-on-surface-light);
      --bg-gradient: var(--bg-gradient-light);
      --on-bg-gradient: var(--on-bg-gradient-light);
    }

    :global(.dark-theme) {
      --primary: var(--primary-dark);
      --on-primary: var(--on-primary-dark);
      --primary-container: var(--primary-container-dark);
      --on-primary-container: var(--on-primary-container-dark);
      --secondary: var(--secondary-dark);
      --on-secondary: var(--on-secondary-dark);
      --secondary-container: var(--secondary-container-dark);
      --on-secondary-container: var(--on-secondary-container-dark);
      --tertiary: var(--tertiary-dark);
      --on-tertiary: var(--on-tertiary-dark);
      --tertiary-container: var(--tertiary-container-dark);
      --on-tertiary-container: var(--on-tertiary-container-dark);
      --error: var(--error-dark);
      --on-error: var(--on-error-dark);
      --error-container: var(--error-container-dark);
      --on-error-container: var(--on-error-container-dark);
      --outline: var(--outline-dark);
      --background: var(--background-dark);
      --on-background: var(--on-background-dark);
      --surface: var(--surface-dark);
      --on-surface: var(--on-surface-dark);
      --surface-variant: var(--surface-variant-dark);
      --on-surface-variant: var(--on-surface-variant-dark);
      --inverse-surface: var(--inverse-surface-dark);
      --inverse-on-surface: var(--inverse-on-surface-dark);
      --bg-gradient: var(--bg-gradient-dark);
      --on-bg-gradient: var(--on-bg-gradient-dark);
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --primary: var(--primary-dark);
      --on-primary: var(--on-primary-dark);
      --primary-container: var(--primary-container-dark);
      --on-primary-container: var(--on-primary-container-dark);
      --secondary: var(--secondary-dark);
      --on-secondary: var(--on-secondary-dark);
      --secondary-container: var(--secondary-container-dark);
      --on-secondary-container: var(--on-secondary-container-dark);
      --tertiary: var(--tertiary-dark);
      --on-tertiary: var(--on-tertiary-dark);
      --tertiary-container: var(--tertiary-container-dark);
      --on-tertiary-container: var(--on-tertiary-container-dark);
      --error: var(--error-dark);
      --on-error: var(--on-error-dark);
      --error-container: var(--error-container-dark);
      --on-error-container: var(--on-error-container-dark);
      --outline: var(--outline-dark);
      --background: var(--background-dark);
      --on-background: var(--on-background-dark);
      --surface: var(--surface-dark);
      --on-surface: var(--on-surface-dark);
      --surface-variant: var(--surface-variant-dark);
      --on-surface-variant: var(--on-surface-variant-dark);
      --inverse-surface: var(--inverse-surface-dark);
      --inverse-on-surface: var(--inverse-on-surface-dark);
      --bg-gradient: var(--bg-gradient-dark);
      --on-bg-gradient: var(--on-bg-gradient-dark);
    }

    :global(.light-theme) {
      --primary: var(--primary-light);
      --on-primary: var(--on-primary-light);
      --primary-container: var(--primary-container-light);
      --on-primary-container: var(--on-primary-container-light);
      --secondary: var(--secondary-light);
      --on-secondary: var(--on-secondary-light);
      --secondary-container: var(--secondary-container-light);
      --on-secondary-container: var(--on-secondary-container-light);
      --tertiary: var(--tertiary-light);
      --on-tertiary: var(--on-tertiary-light);
      --tertiary-container: var(--tertiary-container-light);
      --on-tertiary-container: var(--on-tertiary-container-light);
      --error: var(--error-light);
      --on-error: var(--on-error-light);
      --error-container: var(--error-container-light);
      --on-error-container: var(--on-error-container-light);
      --outline: var(--outline-light);
      --background: var(--background-light);
      --on-background: var(--on-background-light);
      --surface: var(--surface-light);
      --on-surface: var(--on-surface-light);
      --surface-variant: var(--surface-variant-light);
      --on-surface-variant: var(--on-surface-variant-light);
      --inverse-surface: var(--inverse-surface-light);
      --inverse-on-surface: var(--inverse-on-surface-light);
      --bg-gradient: var(--bg-gradient-light);
      --on-bg-gradient: var(--on-bg-gradient-light);
    }
  }

  :global(*) {
    margin: 0;
    padding: 0;
    color: var(--on-background);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
  }

  :global(body) {
    min-height: 100vh;
    min-width: 100vw;
    outline: 2px solid blue;
    font-size: 18px;
  }

  :global(.no-scrollbars) {
    overflow: auto !important;
    scrollbar-width: none !important;
  }

  :global(.no-scrollbars::-webkit-scrollbar, .hidden) {
    display: none !important;
  }

  :global(.opacity-0) {
    opacity: 0 !important;
  }
</style>
