import {useState} from 'react';
import PricingBox from "./components/PricingBox";
import topDesign from "./images/bg-top.svg"
import bottomDesign from "./images/bg-bottom.svg"

function App() {
  const [checked, setChecked] = useState(true);

  const [basicPrice, setBasicPrice] = useState(199.99)
  const [professionalPrice, setProfessionalPrice] = useState(249.99)
  const [masterPrice, setMasterPrice] = useState(399.99)


  const changePlan = () =>{
    setChecked(!checked);
    if(checked === true){
      setBasicPrice(19.99)
      setProfessionalPrice(24.99)
      setMasterPrice(39.99)
    }else{
      setBasicPrice(199.99)
      setProfessionalPrice(249.99)
      setMasterPrice(399.99)
    }
  }
  return (
    <div className="bg-vlGrayishBlue sm:h-screen flex flex-col items-center pt-16 gap-11 relative z-10 overflow-x-hidden">
      <img src={topDesign} className="absolute sm:top-0 sm:-right-10 top-0 -right-10 w-1/2 h-1/3 sm:w-2/5 sm:h-3/4 -z-20  " alt=''/>
      <img src={bottomDesign} className="hidden sm:block absolute bottom-0 left-0 sm:w-1/4 -z-20" alt=''/>
      <h1 className="text-3xl font-bold tracking-wide text-grayishBlue z-10">Our Pricing</h1>

      <div className="flex gap-4 items-center z-10">
        <p className="text-sm text-lGrayBlue font-bold tracking-wide">Anually</p>
        <label class="relative cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" onChange={changePlan} />
            <div class="w-11 h-6 bg-gto rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full  after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-gfrom"></div>
        </label>
        <p className="text-sm text-lGrayBlue font-bold tracking-wide">Monthly</p>
      </div>

      <div className="flex items-center justify-center sm:flex-row flex-col gap-6 sm:gap-0 mb-9 sm:mb-0 z-50">
        <PricingBox plan ="Basic" price= {basicPrice} pricecolor="dGrayishBlue" storage ="500 GB" users = "2" send= "3" paddingy = "py-7" color= "bg-white" text = "grayishBlue" button="bg-gradient-to-r  from-gfrom to-gto  py-2 rounded-md text-xs text-white tracking-widest  w-full hover:from-white hover:to-white border-solid border-inherit border-2 hover:border-solid hover:border-2 hover:border-gto hover:text-gto duration-300"/>  
        <PricingBox plan ="Professional" price= {professionalPrice} pricecolor="white" storage ="1 TB" users = "5" send= "10" paddingy = "py-11" color= "bg-gradient-to-br  from-gfrom to-gto " text = "white" button="bg-white hover:bg-gto py-2 rounded-md text-xs text-gto tracking-widest  w-full  border-solid border-inherit border-2 hover:border-solid hover:border-2 hover:border-white hover:text-white duration-300"/>  
        <PricingBox plan ="Master" price= {masterPrice} pricecolor="dGrayishBlue" storage ="2 TB" users = "10" send= "20" paddingy = "py-7" color= "bg-white" text = "grayishBlue" button="bg-gradient-to-r  from-gfrom to-gto  py-2 rounded-md text-xs text-white tracking-widest  w-full hover:from-white hover:to-white border-solid border-inherit border-2 hover:border-solid hover:border-2 hover:border-gto hover:text-gto duration-300"/>  
      </div> 
    </div>
  );
}

export default App;
