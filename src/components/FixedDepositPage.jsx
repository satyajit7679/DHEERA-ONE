import { useState } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import BankFDTable from "./BankFDTable";

const FixedDepositPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What is a Fixed Deposit?",
      answer:
        "A Fixed Deposit (FD) is a type of savings account that provides a higher interest rate compared to a regular savings account.",
    },
    {
      question: "What are the benefits of an FD?",
      answer:
        "FDs offer security, fixed returns, flexible tenure, and higher interest rates than savings accounts.",
    },
    {
      question: "How is interest calculated?",
      answer:
        "Interest is calculated based on the principal amount, tenure, and the interest rate applicable at the time of deposit.",
    },
    {
      question: "Can I withdraw my FD before maturity?",
      answer:
        "Yes, but premature withdrawal may result in a penalty and reduced interest rates.",
    },
    {
      question: "Are Fixed Deposits taxable?",
      answer:
        "Yes, TDS (Tax Deducted at Source) is applicable on FD interest earnings exceeding a certain limit.",
    },
  ];

  return (
    <div className="bg-gray-50 w-full">
      <Header />
      {/* Header Section
      <header className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600">
          Fixed Deposits (FD)
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Secure your savings with a high-interest fixed deposit.
        </p>
      </header> */}

      {/* Benefits Section
      <section className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold text-gray-800">
          Benefits of Fixed Deposits
        </h2>
        <ul className="mt-4 space-y-3">
          {[
            "Guaranteed returns",
            "Flexible tenure options",
            "Safe investment choice",
            "Higher interest rates than savings accounts",
            "Easy online investment",
          ].map((benefit, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 text-gray-700"
            >
              <CheckCircle size={20} className="text-green-500" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      // {/* Interest Rate Section 
      <section className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Current Interest Rates
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 bg-white rounded-lg shadow-md">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="p-3 text-left">Bank</th>
                <th className="p-3 text-left">Tenure</th>
                <th className="p-3 text-left">Interest Rate</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  bank: "State Bank of India (SBI)",
                  tenure: "7 days to 10 years",
                  rate: "3.50% – 7.00%",
                },
                { bank: "UCO Bank	", tenure: "7 days to 10 years	", rate: "3.00% – 7.10%" },
                { bank: "ICICI Bank", tenure: "7 days to 10 years	", rate: "3.00% – 7.25%" },
                { bank: "Axis Bank", tenure: "5 Years", rate: "7.50%" },
              ].map((fd, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-200 hover:bg-gray-100 transition"
                >
                  <td className="p-3">{fd.bank}</td>
                  <td className="p-3">{fd.tenure}</td>
                  <td className="p-3">{fd.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section> */}
<BankFDTable />
      {/* FAQ Section */}
      <section className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200 transition-all duration-300"
            >
              <button
                className="flex justify-between items-center w-full text-gray-800 text-lg font-medium focus:outline-none"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                {faq.question}
                <ChevronDown
                  size={20}
                  className={`transition-transform transform ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFAQ === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FixedDepositPage;
