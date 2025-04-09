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
import ReactApexChart from "react-apexcharts"; // Make sure to import the chart component

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const Banks = [
    // Public Sector Banks
    {
      id: 1,
      name: "State Bank of India",
      interest_rate: 7.25,
      logo: "https://upload.wikimedia.org/wikipedia/en/5/58/State_Bank_of_India_logo.svg",
      rates: [6.8, 6.75, 6.5],
      category: "public",
    },
    {
      id: 2,
      name: "Punjab National Bank",
      interest_rate: 7.25,
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Punjab_National_Bank.svg",
      rates: [6.8, 7, 6.5],
      category: "public",
    },
    {
      id: 3,
      name: "Bank of Baroda",
      interest_rate: 7.3,
      logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/BankOfBarodaLogo.svg",
      rates: [6.85, 7.15, 6.8],
      category: "public",
    },
    {
      id: 4,
      name: "Bank of India",
      interest_rate: 7.3,
      logo: "https://upload.wikimedia.org/wikipedia/en/8/80/Bank_of_India_logo.svg",
      rates: [6.8, 6.5, 6],
      category: "public",
    },
    {
      id: 5,
      name: "Canara Bank",
      interest_rate: 7.4,
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Canara_Bank_Logo.svg",
      rates: [6.85, 7.4, 6.7],
      category: "public",
    },
    {
      id: 6,
      name: "Central Bank of India",
      interest_rate: 7.5,
      logo: "https://cdn.brandfetch.io/idFKKxnbTJ/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
      rates: [6.85, 7, 6.75],
      category: "public",
    },
    {
      id: 7,
      name: "Indian Bank",
      interest_rate: 7.3,
      logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/Indian_Bank_logo.svg",
      rates: [6.1, 6.25, 6.25],
      category: "public",
    },
    {
      id: 8,
      name: "Indian Overseas Bank",
      interest_rate: 7.3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Indian_Overseas_Bank_Logo.svg",
      rates: [7.1, 6.5, 6.5],
      category: "public",
    },
    {
      id: 9,
      name: "UCO Bank",
      interest_rate: 7.3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/UCO_Bank.jpg",
      rates: [6.5, 6.3, 6.2],
      category: "public",
    },
    {
      id: 10,
      name: "Union Bank of India",
      interest_rate: 7.3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Union_Bank_of_India_Logo.svg",
      rates: [6.8, 6.7, 6.5],
      category: "public",
    },
    // Private Sector Banks
    {
      id: 11,
      name: "Axis Bank",
      interest_rate: 7.25,
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg",
      rates: [6.7, 7.1, 7],
      category: "private",
    },
    {
      id: 12,
      name: "HDFC Bank",
      interest_rate: 7.4,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg",
      rates: [6.6, 7, 7],
      category: "private",
    },
    {
      id: 13,
      name: "ICICI Bank",
      interest_rate: 7.25,
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg",
      rates: [6.7, 7, 7],
      category: "private",
    },
    {
      id: 14,
      name: "IndusInd Bank",
      interest_rate: 7.75,
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/IndusInd_Bank_SVG_Logo.svg",
      rates: [7.75, 7.25, 7.25],
      category: "private",
    },
    {
      id: 15,
      name: "DBS Bank",
      interest_rate: 7.5,
      logo: "https://upload.wikimedia.org/wikipedia/en/b/b1/DBS_Bank_Logo_%28alternative%29.svg",
      rates: [7, 6.5, 6.5],
      category: "private",
    },
    {
      id: 16,
      name: "Federal Bank",
      interest_rate: 7.5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Federal_bank_India.svg",
      rates: [7, 7.1, 7.1],
      category: "private",
    },
    {
      id: 17,
      name: "IDBI Bank",
      interest_rate: 7.4,
      logo: "https://upload.wikimedia.org/wikipedia/en/4/41/IDBI_Logo.svg",
      rates: [6.8, 6.5, 6.5],
      category: "private",
    },
    // Small Finance Banks
    {
      id: 18,
      name: "AU Small Finance Bank",
      interest_rate: 8.1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/Aubank.svg",
      rates: [7.25, 7.5, 7.25],
      category: "small_finance",
    },
    {
      id: 19,
      name: "Equitas Small Finance Bank",
      interest_rate: 8.25,
      logo: "https://www.equitasbank.com/strapi-dev/uploads/Group_2_cad9c29024.svg",
      rates: [8.1, 8, 7.25],
      category: "small_finance",
    },
    {
      id: 20,
      name: "Jana Small Finance Bank",
      interest_rate: 8.25,
      logo: "https://www.janabank.com/images/janalogo.png",
      rates: [8.25, 8.25, 8.2],
      category: "small_finance",
    },
    {
      id: 21,
      name: "Ujjivan Small Finance Bank",
      interest_rate: 8.25,
      logo: "https://upload.wikimedia.org/wikipedia/en/4/44/This_is_the_Ujjivan_Small_Finance_Bank_Official_Logo.svg",
      rates: [8.25, 7.2, 6.5],
      category: "small_finance",
    },
  ];

  const [rates, setRates] = useState(Banks[0]?.rates);
  const [state, setState] = useState({
    series: [
      {
        name: "Stock Calculator DHEERAONE",
        data: [
          { x: new Date("2025-01-01").getTime(), y: 5000 },
          { x: new Date("2025-02-01").getTime(), y: 3000 },
          { x: new Date("2025-03-01").getTime(), y: 4500 },
          { x: new Date("2025-04-01").getTime(), y: 6000 },
          { x: new Date("2025-05-01").getTime(), y: 7000 },
        ],
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: "Stock Price Movement",
        align: "left",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val.toFixed(0);
          },
        },
        title: {
          text: "Price",
        },
      },
      xaxis: {
        type: "datetime",
        tickAmount: 5, // Ensures only a few key points are shown
        labels: {
          format: "MMM yyyy", // Shows month and year
          datetimeFormatter: {
            month: "MMM yyyy", // Formats as 'Jan 2025'
          },
        },
      },
      tooltip: {
        shared: false,
        x: {
          format: "MMM yyyy", // Tooltip shows only month & year
        },
        y: {
          formatter: function (val) {
            return val.toFixed(0);
          },
        },
      },
    },
  });
  const { register, handleSubmit, setValue } = useForm();
  const [maturityAmount, setMaturityAmount] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

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
                  <div id="chart">
                    {/* Render the ApexChart here */}
                    <ReactApexChart
                      options={state.options}
                      series={state.series}
                      type="area"
                      height={350}
                    />
                  </div>
                  <div id="html-dist"></div>
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
                            onClick={() => {
                              setRates(Banks?.rates);
                              setValue("interest_rate", bank.interest_rate);
                            }}
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
                                    setSelectedCategory("small_finance")
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
