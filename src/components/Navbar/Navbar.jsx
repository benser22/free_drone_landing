import useNav from '../../hooks/useNav';
import MenuMobile from './MenuMobile';
import data from '../../data.json';
import { BsJustify, BsXLg } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const { isOpen, handleIsOpen } = useNav();
  return (
    <header
      className={`fixed z-[98] top-0 left-0 w-full px-8 lg:px-16 py-2 flex justify-between items-center h-[78px] text-white
      bg-black shadow-sm`}
    >
      <div className="flex items-center justify-between w-full">
        <a href="/">
          <div className="flex items-center gap-2">
            <img
              src={data['logo-white'].url}
              alt={data.logo.alt}
              className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] cursor-pointer mr-2"
            />
            <p className="font-bold md:text-xl hover:text-green-custom">
              {data['section-footer'].trademark}
            </p>
          </div>
        </a>
        <div className="hidden sm:flex items-center justify-between space-x-6 sm:space-x-3 md:space-x-6">
          {data['section-header'].navbar.map((item, index) => (
            <Link
              to={item.href}
              spy={false}
              smooth={true}
              duration={500}
              key={index}
              offset={-75}
              className=" cursor-pointer"
            >
              <p
                className="text-md  hover:text-green-custom sm:text-[12px] lg:text-[16px] w-max"
                key={item.id}
              >
                {item.text}
              </p>
            </Link>
          ))}
          <a
            href={data['section-header'].blog.href}
            key={data['section-header'].blog.id}
            target="_blank"
            className=" cursor-pointer"
          >
            <p className="text-md  hover:text-green-custom sm:text-[12px] lg:text-[16px] w-max">
              {data['section-header'].blog.text}
            </p>
          </a>
          <a
            href={`mailto:${data.contact.email}?subject=Contact`}
            className=" cursor-pointer"
          >
            <p className="text-md  hover:text-green-custom sm:text-[12px] lg:text-[16px] w-max">
              {data['section-header'].contact.text}
            </p>
          </a>
        </div>
      </div>
      <button
        className="text-2xl cursor-pointer z-[99] text-secondary flex items-center justify-center sm:hidden"
        onClick={handleIsOpen}
      >
        {isOpen ? <BsXLg /> : <BsJustify />}
      </button>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </header>
  );
};

export default Navbar;
