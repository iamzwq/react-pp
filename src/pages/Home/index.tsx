import { Card, DatePicker, DatePickerProps, Flex } from "antd";

const Home = () => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="p-4">
      <div className="text-lg">
        Home Page: <DatePicker onChange={onChange} />
      </div>
      <Flex wrap="wrap" gap="large">
        {new Array(2).fill(null).map((_, index) => {
          return (
            <Card
              key={index}
              hoverable
              className="w-[240px] mt-4"
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Card.Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          );
        })}
      </Flex>
    </div>
  );
};

export default Home;
