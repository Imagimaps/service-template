import Koa from 'koa';
import parser from 'koa-bodyparser';
import favicon from 'koa-favicon';
import cors from '@koa/cors';
import logger from 'koa-pino-logger';
import requestId from 'koa-requestid';

import { router } from '@/routes.js';

const app = new Koa();
app
    .use(requestId())
    .use(logger())
    .use(cors())
    .use(favicon('./favicon.ico'))
    .use(parser())
    .use(router.routes())
    .use(async ctx => {
        ctx.body = 'Default Response';
    });

const startApiServer = async () => {
    console.log('Starting Koa Web Server...');
    
    app.listen(8080, () => {
        console.log('Server started on default port 8080');
    });
}

export default app;
export {
    startApiServer
};
