import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const contato = async (req: Request, res: Response) => {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 25,
    auth: {
      user: "admin",
      pass: "password"
    }
  });

  const message = {
    from: 'Diego Almeida <diegoalmda@gmail.com>',
    to: 'teste@test.br',
    subject: 'Assunto',
    html: 'Olá <strong>Teste</strong>, como vai?',
    text: 'Olá Teste, como vai?',
  };

  const info = await transport.sendMail(message);

  res.json({ success: true });
}