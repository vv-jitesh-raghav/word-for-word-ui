
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const AdvancesSection = () => {
  return (
    <div className="space-y-4">
      <div className="bg-zinc-700 text-white p-3">
        <h2 className="font-medium">ADVANCES</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>ADVANCE 1:</Label>
            <Input value="Advance against Purchase Order" className="col-span-2" readOnly />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>ADVANCE AMOUNT:</Label>
            <Input value="0.00" className="col-span-2" readOnly />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>ADVANCE %:</Label>
            <Input value="30.00" className="col-span-2" readOnly />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>PAYMENT:</Label>
            <Input value="Payment Against PI" className="col-span-2" readOnly />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>PAYMENT AMOUNT:</Label>
            <Input value="0.00" className="col-span-2" readOnly />
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>ADVANCE %:</Label>
            <Input value="0.00" className="col-span-2" readOnly />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>ADVANCE 2:</Label>
            <Input value="Against Proforma Invoice" className="col-span-2" readOnly />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>ADVANCE AMOUNT:</Label>
            <Input value="0.00" className="col-span-2" readOnly />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>PAYMENT %:</Label>
            <Input value="70.00" className="col-span-2" readOnly />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>ADVANCE AMOUNT:</Label>
          <Input value="0" className="col-span-2" readOnly />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>REMARK:</Label>
          <Input value="INDENT FOR L.L. LOGISTICS MS GATE FITTING (BHUVNESHWAR SITE)" className="col-span-2" readOnly />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>UPLOAD BILL:</Label>
          <div className="col-span-2">
            <Button variant="outline">View File</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancesSection;
