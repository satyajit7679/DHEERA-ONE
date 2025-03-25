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

  const fdRates = {
    "Public Sector Banks": {
      "State Bank of India":
        "Highest: 7.25%, 1-Year: 6.8%, 3-Year: 6.75%, 5-Year: 6.5%",
      "Punjab National Bank":
        "Highest: 7.25%, 1-Year: 6.8%, 3-Year: 7%, 5-Year: 6.5%",
      "Bank of Baroda":
        "Highest: 7.3%, 1-Year: 6.85%, 3-Year: 7.15%, 5-Year: 6.8%",
      "Canara Bank": "Highest: 7.4%, 1-Year: 6.85%, 3-Year: 7.4%, 5-Year: 6.7%",
    },
    "Private Sector Banks": {
      "HDFC Bank": "Highest: 7.4%, 1-Year: 6.6%, 3-Year: 7%, 5-Year: 7%",
      "ICICI Bank": "Highest: 7.25%, 1-Year: 6.7%, 3-Year: 7%, 5-Year: 7%",
      "IndusInd Bank":
        "Highest: 7.75%, 1-Year: 7.75%, 3-Year: 7.25%, 5-Year: 7.25%",
    },
    "Small Finance Banks": {
      "AU Small Finance Bank":
        "Highest: 8.1%, 1-Year: 7.25%, 3-Year: 7.5%, 5-Year: 7.25%",
      "Equitas Small Finance Bank":
        "Highest: 8.25%, 1-Year: 8.1%, 3-Year: 8%, 5-Year: 7.25%",
      "Jana Small Finance Bank":
        "Highest: 8.25%, 1-Year: 8.25%, 3-Year: 8.25%, 5-Year: 8.2%",
    },
  };

  const handleUserMessage = (message) => {
    setMessages((prev) => [...prev, { text: message, type: "user" }]);

    setTimeout(() => {
      let botReply = "I'm here to assist you!";
      if (message === "Bank-wise FD interest rates") {
        setAvailableReplies([...Object.keys(fdRates), "Back to Main Menu"]);
        botReply = "Select a category to view FD interest rates.";
      } else if (fdRates[message]) {
        setAvailableReplies([
          ...Object.keys(fdRates[message]),
          "Back to Bank List",
        ]);
        botReply = `Here are the FD rates for ${message}:`;
      } else if (Object.values(fdRates).some((banks) => banks[message])) {
        const category = Object.keys(fdRates).find(
          (key) => fdRates[key][message]
        );
        botReply = fdRates[category][message];
        setAvailableReplies(["Back to Bank List"]);
      } else if (message === "Back to Bank List") {
        setAvailableReplies([...Object.keys(fdRates), "Back to Main Menu"]);
        botReply = "Select a category to view FD interest rates.";
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
        botReply = "Back to main options.";
      }
      setMessages((prev) => [...prev, { text: botReply, type: "bot" }]);
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
        <motion.div className="fixed bottom-20 right-4 max-w-[90%] sm:w-96 bg-white shadow-xl rounded-2xl overflow-hidden h-[550px] flex flex-col">
          <div className="bg-gray-600 text-white p-4 flex justify-between items-center">
            <h2 className="text-lg font-medium">FD Chatbot</h2>
            <button onClick={() => setOpen(false)}>
              <X size={22} />
            </button>
          </div>
          <div className="p-4 flex-1 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`p-3 rounded-xl text-sm max-w-[80%] ${
                  msg.type === "user"
                    ? "bg-gray-600 text-white ml-auto"
                    : "bg-white text-gray-800"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}
          </div>
          <div className="border-t p-3 bg-white">
            <div className="grid grid-cols-2 gap-2">
              {availableReplies.map((reply, index) => (
                <motion.button
                  key={index}
                  className="text-gray-800 bg-gray-200 px-3 py-50 rounded-lg hover:bg-gray-300"
                  onClick={() => handleUserMessage(reply)}
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
