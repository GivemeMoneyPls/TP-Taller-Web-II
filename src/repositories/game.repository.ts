import { prisma } from "../prisma.js";

export class GameRepository {

    async findAllGames() {
        return await prisma.game.findMany();;
    }

    async findGameById(id: number) {
        return await prisma.game.findUnique({
            where: { id : id }
        });
    }
}