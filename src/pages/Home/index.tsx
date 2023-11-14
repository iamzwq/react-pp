import { DatePicker, DatePickerProps, QRCode } from "antd";

const Home = () => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="p-4">
      <div className="text-lg mb-4">
        Home Page: <DatePicker onChange={onChange} />
      </div>
      <QRCode value="https://juejin.cn/" />
    </div>
  );
};

export default Home;
