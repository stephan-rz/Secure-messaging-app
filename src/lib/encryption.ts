import crypto from 'crypto';

const secretKey = process.env.ENCRYPTION_SECRET_KEY;
if (!secretKey || secretKey.length !== 64) {
    throw new Error('SECRET_KEY must be 64 hex characters (32 bytes)');
}

const algorithm = 'aes-256-ctr';

export const encryptMessage = (message: string) => {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey, 'hex'), iv);
    const encrypted = Buffer.concat([cipher.update(message), cipher.final()]);
    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex'),
    };
};

export const decryptMessage = (hash: any) => {
    const decipher = crypto.createDecipheriv(
        algorithm,
        Buffer.from(secretKey, 'hex'),
        Buffer.from(hash.iv, 'hex')
    );
    const decrypted = Buffer.concat([
        decipher.update(Buffer.from(hash.content, 'hex')),
        decipher.final(),
    ]);
    return decrypted.toString();
};
