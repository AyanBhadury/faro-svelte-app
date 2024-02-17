import {
    getWebInstrumentations,
    SessionInstrumentation,
    ErrorsInstrumentation,
    WebVitalsInstrumentation,
    initializeFaro as coreInit,
} from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

export function initializeFaro() {
    var faro = coreInit({
        url: import.meta.env.VITE_FARO_URL,
        app: {
            name: "svelte-faro-app",
            version: "1.0.0",
            environment: "production",
        },

        instrumentations: [
            // Mandatory, overwriting the instrumentations array would cause the default instrumentations to be omitted
            ...getWebInstrumentations(),

            // Initialization of the tracing package.
            // This packages is optional because it increases the bundle size noticeably. Only add it if you want tracing data.
            new TracingInstrumentation(),
            new SessionInstrumentation(),
            new ErrorsInstrumentation(),
            new WebVitalsInstrumentation(),
        ],
    });
    console.log('from initializeFaro')
    faro.api.pushLog(['Faro was initialized']);
    return faro
}
