
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import PurchaseOrderDetails from '@/components/PurchaseOrderDetails';
import ItemsTable from '@/components/ItemsTable';
import OverheadsTable from '@/components/OverheadsTable';
import AdvancesSection from '@/components/AdvancesSection';
import TotalSection from '@/components/TotalSection';
import TermsAndConditions from '@/components/TermsAndConditions';

const Index = () => {
  const [activeTab, setActiveTab] = useState('PRINT');

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm">
        <div className="border-b p-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">DETAILS</h1>
          <div className="flex gap-4">
            {['PRINT', 'EXCEL', 'PDF'].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "outline"}
                onClick={() => setActiveTab(tab)}
                className="min-w-[80px]"
              >
                {tab}
              </Button>
            ))}
            <Button variant="ghost" className="ml-4">✕</Button>
          </div>
        </div>
        
        <div className="p-6 space-y-8">
          <div className="bg-zinc-700 text-white p-3">
            <h2 className="font-medium">PURCHASE ORDER</h2>
          </div>
          
          <PurchaseOrderDetails />
          <ItemsTable />
          <OverheadsTable />
          <AdvancesSection />
          <TotalSection />
          <TermsAndConditions />
        </div>
      </div>
    </div>
  );
};

export default Index;
