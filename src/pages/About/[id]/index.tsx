import { useParams } from "react-router-dom";

const AboutParamsPage = () => {
  const { id } = useParams();
  return <h1>About 详情页 ID: {id}</h1>;
};

export default AboutParamsPage;
