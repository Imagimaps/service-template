import { startApiServer } from '@/app.js';

async function main() {
    try {
        await startApiServer();
    } catch (error) {
        console.error('Error starting web server:', error);
    }
}

await main();
