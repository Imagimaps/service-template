import Router from '@koa/router';

const router: Router = new Router();

router.get('/health', async ctx => {
    ctx.body = {
        status: 'UP',
    };
});

export { router };