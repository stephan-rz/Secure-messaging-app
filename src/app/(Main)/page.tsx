import EmptyState from "@/components/empty-state";


export default async function Home() {

  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>

  );
}
