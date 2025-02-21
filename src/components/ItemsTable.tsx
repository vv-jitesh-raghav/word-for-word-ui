
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ItemsTable = () => {
  return (
    <div className="space-y-4">
      <div className="bg-zinc-700 text-white p-3">
        <h2 className="font-medium">ITEMS</h2>
      </div>
      <div className="border rounded-lg overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-[50px]">S No</TableHead>
              <TableHead>REF ITEM</TableHead>
              <TableHead>ITEM</TableHead>
              <TableHead>DESCRIPTION</TableHead>
              <TableHead>UNIT</TableHead>
              <TableHead>RATE</TableHead>
              <TableHead>QTY</TableHead>
              <TableHead>DIS(%)</TableHead>
              <TableHead>DIS AMT</TableHead>
              <TableHead>TOT AMT</TableHead>
              <TableHead>REMOVE</TableHead>
              <TableHead>BALANCE QTY</TableHead>
              <TableHead>FORCE COMPLETE</TableHead>
              <TableHead>HISTORY</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>IND/SHNT/LL LOGISTICS/2024-25/00123 - 30/12/2024</TableCell>
              <TableCell>MS GATE 20' LENGTH X 8' HEIGHT</TableCell>
              <TableCell className="max-w-md">
                MS GATE FOR ENTRANCE SAZE-SIZE- 20'X8', 19.8'X8', 13'X8' TOTAL - 3 NOS MAKE-MS & GI ( MAIN FRAME-2" -HOLLOW SQUARE PIPE 2.9MM THICKNESS , SUPPORTING FRAME-1" HOLLOW SQUARE PIPE-2.6MM THICK, PILLER 4" PIPE-3.6 MM THICKNESS 22 FEET LENGTH , HINGED-6 PC/GATE ,BASE PLATE 12"X12" -2 PC/GATE,
              </TableCell>
              <TableCell>KG</TableCell>
              <TableCell>95.00</TableCell>
              <TableCell>1100.000</TableCell>
              <TableCell>0.00</TableCell>
              <TableCell>0.00</TableCell>
              <TableCell>123310.00</TableCell>
              <TableCell></TableCell>
              <TableCell>1100.000</TableCell>
              <TableCell></TableCell>
              <TableCell>
                <Button variant="destructive" size="sm">HISTORY</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ItemsTable;
