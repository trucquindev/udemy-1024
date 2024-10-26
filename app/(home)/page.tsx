import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className="text-red-600">
      Home
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}
