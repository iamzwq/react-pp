import { DatePicker, DatePickerProps } from "antd";

const Home = () => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="flex-center flex-col">
      <h1>Home Page</h1>
      <DatePicker onChange={onChange} />
    </div>
  );
};

export default Home;
