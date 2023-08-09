import Footer from "../layout/footer";
import Navbar from "../layout/navbar";
const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Welcome container here */}
      <div className="p-24 mt-10">
        <div className="w-11/12  mx-auto">
          <div className="grid grid-cols-2">
            <div>
              <span className=" text-blue-600 font-semibold ml-1">
                Welcome To Appie
              </span>
              <h1 className="text-5xl  mt-2 font-bold">
                Manage it all, in this all new system.
              </h1>
              <p className=" mt-5 text-gray-500 font-semibold text-xl  ">
                Hanky panky lavatory up the duff jolly good cack brolly is
                chinwag zonked happy days sloshed.
              </p>
              <div className="mt-5">
                <button className=" w-52 hover:bg-white hover:text-black  hover:border-blue-950 hover:border-2   h-10 bg-blue-950 text-white font-bold rounded-md">
                  {" "}
                  Download for IOS
                </button>
                <button className=" ml-5 w-52 hover:bg-blue-950 hover:text-white  h-10 bg-white text-black border-2 border-blue-950 font-bold rounded-md">
                  Download for Android
                </button>
              </div>
            </div>
            <div>
              <div className="relative ml-40 w-72 h-72 rounded-full bg-red-500">
                <img
                  className=" absolute ml-12 -mt-10  h-96"
                  src="https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/hero-thumb-1.png"
                  alt="HomeImg1"
                />
                <img
                  className=" absolute  left-60 top-16 h-40"
                  src="https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/hero-thumb-2.png"
                  alt="HomImg2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main design component */}
      <div className=" h-96 bg-gray-100 mb-0">
        <div className="justify-center">
          <h1 className="text-4xl text-center font-bold">
            Designed with <br /> The applicant in mind.
          </h1>
          <p className="text-gray-500 text-center mt-2 font-semibold">
            The full monty spiffing good time no biggie cack grub fantastic.
          </p>
        </div>
        <div className="mt-5 grid grid-cols-4  ml-28     ">
          <div className=" w-52 h-52 bg-white  rounded-xl ">
            <div className="w-16 h-16 bg-blue-400 rounded-2xl mx-auto mt-10">
                {/* <img className=" ml-5 mt-2" src="https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/icon/1.png" alt="" /> */}
                <div className="w-5 h-5 rounded-full border-white border-2 float-right  -mt-2 right-5 bg-green-300">
                    <span className=" font-bold ml-1 text-blue-950"> 1</span>
            </div>
                
            </div>
            
            <h1 className="text-center mt-2 font-semibold">Searching</h1>
            <p className="text-center text-sm text-gray">Mucker plastered bugger all <br /> mate morish are.</p>
          </div>
          <div className=" w-52 h-52 bg-white  rounded-xl  ">
            <div className="w-16 h-16 bg-orange-400 rounded-2xl mx-auto mt-10">
              
            </div>
            <h1 className="text-center mt-2 font-semibold">Designing</h1>
            <p className="text-center text-sm text-gray">Mucker plastered bugger all <br /> mate morish are.</p>
          </div>
          <div className=" w-52 h-52 bg-white rounded-xl  ">
            <div className="w-16 h-16 bg-green-400 rounded-2xl mx-auto mt-10"></div>
            <h1 className="text-center mt-2 font-semibold">Building</h1>
            <p className="text-center text-sm text-gray">Mucker plastered bugger all <br /> mate morish are.</p>
          </div>
          <div className=" w-52 h-52  bg-white rounded-xl  ">
            <div className="w-16 h-16  bg-purple-400 rounded-2xl mx-auto mt-10"></div>
            <h1 className="text-center mt-2 font-semibold">Suporting</h1>
            <p className="text-center text-sm text-gray">Mucker plastered bugger all <br /> mate morish are.</p>
          </div>
        </div>
      </div>

      {/* Custom resysation here */}

      <div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;
