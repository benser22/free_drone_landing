import { Link } from 'react-scroll';
import data from '../../data.json';

const MenuMobile = ({ isOpen, onClick }) => {
  return (
    <div
      className={`${
        isOpen ? 'flex fadeIn' : 'hidden'
      } w-full h-screen fixed inset-0 md:hidden`}
      onClick={onClick}
      style={{ background: 'rgba(0,0,0,0.3)' }}
    >
      <ul
        className={`fixed left-0 top-0 px-4 py-5 h-screen w-[60vw] flex flex-col gap-4 
        items-start text-white bg-black shadow-md shadow-white`}
      >
        <div className="flex">
          <a href="/">
            <img
              src={data['logo-black'].url}
              alt={data['logo-black'].alt}
              className="h-[36px] cursor-pointer mx-auto mt-4"
              style={{ filter: 'invert(1)' }}
            />
            <p className="font-bold active:text-green-custom text-center">
              {data['section-footer'].trademark}
            </p>
            <hr className="mt-6 w-[50vw]"></hr>
          </a>
        </div>
        <div className="ml-[2vw] flex flex-col items-left justify-between gap-12 mt-6 w-full">
          {data['section-header'].navbar.map((item, index) => (
            <Link
              to={item.href}
              key={index}
              className="flex items-center gap-4 hover:text-gray-custom cursor-pointer"
              smooth={true}
              duration={700}
              spy={false}
              offset={-80}
            >
              <img
                src={item.icon}
                alt={item.alt}
                className="w-[26px] h-[26px]"
                style={{ filter: 'invert(1)' }}
              />
              <p className="font-bold">{item.text}</p>
            </Link>
          ))}
          <a
            href={data['section-header'].blog.href}
            key={data['section-header'].blog.id}
            target="_blank"
            className="flex items-center gap-4 hover:text-gray-custom cursor-pointer"
          >
            <img
              src={data.blog.icon}
              alt={data.blog.text}
              className="w-[26px] h-[26px]"
              style={{ filter: 'invert(1)' }}
            />
            <p className="font-bold"> {data['section-header'].blog.text}</p>
          </a>

          <a
            href={`mailto:${data.contact.email}`}
            className="flex items-center gap-4 cursor-pointer"
          >
            <img
              src={data['section-header'].contact.icon}
              alt={data['section-header'].contact.alt}
              className="w-[26px] h-[26px]"
              style={{ filter: 'invert(1)' }}
            />
            <p className="text-md font-bold hover:text-green-custom sm:text-[12px] lg:text-[16px] w-max">
              {data['section-header'].contact.text}
            </p>
          </a>
        </div>
      </ul>
    </div>
  );
};

export default MenuMobile;
