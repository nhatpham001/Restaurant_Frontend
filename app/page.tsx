import Alert from "@/components/Alert";
import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import api from './api/axiosConfig'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {

  return (
    <div>
    <NavBar />
    <Banner header = "hello nhat"/>
    <Alert text = "hello nhat again" />
    <p>whatever</p>
    </div>
  );
}
