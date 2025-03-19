import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const BankSelector = ({ Banks, setValue }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative">
      {/* More Button to Open Popup */}
      <Button size="sm" variant="outlined" onClick={() => setShowPopup(true)}>
        More
      </Button>

      {/* Popup Modal */}
      {showPopup && (
        <div className="absolute top-12 left-0 bg-white p-4 shadow-lg rounded-lg border w-64">
          <h3 className="text-lg font-semibold mb-2">Select a Bank</h3>
          <div className="flex flex-wrap gap-2">
            {Banks.map((bank) => (
              <Button
                key={bank.id}
                size="sm"
                variant="outlined"
                onClick={() => {
                  setValue("interest_rate", bank.interest_rate);
                  setShowPopup(false); // Close Popup After Selection
                }}
                type="button"
              >
                <img src={bank.logo} alt="logo" className="size-6 inline-block mr-2" />
                {bank.name}
              </Button>
            ))}
          </div>
          {/* Close Button */}
          <Button
            size="sm"
            variant="ghost"
            className="mt-3"
            onClick={() => setShowPopup(false)}
          >
            Close
          </Button>
        </div>
      )}
    </div>
  );
};

export default BankSelector;
