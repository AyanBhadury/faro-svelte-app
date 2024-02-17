// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

// Add the following code snippet to your application before any other JavaScript/TypeScript code!
// For example put the code in your root index.[ts|js] file, right before you initialize your SPA / App.

import { getWebInstrumentations, initializeFaro } from '@grafana/faro-web-sdk';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

var faro = initializeFaro({
  url: 'https://faro-collector-prod-ap-south-0.grafana.net/collect/360df4b5cb97fdfc2b05e2d03376e4c9',
  app: {
    name: 'svelte-faro-app',
    version: '1.0.0',
    environment: 'production'
  },
  
  instrumentations: [
    // Mandatory, overwriting the instrumentations array would cause the default instrumentations to be omitted
    ...getWebInstrumentations(),

    // Initialization of the tracing package.
    // This packages is optional because it increases the bundle size noticeably. Only add it if you want tracing data.
    new TracingInstrumentation(),
  ],
});


declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
