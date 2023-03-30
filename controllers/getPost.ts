import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getPost(req: Request, res: Response) {
	const { id } = req.params;
	try {
		const post = await prisma.post.findUnique({
			where: {
				id: Number(id),
			},
		});
		res.json(post);
	} catch (error) {
		console.log(error);
	}
}
