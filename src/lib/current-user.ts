import { db } from "@/lib/db";
import { auth } from "@/auth";

export const currentUser = async () => {
  const session = await auth();

  if (!session?.user?.id) {
    return null;
  }

  const user = await db.user.findUnique({
    where: {
        id: session.user.id
    }
  });

  return user;
}