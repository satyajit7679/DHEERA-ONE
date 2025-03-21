import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you with Fixed Deposits?", type: "bot" },
  ]);
  const [availableReplies, setAvailableReplies] = useState([
    "What is a Fixed Deposit?",
    "How to calculate FD interest?",
    "What are the FD tenure options?",
    "Is there a penalty for early withdrawal?",
    "Common FD problems faced by users",
    "Bank-wise FD interest rates",
    "What happens if I don't withdraw my FD after maturity?",
    "Can I take a loan against my FD?",
    "What is the tax implication on FD interest?",
    "Which FD type gives the highest returns?",
  ]);

  const nestedReplies = {
    "What is a Fixed Deposit?":
      "A Fixed Deposit (FD) is a financial instrument where you deposit money for a fixed tenure at a predetermined interest rate.",
    "How to calculate FD interest?":
      "Formula: A = P (1 + r/n)^(nt), where A = maturity amount, P = principal, r = annual interest rate, n = times compounded per year, t = tenure.",
    "What are the FD tenure options?":
      "FD tenures range from 7 days to 10 years, with some banks offering special tenure options for better rates.",
    "Is there a penalty for early withdrawal?":
      "Yes, banks usually charge a penalty of 0.5% - 1% on the applicable interest rate.",
    "Common FD problems faced by users":
      "Common issues include premature withdrawal penalties, TDS deductions, auto-renewal confusion, and documentation errors.",
    "What happens if I don't withdraw my FD after maturity?":
      "If you don’t withdraw, the FD may auto-renew based on the bank's policy, possibly at a lower interest rate.",
    "Can I take a loan against my FD?":
      "Yes, many banks offer loans up to 90% of the FD value at a slightly higher interest rate.",
    "What is the tax implication on FD interest?":
      "If the interest earned exceeds ₹40,000 (₹50,000 for seniors), TDS at 10% is deducted unless you submit Form 15G/15H.",
    "Which FD type gives the highest returns?":
      "Senior citizen FDs, tax-saving FDs (5-year lock-in), and special tenure FDs often provide the highest interest rates.",
  };

  const bankInterestRates = {
    SBI: "SBI FD rates: 3.00% - 7.10% p.a.",
    HDFC: "HDFC FD rates: 3.00% - 7.25% p.a.",
    ICICI: "ICICI FD rates: 3.00% - 7.20% p.a.",
    "Axis Bank": "Axis Bank FD rates: 3.50% - 7.15% p.a.",
    PNB: "PNB FD rates: 3.50% - 7.05% p.a.",
  };

  const moreBanks = {
    "Kotak Mahindra Bank": "Kotak Mahindra Bank FD rates: 3.50% - 7.25% p.a.",
    "Canara Bank": "Canara Bank FD rates: 3.25% - 7.10% p.a.",
    "Yes Bank": "Yes Bank FD rates: 3.50% - 7.50% p.a.",
    "IDFC First Bank": "IDFC First Bank FD rates: 3.75% - 7.75% p.a.",
  };

  const handleUserMessage = (message) => {
    setMessages((prev) => [...prev, { text: message, type: "user" }]);

    setTimeout(() => {
      let botReply = "I'm here to assist you!";
      if (bankInterestRates[message]) {
        botReply = bankInterestRates[message];
      } else if (moreBanks[message]) {
        botReply = moreBanks[message];
      } else if (nestedReplies[message]) {
        botReply = nestedReplies[message];
      }

      setMessages((prev) => [...prev, { text: botReply, type: "bot" }]);

      if (message === "Bank-wise FD interest rates") {
        setAvailableReplies([
          ...Object.keys(bankInterestRates),
          "More Banks",
          "Back to Main Menu",
        ]);
      } else if (message === "More Banks") {
        setAvailableReplies([...Object.keys(moreBanks), "Back to Bank List"]);
      } else if (message === "Back to Bank List") {
        setAvailableReplies([
          ...Object.keys(bankInterestRates),
          "More Banks",
          "Back to Main Menu",
        ]);
      } else if (nestedReplies[message]) {
        setAvailableReplies(["Back to Main Menu"]);
      } else if (message === "Back to Main Menu") {
        setAvailableReplies([
          "What is a Fixed Deposit?",
          "How to calculate FD interest?",
          "What are the FD tenure options?",
          "Is there a penalty for early withdrawal?",
          "Common FD problems faced by users",
          "Bank-wise FD interest rates",
          "What happens if I don't withdraw my FD after maturity?",
          "Can I take a loan against my FD?",
          "What is the tax implication on FD interest?",
          "Which FD type gives the highest returns?",
        ]);
      }
    }, 800);
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-gray-600 text-white p-4 rounded-full shadow-lg hover:bg-gray-500 transition-all"
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-20 right-4 max-w-[90%] sm:w-96 bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden h-[550px] flex flex-col"
        >
          <div className="bg-gray-600 text-white p-4 flex justify-between items-center rounded-t-2xl">
            <h2 className="text-lg font-medium">FD Chatbot</h2>
            <button
              onClick={() => setOpen(false)}
              className="hover:text-gray-300"
            >
              <X size={22} />
            </button>
          </div>

          {/* Chat messages */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`p-3 rounded-xl text-sm max-w-[80%] flex items-center ${
                  msg.type === "user"
                    ? "bg-gray-600 text-white self-end shadow ml-auto" // Right side (User)
                    : "bg-white text-gray-800 self-start shadow mr-auto" // Left side (Bot)
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {msg.text}
              </motion.div>
            ))}
          </div>

          {/* Reply options */}
          <div className="border-t p-3 bg-white shadow-md">
            <div className="grid grid-cols-2 gap-2">
              {availableReplies.map((reply, index) => (
                <motion.button
                  key={index}
                  className="text-gray-800 bg-gray-200 px-3 py-2 rounded-lg text-xs hover:bg-gray-300 transition-all shadow-sm"
                  onClick={() => handleUserMessage(reply)}
                  whileTap={{ scale: 0.95 }}
                >
                  {reply}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Chatbot;
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you with Fixed Deposits?", type: "bot" },
  ]);
  const [availableReplies, setAvailableReplies] = useState([
    "What is a Fixed Deposit?",
    "How to calculate FD interest?",
    "What are the FD tenure options?",
    "Is there a penalty for early withdrawal?",
    "Common FD problems faced by users",
    "Bank-wise FD interest rates",
    "What happens if I don't withdraw my FD after maturity?",
    "Can I take a loan against my FD?",
    "What is the tax implication on FD interest?",
    "Which FD type gives the highest returns?",
  ]);

  const nestedReplies = {
    "What is a Fixed Deposit?":
      "A Fixed Deposit (FD) is a financial instrument where you deposit money for a fixed tenure at a predetermined interest rate.",
    "How to calculate FD interest?":
      "Formula: A = P (1 + r/n)^(nt), where A = maturity amount, P = principal, r = annual interest rate, n = times compounded per year, t = tenure.",
    "What are the FD tenure options?":
      "FD tenures range from 7 days to 10 years, with some banks offering special tenure options for better rates.",
    "Is there a penalty for early withdrawal?":
      "Yes, banks usually charge a penalty of 0.5% - 1% on the applicable interest rate.",
    "Common FD problems faced by users":
      "Common issues include premature withdrawal penalties, TDS deductions, auto-renewal confusion, and documentation errors.",
    "What happens if I don't withdraw my FD after maturity?":
      "If you don’t withdraw, the FD may auto-renew based on the bank's policy, possibly at a lower interest rate.",
    "Can I take a loan against my FD?":
      "Yes, many banks offer loans up to 90% of the FD value at a slightly higher interest rate.",
    "What is the tax implication on FD interest?":
      "If the interest earned exceeds ₹40,000 (₹50,000 for seniors), TDS at 10% is deducted unless you submit Form 15G/15H.",
    "Which FD type gives the highest returns?":
      "Senior citizen FDs, tax-saving FDs (5-year lock-in), and special tenure FDs often provide the highest interest rates.",
  };

  const bankInterestRates = {
    SBI: "SBI FD rates: 3.00% - 7.10% p.a.",
    HDFC: "HDFC FD rates: 3.00% - 7.25% p.a.",
    ICICI: "ICICI FD rates: 3.00% - 7.20% p.a.",
    "Axis Bank": "Axis Bank FD rates: 3.50% - 7.15% p.a.",
    PNB: "PNB FD rates: 3.50% - 7.05% p.a.",
  };

  const moreBanks = {
    "Kotak Mahindra Bank": "Kotak Mahindra Bank FD rates: 3.50% - 7.25% p.a.",
    "Canara Bank": "Canara Bank FD rates: 3.25% - 7.10% p.a.",
    "Yes Bank": "Yes Bank FD rates: 3.50% - 7.50% p.a.",
    "IDFC First Bank": "IDFC First Bank FD rates: 3.75% - 7.75% p.a.",
  };

  const handleUserMessage = (message) => {
    setMessages((prev) => [...prev, { text: message, type: "user" }]);

    setTimeout(() => {
      let botReply = "I'm here to assist you!";
      if (bankInterestRates[message]) {
        botReply = bankInterestRates[message];
      } else if (moreBanks[message]) {
        botReply = moreBanks[message];
      } else if (nestedReplies[message]) {
        botReply = nestedReplies[message];
      }

      setMessages((prev) => [...prev, { text: botReply, type: "bot" }]);

      if (message === "Bank-wise FD interest rates") {
        setAvailableReplies([
          ...Object.keys(bankInterestRates),
          "More Banks",
          "Back to Main Menu",
        ]);
      } else if (message === "More Banks") {
        setAvailableReplies([...Object.keys(moreBanks), "Back to Bank List"]);
      } else if (message === "Back to Bank List") {
        setAvailableReplies([
          ...Object.keys(bankInterestRates),
          "More Banks",
          "Back to Main Menu",
        ]);
      } else if (nestedReplies[message]) {
        setAvailableReplies(["Back to Main Menu"]);
      } else if (message === "Back to Main Menu") {
        setAvailableReplies([
          "What is a Fixed Deposit?",
          "How to calculate FD interest?",
          "What are the FD tenure options?",
          "Is there a penalty for early withdrawal?",
          "Common FD problems faced by users",
          "Bank-wise FD interest rates",
          "What happens if I don't withdraw my FD after maturity?",
          "Can I take a loan against my FD?",
          "What is the tax implication on FD interest?",
          "Which FD type gives the highest returns?",
        ]);
      }
    }, 800);
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-gray-600 text-white p-4 rounded-full shadow-lg hover:bg-gray-500 transition-all"
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-20 right-4 max-w-[90%] sm:w-96 bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden h-[550px] flex flex-col"
        >
          <div className="bg-gray-600 text-white p-4 flex justify-between items-center rounded-t-2xl">
            <h2 className="text-lg font-medium">FD Chatbot</h2>
            <button
              onClick={() => setOpen(false)}
              className="hover:text-gray-300"
            >
              <X size={22} />
            </button>
          </div>

          {/* Chat messages */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`p-3 rounded-xl text-sm max-w-[80%] flex items-center ${
                  msg.type === "user"
                    ? "bg-gray-600 text-white self-end shadow ml-auto" // Right side (User)
                    : "bg-white text-gray-800 self-start shadow mr-auto" // Left side (Bot)
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {msg.text}
              </motion.div>
            ))}
          </div>

          {/* Reply options */}
          <div className="border-t p-3 bg-white shadow-md">
            <div className="grid grid-cols-2 gap-2">
              {availableReplies.map((reply, index) => (
                <motion.button
                  key={index}
                  className="text-gray-800 bg-gray-200 px-3 py-2 rounded-lg text-xs hover:bg-gray-300 transition-all shadow-sm"
                  onClick={() => handleUserMessage(reply)}
                  whileTap={{ scale: 0.95 }}
                >
                  {reply}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Chatbot;
