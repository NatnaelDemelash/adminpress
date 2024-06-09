import DashboardCard from '@/components/dashboard/DashboardCard';
import PostTable from '@/components/posts/PostTable';
import { Folders, MessageSquareQuote, Newspaper, Users } from 'lucide-react';
export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-5">
        <DashboardCard
          title="Posts"
          count={244}
          icon={<Newspaper className="text-slate-900" size={52} />}
        />
        <DashboardCard
          title="Categories"
          count={11}
          icon={<Folders className="text-slate-900" size={52} />}
        />
        <DashboardCard
          title="Users"
          count={915}
          icon={<Users className="text-slate-900" size={52} />}
        />
        <DashboardCard
          title="Comments"
          count={1520}
          icon={<MessageSquareQuote className="text-slate-900" size={52} />}
        />
      </div>
      <PostTable title="Latest Posts" />
    </>
  );
}
