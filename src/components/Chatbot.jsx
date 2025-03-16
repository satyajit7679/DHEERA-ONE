import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([{ text: "Hello! How can I assist you?", type: "bot" }]);

    const predefinedReplies = [
        "Tell me about your services",
        "How can I contact support?",
        "What are your working hours?",
        "Do you have a refund policy?"
    ];

    const handleUserMessage = (message) => {
        setMessages([...messages, { text: message, type: "user" }]);

        setTimeout(() => {
            let botReply = "I'm here to assist you!";
            if (message.includes("services")) botReply = "We offer various tech solutions.";
            if (message.includes("support")) botReply = "You can contact support at support@example.com.";
            if (message.includes("hours")) botReply = "We are available 24/7.";
            if (message.includes("refund")) botReply = "Yes, we have a 30-day refund policy.";

            setMessages(prev => [...prev, { text: botReply, type: "bot" }]);
        }, 1000);
    };

    return (
        <>
            {/* Floating Chat Button */}
            <motion.button
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-gray-900 text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-all"
                whileTap={{ scale: 0.9 }}
            >
                <MessageCircle size={24} />
            </motion.button>

            {/* Chat Modal */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-20 sm:bottom-24 right-4 sm:right-8 w-[90%] sm:w-80 bg-white shadow-lg rounded-lg border border-gray-300"
                >
                    {/* Header */}
                    <div className="bg-gray-900 text-white p-3 flex justify-between items-center rounded-t-lg">
                        <h2 className="text-lg font-medium">Chatbot</h2>
                        <button onClick={() => setOpen(false)} className="hover:text-gray-200">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div className="p-4 h-64 sm:h-72 overflow-y-auto space-y-2">
                        {messages.map((msg, index) => (
                            <div key={index} className={`p-2 rounded-lg text-sm sm:text-base max-w-[80%] ${msg.type === "bot" ? "bg-gray-200 self-start" : "bg-blue-100 self-end"}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* Predefined Replies */}
                    <div className="border-t p-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {predefinedReplies.map((reply, index) => (
                                <button
                                    key={index}
                                    className="text-black border border-gray-500 px-3 py-1 rounded text-sm hover:bg-gray-100 transition-all"
                                    onClick={() => handleUserMessage(reply)}
                                >
                                    {reply}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Chatbot;
