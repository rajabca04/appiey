import { Link } from "react-router-dom";

const Companes = [
  {
    label: "About us",
    to: "#",
  },
  {
    label: "Service",
    to: "#",
  },
  {
    label: "Case Studies",
    to: "#",
  },
  {
    label: "Blog",
    to: "#",
  },
  {
    label: "Contact",
    to: "#",
  },
];

const Support = [
  {
    label: "Community",
    to: "#",
  },
  {
    label: "Resources",
    to: "#",
  },
  {
    label: "Faqs",
    to: "#",
  },
  {
    label: "Privacy Policy",
    to: "#",
  },
  {
    label: "Career",
    to: "#",
  },
];

const Footer = () => {
  return (
    <div
      className="bg-slate-200 py-16 divide-y divide-gray-300"
      style={{
        minHeight: 400,
      }}
    >
      <div className="w-3/4 mx-auto ">
        <div className="grid md:grid-cols-4">
          <div className="flex flex-col gap-9">
            <img
              src="https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/logo.png"
              alt="logo"
              className="w-28"
            />
            <p>
              Appie WordPress is theme is the last theme you will ever have.
            </p>
            <button className="flex items-center gap-x-1 font-bold hover:text-blue-600">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
          <div>
            <h1 className="font-bold ml-10 gap-y-5 mb-4">Company</h1>
            <div className="flex flex-col gap-y-2 ml-10">
              {Companes.map((item, index) => (
                <Link key={index} to={item.to} className="hover:text-blue-600">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h1 className="font-bold ml-10 gap-y-5 mb-4">Support</h1>
            <div className="flex flex-col gap-y-2 ml-10">
              {Support.map((item, index) => (
                <Link key={index} to={item.to} className="hover:text-blue-600">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h1 className="font-bold ml-10 gap-y-5 mb-4">Get In Tuch</h1>
            <div className="flex flex-col gap-y-6">
              <div className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <p>appiesupport.gamil.com</p>
              </div>
              <div className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <p>+(642) 342 762 44</p>
              </div>
              <div className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <p>442 Belle Terre St Floor 7, San Francisco, AV 4206</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-20">
        <p className="absolute bottom-0" >Copyright © 2023 Appie. All rights reserved.</p>
      </div> */}
    </div>
  );
};

export default Footer;
