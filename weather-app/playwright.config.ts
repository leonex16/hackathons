import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: './tests',
	use: {
		headless: true,
		defaultBrowserType: 'chromium',
		viewport: {
			width: 375,
			height: 667,
		}
	},
	webServer: {
		command: 'npm run build && npm run preview',
		port: 3000
	}
};

export default config;
