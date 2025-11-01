import { Router } from "express";
import gameRouter from "./game-router/game.routes.js";
import authRouter from "./auth-router/auth.routes.js";

export class AppRoutes {

    static get routes():Router {

        const router = Router();

        router.use('/api/game', gameRouter);
        router.use('/api/auth', authRouter);

        return router;
    }

}