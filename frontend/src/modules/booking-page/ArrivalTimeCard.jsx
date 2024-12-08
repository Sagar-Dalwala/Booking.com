import { Card, CardBody, Typography, Select, Option } from "@material-tailwind/react";

const ArrivalTimeCard = () => {
  return (
    <Card className="w-full my-4 shadow-lg">
      <CardBody>
        <Typography variant="h6" className="text-xl font-semibold mb-2">
          Your Arrival Time
        </Typography>
        <div className="space-y-4">
          <div className="flex flex-col">
            <Typography className="text-gray-700">Your room will be ready for check-in between 12:00 and 00:00</Typography>
            <Typography className="text-gray-700">24-hour front desk – Help whenever you need it!</Typography>
          </div>
          <div className="flex flex-col">
            <Typography className="text-gray-700 mb-4">Add your estimated arrival time *</Typography>
            <Select label="Select Time" className="w-full">
              <Option value="12:00">12:00 PM</Option>
              <Option value="13:00">1:00 PM</Option>
              <Option value="14:00">2:00 PM</Option>
              <Option value="15:00">3:00 PM</Option>
              <Option value="16:00">4:00 PM</Option>
              <Option value="17:00">5:00 PM</Option>
              <Option value="18:00">6:00 PM</Option>
              <Option value="19:00">7:00 PM</Option>
              <Option value="20:00">8:00 PM</Option>
              <Option value="21:00">9:00 PM</Option>
              <Option value="22:00">10:00 PM</Option>
              <Option value="23:00">11:00 PM</Option>
              <Option value="00:00">12:00 AM</Option>
            </Select>
          </div>
          <div className="text-xs text-gray-500">
            <p>your time zone</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ArrivalTimeCard;
