
import Header from "../components/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Offer from "../components/Offer";
import Brand from "../components/Brand";
import Why from "../components/Why";
import Product from "../components/Product";
import Product2 from "../components/Product2";


export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />

        <div className="pt-15">
          <Slider />
        </div>

        <Product/>

        <Offer />
        <Product2/>
        <Why/>
        <Brand/>
        <Footer />
        
      </div>
    </>
  );
}
