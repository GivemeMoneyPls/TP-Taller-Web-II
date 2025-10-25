import {type Request, type Response } from "express";
import { GameService } from "../services/game.service.js";
import { GameRepository } from "../repositories/game.repository.js";

const gameRepository = new GameRepository();
const gameService = new GameService(gameRepository);


export class GameController {

    constructor() {}

    public getGames = async(req:Request, res:Response) => {

        try {

            const games = await gameService.getGames();

            res.status(200).json(games);
            
        } catch (error) {
            res.status(500).json({message: "Error al obtener los juegos", error});
        }

    }

     public getGame = async(req:Request, res:Response) => {

        try {

            const id = Number(req.params.id);

            if (isNaN(id)) {
                return res.status(400).json({message: "ID invalido"});
            }

            const game = await gameService.getGameById(id);

            if (!game) {
                return res.status(404).json({message: "Juego no encontrado"});
            }

            res.status(200).json(game);
            
        } catch (error) {
            res.status(500).json({message: "No se pudo obtener el juego", error});
        }

    }
}