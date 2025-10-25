import {Router} from 'express';
import { GameController } from '../../controllers/game.controller.js';

const gameRouter = Router();
const gameController = new GameController();

gameRouter.get('/', gameController.getGames.bind(gameController));
gameRouter.get('/:id', gameController.getGame.bind(gameController));

export default gameRouter;