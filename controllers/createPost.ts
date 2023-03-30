import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createPost(req: Request, res: Response) {
	const { title, content } = req.body;
	try {
		const post = await prisma.post.create({
			data: {
				title,
				content,
			},
		});
		res.json(post);
	} catch (error) {
		console.log(error);
	}
}
