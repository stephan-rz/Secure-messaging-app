import { auth } from '@/auth';
import { pusherServer } from '@/lib/pusher';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const sesssion = await auth(req, res);
    if (!sesssion) return res.status(401).json({ message: 'Unauthorized' });

    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    const data = {
        user_id: sesssion?.user?.email!,
    }

    const authResponse = pusherServer.authorizeChannel(socketId, channel, data);

    return res.send(authResponse)
}
