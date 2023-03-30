import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getPosts(req: Request, res: Response) {
	try {
		const posts = await prisma.post.findMany();
		res.json(posts);
	} catch (error) {
		console.log(error);
	}
}
