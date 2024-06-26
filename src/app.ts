import Koa from 'koa';
import parser from 'koa-bodyparser';

import { router } from '@/routes.js';

const app = new Koa();
app.use(parser());
app.use(router.routes());
app.use(async ctx => {
    ctx.body = 'Default Response';
});

const startWebServer = async () => {
    console.log('Starting Koa Web Server...');
    
    app.listen(8080, () => {
        console.log('Server started on default port 8080');
    });
}

export default app;
export {
    startWebServer
};
