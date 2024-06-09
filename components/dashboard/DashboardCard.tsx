import { Card, CardContent } from '../ui/card';

import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <Card className="bg-[#c8c8f358] border-none p-4 pb-0 dark:bg-slate-900 ">
      <CardContent>
        <h1 className="text-2xl text-center mb-4 text-slate-900 font-bold dark:text-slate-200">
          {title}
        </h1>
        <div className="flex gap-5 items-center justify-center">
          {icon}
          <h3 className="text-3xl text-slate-900 dark:text-slate-200 font-semibold">
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
