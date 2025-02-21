
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PurchaseOrderDetails = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="grid gap-4">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>DATE:</Label>
          <Input value="08/02/2025" className="col-span-2" readOnly />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>FROM GODOWN:</Label>
          <Input value="LL LOGISTICS" className="col-span-2" readOnly />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>SERIAL NO:</Label>
          <Input value="PO/SHNT/LL LOGISTICS/2024-25/00118" className="col-span-2" readOnly />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>TRANSPORT TYPE:</Label>
          <Select defaultValue="select">
            <SelectTrigger className="col-span-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="select">Select</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>YOUR REF:</Label>
          <Input className="col-span-2" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>PAYMENT DAYS:</Label>
          <Input value="10" className="col-span-2" readOnly />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>TCS CALCULATE:</Label>
          <Select defaultValue="select">
            <SelectTrigger className="col-span-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="select">SELECT</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>TCS AMOUNT:</Label>
          <Input value="0.00" className="col-span-2" readOnly />
        </div>
      </div>

      <div className="grid gap-4">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>INDENT REFERENCE:</Label>
          <Input value="IND/SHNT/LL LOGISTICS/2024-25/00123" className="col-span-2" readOnly />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>DEPARTMENT:</Label>
          <Input value="CIVIL" className="col-span-2" readOnly />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>VENDOR:</Label>
          <Input value="ALLIED FABRICATIONS" className="col-span-2" readOnly />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>TAX:</Label>
          <Input value="CSGST" className="col-span-2" readOnly />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>DELIEVERY DATE:</Label>
          <Input value="08/02/2025" className="col-span-2" readOnly />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>REF DATE:</Label>
          <Input value="08/02/2025" className="col-span-2" readOnly />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>DUE DATE:</Label>
          <Input value="18/02/2025" className="col-span-2" readOnly />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>TCS CALCULATE:</Label>
          <Select defaultValue="select">
            <SelectTrigger className="col-span-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="select">SELECT</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>PAY BY:</Label>
          <Input value="PAY BY CREDIT" className="col-span-2" readOnly />
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrderDetails;
