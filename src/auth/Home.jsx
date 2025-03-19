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
// import Banks from "../components/Banks";

function Home() {
  const { register, handleSubmit, setValue } = useForm();
  const [maturityAmount, setMaturityAmount] = useState(null);
  const [showPopup, setShowPopup] = useState(false);


  const Banks = [
    {
      id: 1,
      name: "HDFC Bank",
      interest_rate: 10,
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/HDFC_Bank_Logo.svg",
    },
    {
      id: 2,
      name: "SBI Bank",
      interest_rate: 7,
      logo: "https://upload.wikimedia.org/wikipedia/en/5/58/State_Bank_of_India_logo.svg",
    },
    {
      id: 3,
      name: "Bandhan Bank",
      interest_rate: 8,
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Bandhan_Bank_logo.svg",
    },
    {
      id: 4,
      name: "Axis Bank",
      interest_rate: 7,
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Axis_Bank_logo.svg",
    },
    {
      id: 5,
      name: "PNB Bank",
      interest_rate: 7,
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Punjab_National_Bank_Logo.svg",
    },
  ];

let bank = Banks; 
  const calculatorDataSubmit = (data) => {
    const { amount, interest_rate, tenures } = data;
    if (!amount || !interest_rate || !tenures) return;

    const interest =
      (Number(amount) * Number(interest_rate) * Number(tenures)) / 100;
    const totalAmount = Number(amount) + interest;

    setMaturityAmount(totalAmount);
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
                      <div className="flex flex-wrap gap-2">
                    
                          <Button
                            key={bank.id}
                            size="sm"
                            color="blue-gray"
                            variant="outlined"
                            onClick={() => {setValue("interest_rate", bank.interest_rate)
                            }}
                            type="button"
                          >
                            <img src={bank.logo} alt="logo" className="size-10" />

                          </Button>
                        
                        <div className=" display: flex justify-center">
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
                        
                      </div>
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
