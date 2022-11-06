import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await unstable_getServerSession(authOptions)

  if (!session) {
    redirect('/api/auth/signin');
  } else {
    redirect('/dashboard');
  }
}
