import { useForm } from "react-hook-form";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import Chatbot from "../components/Chatbot";

function Home() {
  const { register, handleSubmit, setValue } = useForm();
  const [maturityAmount, setMaturityAmount] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);


  const Banks = [
    {
      id: 1,
      name: "Jana Small Finance Bank",
      interest_rate: 8.25,
      logo: "https://www.janabank.com/images/media-kit/jana-logo/thumb/jana-bank-master-logo-thumb.png",
      category: "small finance",
    },
    {
      id: 2,
      name: "Equitas Small Finance Bank",
      interest_rate: 8.25,
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Equitas-logo.png",
      category: "small finance",
    },
    {
      id: 3,
      name: "AU Bank",
      interest_rate: 8.1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/Aubank.svg",
      category: "small finance",
    },
    {
      id: 4,
      name: "PNB Bank",
      interest_rate: 7,
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Punjab_National_Bank.svg",
      category: "private",
    },

    {
      id: 5,
      name: "Axis Bank",
      interest_rate: 7,
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg",
      category: "private",
    },

    {
      id: 6,
      name: "Bandhan Bank",
      interest_rate: 8,
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Bandhan_Bank_Svg_Logo.svg",
      category :"private",
    },
    {
      id: 7,
      name: "SBI Bank",
      interest_rate: 7,
      logo: "https://upload.wikimedia.org/wikipedia/en/5/58/State_Bank_of_India_logo.svg",
      category: "public",
    },
    {
      id: 8,
      name: "HDFC Bank",
      interest_rate: 10,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg",
      category: "private",
    },
  ];

  const calculatorDataSubmit = (data) => {
    const { amount, interest_rate, tenures } = data;
    if (!amount || !interest_rate || !tenures) return;

    const interest =
      (Number(amount) * Number(interest_rate) * Number(tenures)) / 100;
    setMaturityAmount(Number(amount) + interest);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 py-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Section */}
            <div className="flex justify-center">
              <Card className="w-full max-w-md shadow-lg">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    UI/UX Review Check
                  </Typography>
                  <Typography className="text-gray-600">
                    A simple UI/UX review section with a responsive design.
                    Improve your designs and review UI components efficiently.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0 flex justify-center">
                  <Button>Read More</Button>
                </CardFooter>
              </Card>
            </div>

            {/* Right Section - Calculator */}
            <div className="flex flex-col items-center">
              <Card className="w-full max-w-md shadow-lg">
                <form onSubmit={handleSubmit(calculatorDataSubmit)}>
                  <CardBody>
                    <Typography
                      variant="h4"
                      color="blue-gray"
                      className="mb-4 text-center font-bold"
                    >
                      Stock Calculator
                    </Typography>

                    {/* Amount Input */}
                    <div className="mb-3">
                      <Typography className="font-medium">
                        Enter Your Amount
                      </Typography>
                      <Input
                        label="Amount"
                        type="number"
                        {...register("amount", { required: true })}
                      />
                    </div>

                    {/* Tenure Selection */}
                    <div className="mb-3">
                      <Typography className="font-medium">
                        Choose Tenure
                      </Typography>
                      <select
                        className="w-full p-2 border rounded-lg text-gray-900"
                        {...register("tenures", { required: true })}
                      >
                        <option value="">Select Tenure</option>
                        <option value="6">6 Months</option>
                        <option value="12">12 Months</option>
                        <option value="18">18 Months</option>
                        <option value="24">24 Months</option>
                      </select>
                    </div>

                    {/* Bank Selection */}
                    <div className="mb-3">
                      <Typography className="font-medium">
                        Choose Your Bank
                      </Typography>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {Banks.slice(0, 4).map((bank) => (
                          <Button
                            key={bank.id}
                            size="sm"
                            variant="outlined"
                            onClick={() =>
                              setValue("interest_rate", bank.interest_rate)
                            }
                            type="button"
                          >
                            <img src={bank.logo} alt="logo" className="h-10" />
                          </Button>
                        ))}
                        <Button
                          size="sm"
                          variant="outlined"
                          onClick={() => setShowPopup(true)}
                        >
                          More
                        </Button>
                      </div>

                      {/* Popup Modal */}
                      {showPopup && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                          <div className="bg-white p-4 shadow-lg rounded-lg border w-80 max-w-sm">
                            <h3 className="text-lg font-semibold mb-2 text-center">
                              Select a Bank
                            </h3>

                            {!selectedCategory ? (
                              <div className="flex flex-wrap gap-2 justify-center">
                                <Button
                                  size="sm"
                                  variant="outlined"
                                  onClick={() => setSelectedCategory("public")}
                                >
                                  Public
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outlined"
                                  onClick={() => setSelectedCategory("private")}
                                >
                                  Private
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outlined"
                                  onClick={() =>
                                    setSelectedCategory("small finance")
                                  }
                                >
                                  Small Finance
                                </Button>
                              </div>
                            ) : (
                              <div>
                                <div className="flex flex-wrap gap-2 justify-center">
                                  {Banks.filter(
                                    (bank) => bank.category === selectedCategory
                                  ).map((bank) => (
                                    <Button
                                      key={bank.id}
                                      size="sm"
                                      variant="outlined"
                                      onClick={() => {
                                        setValue(
                                          "interest_rate",
                                          bank.interest_rate
                                        );
                                        setShowPopup(false);
                                        setSelectedCategory(null);
                                      }}
                                      type="button"
                                    >
                                      <img
                                        src={bank.logo}
                                        alt="logo"
                                        className="h-6 inline-block mr-2"
                                      />
                                      {bank.name}
                                    </Button>
                                  ))}
                                </div>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="mt-3 w-full"
                                  onClick={() => setSelectedCategory(null)}
                                >
                                  Back
                                </Button>
                              </div>
                            )}

                            <Button
                              size="sm"
                              variant="ghost"
                              className="mt-3 w-full"
                              onClick={() => {
                                setShowPopup(false);
                                setSelectedCategory(null);
                              }}
                            >
                              Close
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardBody>
                  <CardFooter className="flex justify-center">
                    <Button type="submit">Calculate</Button>
                  </CardFooter>
                </form>

                {maturityAmount && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="text-center"
                    >
                      Maturity Amount: ₹{maturityAmount.toFixed(2)}
                    </Typography>
                  </div>
                )}
              </Card>
            </div>
          </div>
          <Chatbot />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
