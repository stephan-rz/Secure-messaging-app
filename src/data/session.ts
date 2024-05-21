import { headers } from "next/headers";
import { NextRequest, userAgent } from "next/server";

export function getIp() {
    const forwardedFor = headers().get('x-forwarded-for');
    const realIp = headers().get('x-real-ip');

    if (forwardedFor) {
        return forwardedFor.split(',')[0].trim();
    }

    if (realIp) {
        return realIp.trim();
    }

    return '0.0.0.0';
}
export function getUserData(req: NextRequest) {
    const { browser, device, isBot, os, ua } = userAgent(req);

    return {
        browser,
        device,
        isBot,
        os,
        ua
    };
}
