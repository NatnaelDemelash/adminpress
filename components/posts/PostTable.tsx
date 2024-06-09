import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

interface PostTableProps {
  limit?: number;
  title?: string;
}

const PostTable = ({ limit, title }: PostTableProps) => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold mt-10">
        {title ? title : 'Posts'}
      </h3>

      <Table>
        <TableCaption>Latest posts here</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  );
};

export default PostTable;
