
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TotalSection = () => {
  return (
    <div className="space-y-4">
      <div className="bg-zinc-700 text-white p-3">
        <h2 className="font-medium">TOTAL</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>PARTY NET AMT:</Label>
            <Input value="104500.00" className="col-span-2" readOnly />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>TAXABLE AMOUNT:</Label>
            <Input value="104500.00" className="col-span-2" readOnly />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>CGST AMOUNT:</Label>
            <Input value="9405.00" className="col-span-2" readOnly />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>SGST AMOUNT:</Label>
            <Input value="9405.00" className="col-span-2" readOnly />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>IGST AMOUNT:</Label>
            <Input value="0.00" className="col-span-2" readOnly />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>CST AMOUNT:</Label>
            <Input value="0.00" className="col-span-2" readOnly />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>TOTAL CESS:</Label>
            <Input value="0.00" className="col-span-2" readOnly />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>TOTAL TAX AMOUNT:</Label>
            <Input value="18810.00" className="col-span-2" readOnly />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>TOTAL AMOUNT:</Label>
            <Input value="123310.00" className="col-span-2" readOnly />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>ROUND OFF AMT:</Label>
            <Input value="0.00" className="col-span-2" readOnly />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>TOTAL TCS:</Label>
            <Input value="0.00" className="col-span-2" readOnly />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label>FINAL AMOUNT:</Label>
            <Input value="123310.00" className="col-span-2" readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalSection;
