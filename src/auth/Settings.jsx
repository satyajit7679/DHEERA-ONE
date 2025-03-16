import { useState } from "react";
import {
  Button,
  Input,
  Textarea,
  Card,
  Tab,
  Tabs,
  TabsHeader,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("basic-details");

  return (
    <>
    <div className="bg-gray-50 min-h-screen mt-20">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-8 px-4">
        <Card className="p-6 shadow-md w-full">
          {/* Settings Tabs */}
          <Tabs value={activeTab} onChange={(val) => setActiveTab(val)}>
            <TabsHeader className="w-full flex overflow-x-auto bg-white shadow-sm rounded-md scrollbar-hide">
              {["basic-details", "reports", "change-password"].map((tab) => (
                <Tab
                  key={tab}
                  value={tab}
                  className="px-4 py-2 whitespace-nowrap"
                >
                  {tab.replace("-", " ").toUpperCase()}
                </Tab>
              ))}
            </TabsHeader>

            <TabsBody>
              {/* Basic Details */}
              <TabPanel value="basic-details">
                <form className="mt-6 space-y-6">
                  <Input label="Full Name" defaultValue="John Doe" className="w-full" />
                  <Input type="email" label="Email" defaultValue="john@example.com" className="w-full" />
                  <Input type="tel" label="Phone Number" defaultValue="+91 9876543210" className="w-full" />
                  <Input type="date" label="Date of Birth" className="w-full" />
                  <Textarea label="Address" className="w-full" />
                  <Button color="gray" fullWidth>
                    Save Changes
                  </Button>
                </form>
              </TabPanel>

              {/* Reports */}
              <TabPanel value="reports">
                <div className="mt-6 space-y-4">
                  {["Investment Summary", "Interest Statement", "Tax Report", "Maturity Calendar"].map((report) => (
                    <Card
                      key={report}
                      className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 shadow-md rounded-md"
                    >
                      <div>
                        <h3 className="text-lg font-medium">{report}</h3>
                        <p className="text-gray-500">Download your {report.toLowerCase()}</p>
                      </div>
                      <Button color="gray" variant="outlined">
                        Download PDF
                      </Button>
                    </Card>
                  ))}
                </div>
              </TabPanel>

              {/* Change Password */}
              <TabPanel value="change-password">
                <form className="mt-6 space-y-6 max-w-md mx-auto">
                  <Input type="password" label="Current Password" className="w-full" />
                  <Input type="password" label="New Password" className="w-full" />
                  <Input type="password" label="Confirm New Password" className="w-full" />
                  <Button color="gray" fullWidth>
                    Update Password
                  </Button>
                </form>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </Card>
      </main>

      {/* Footer */}
    </div>
          <Footer />
          </>

  );
}
