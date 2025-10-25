import { Router } from "express";
import gameRouter from "./game-router/game.routes.js";

export class AppRoutes {

    static get routes():Router {

        const router = Router();

        router.use('/api/game', gameRouter);

        return router;
    }

}