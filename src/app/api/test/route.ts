import { pusherServer } from "@/lib/pusher";
import { NextResponse } from "next/server";

export async function POST(
    request: Request
) {
    try {
        console.log('PUSHER_SERVER', pusherServer);
        const response = await pusherServer.trigger('my-channel', 'my-event', {
            message: 'hello world'
        });
        
        return NextResponse.json(response, { status: 200 });

    } catch (error) {
        console.log(error, 'ERROR_MESSAGES_SEEN');
        return new NextResponse("Something went wrong", { status: 500 });
    }
}