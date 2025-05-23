import React from "react";

const banksData = {
  publicSector: [
    {
      bank: "State Bank of India",
      highestRate: 7.25,
      oneYear: 6.8,
      threeYear: 6.75,
      fiveYear: 6.5,
    },
    {
      bank: "Punjab National Bank",
      highestRate: 7.25,
      oneYear: 6.8,
      threeYear: 7.0,
      fiveYear: 6.5,
    },
    {
      bank: "Bank of Baroda",
      highestRate: 7.3,
      oneYear: 6.85,
      threeYear: 7.15,
      fiveYear: 6.8,
    },
    {
      bank: "Bank of India",
      highestRate: 7.3,
      oneYear: 6.8,
      threeYear: 6.5,
      fiveYear: 6.0,
    },
    {
      bank: "Canara Bank",
      highestRate: 7.4,
      oneYear: 6.85,
      threeYear: 7.4,
      fiveYear: 6.7,
    },
    {
      bank: "Central Bank of India",
      highestRate: 7.5,
      oneYear: 6.85,
      threeYear: 7.0,
      fiveYear: 6.75,
    },
    {
      bank: "Indian Bank",
      highestRate: 7.3,
      oneYear: 6.1,
      threeYear: 6.25,
      fiveYear: 6.25,
    },
    {
      bank: "Indian Overseas Bank",
      highestRate: 7.3,
      oneYear: 7.1,
      threeYear: 6.5,
      fiveYear: 6.5,
    },
    {
      bank: "UCO Bank",
      highestRate: 7.3,
      oneYear: 6.5,
      threeYear: 6.3,
      fiveYear: 6.2,
    },
    {
      bank: "Union Bank of India",
      highestRate: 7.3,
      oneYear: 6.8,
      threeYear: 6.7,
      fiveYear: 6.5,
    },
  ],
  privateSector: [
    {
      bank: "Axis Bank",
      highestRate: 7.25,
      oneYear: 6.7,
      threeYear: 7.1,
      fiveYear: 7.0,
    },
    {
      bank: "HDFC Bank",
      highestRate: 7.4,
      oneYear: 6.6,
      threeYear: 7.0,
      fiveYear: 7.0,
    },
    {
      bank: "ICICI Bank",
      highestRate: 7.25,
      oneYear: 6.7,
      threeYear: 7.0,
      fiveYear: 7.0,
    },
    {
      bank: "IndusInd Bank",
      highestRate: 7.75,
      oneYear: 7.75,
      threeYear: 7.25,
      fiveYear: 7.25,
    },
    {
      bank: "DBS Bank",
      highestRate: 7.5,
      oneYear: 7.0,
      threeYear: 6.5,
      fiveYear: 6.5,
    },
    {
      bank: "Federal Bank",
      highestRate: 7.5,
      oneYear: 7.0,
      threeYear: 7.1,
      fiveYear: 7.1,
    },
    {
      bank: "IDBI Bank",
      highestRate: 7.4,
      oneYear: 6.8,
      threeYear: 6.5,
      fiveYear: 6.5,
    },
    {
      bank: "Kotak Mahindra Bank",
      highestRate: 7.4,
      oneYear: 7.1,
      threeYear: 7.0,
      fiveYear: 6.2,
    },
    {
      bank: "RBL Bank",
      highestRate: 8.0,
      oneYear: 7.5,
      threeYear: 7.5,
      fiveYear: 7.1,
    },
    {
      bank: "SBM Bank India",
      highestRate: 8.25,
      oneYear: 7.05,
      threeYear: 7.3,
      fiveYear: 7.75,
    },
    {
      bank: "Yes Bank",
      highestRate: 8.0,
      oneYear: 7.75,
      threeYear: 7.25,
      fiveYear: 7.25,
    },
  ],
  smallFinanceBanks: [
    {
      bank: "AU Small Finance Bank",
      highestRate: 8.1,
      oneYear: 7.25,
      threeYear: 7.5,
      fiveYear: 7.25,
    },
    {
      bank: "Equitas Small Finance Bank",
      highestRate: 8.25,
      oneYear: 8.1,
      threeYear: 8.0,
      fiveYear: 7.25,
    },
    {
      bank: "Jana Small Finance Bank",
      highestRate: 8.25,
      oneYear: 8.25,
      threeYear: 8.25,
      fiveYear: 8.2,
    },
    {
      bank: "North East Small Finance Bank",
      highestRate: 9.0,
      oneYear: 7.0,
      threeYear: 9.0,
      fiveYear: 8.0,
    },
    {
      bank: "Ujjivan Small Finance Bank",
      highestRate: 8.25,
      oneYear: 8.25,
      threeYear: 7.2,
      fiveYear: 6.5,
    },
  ],
};

const FDTable = ({ title, data }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md mt-20">
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <table className="w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Bank</th>
            <th className="p-2 border">Highest Rate (%)</th>
            <th className="p-2 border">1-Year (%)</th>
            <th className="p-2 border">3-Year (%)</th>
            <th className="p-2 border">5-Year (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((bank, index) => (
            <tr key={index} className="text-center border">
              <td className="p-2 border">{bank.bank}</td>
              <td className="p-2 border">{bank.highestRate}</td>
              <td className="p-2 border">{bank.oneYear}</td>
              <td className="p-2 border">{bank.threeYear}</td>
              <td className="p-2 border">{bank.fiveYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const BankFDTable = () => {
  return (
    <div className="p-6 space-y-6">
      <FDTable title="Public Sector Banks" data={banksData.publicSector} />
      <FDTable title="Private Sector Banks" data={banksData.privateSector} />
      <FDTable title="Small Finance Banks" data={banksData.smallFinanceBanks} />
    </div>
  );
};

export default BankFDTable;
