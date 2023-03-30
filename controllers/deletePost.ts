import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function deletePost(req: Request, res: Response) {
	const { id } = req.params;
	try {
		const post = await prisma.post.delete({
			where: {
				id: Number(id),
			},
		});
		res.json(post);
	} catch (error) {
		console.log(error);
	}
}
