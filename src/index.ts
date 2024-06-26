import { startWebServer } from '@/app.js';

async function main() {
    try {
        await startWebServer();
    } catch (error) {
        console.error('Error starting web server:', error);
    }
}

await main();
