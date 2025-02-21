
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const OverheadsTable = () => {
  return (
    <div className="space-y-4">
      <div className="bg-zinc-700 text-white p-3">
        <h2 className="font-medium">OVER HEADS</h2>
      </div>
      <div className="border rounded-lg overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#E5F6F6]">
              <TableHead>S No</TableHead>
              <TableHead>PARENTID</TableHead>
              <TableHead>OVERHEAD ITEM</TableHead>
              <TableHead>RATE</TableHead>
              <TableHead>TOTAL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OverheadsTable;
