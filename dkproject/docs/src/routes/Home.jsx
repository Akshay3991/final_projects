import { useSelector } from "react-redux";
import HomeService from "../components/HomeService";

const Home = () => {
  const services = useSelector((store) => store.services);
  // console.log(services);

  return (
    <main>
      <div>
        {services.map((service) => (
          <HomeService key={service.id} service={service} />
        ))}
      </div>
    </main>
  );
};

export default Home;
