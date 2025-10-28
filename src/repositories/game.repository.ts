import { prisma } from "../prisma.js";

export class GameRepository {

    async findAllGames() {
        return await prisma.juego.findMany({
            include: { plataforma: true, 
                juego_genero: { include: { genero: true } } }
        });
    }

    async findGameById(id: number) {
        return await prisma.juego.findUnique({
            include: { plataforma: true, 
                juego_genero: { include: { genero: true } } },
            where: { id : id }
        });
    }
}