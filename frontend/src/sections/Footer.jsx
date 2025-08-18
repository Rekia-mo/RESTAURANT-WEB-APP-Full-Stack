import React from 'react';
import Logo from '../assets/icons/Logo.png';
import I1 from '../assets/icons/1.png';
import I2 from '../assets/icons/2.png';
import I3 from '../assets/icons/3.png';
import I4 from '../assets/icons/4.png';
import img from '../assets/images/footer.png';
import FooterList from '../components/FooterList';

function Footer() {
  const contact = [I1, I2, I3, I4];

  const FooterLinks = [ { href: "/", label: "Home" },
    { href: "/#Servises", label: "Services" },
    { href: "/#Menu", label: "Menu" },
    { href: "#Contact", label: "Contact" }];

  const utility = ['Start Here', 'Styleguide', 'Password Protected', '404 Not Found', 'Licenses', 'Changelog', 'View More']

  return (
    <div id='Contact' className='bg-[#474747] sm:py-20 py-10 align-top sm:px-30 px-10 flex flex-col'>

      <div className='flex flex-row gap-28 mb-[80px]'>

        <div className='flex flex-col gap-7'>

          <img 
          src={Logo} 
          alt="logo"
          width={180}
          height={180} />

          <p className='text-[#ADB29E] text-[13px]'>
            In the new era of technology we look a <br /> in the future with certainty and pride to <br /> for our company and.
          </p>

          <div className='flex flex-row gap-2'>
            {
              contact.map((I,_)=>(
                <img 
                key={_}
                src={I} 
                alt='C'
                width={30}
                height={30}/>
              ))
            }
          </div>

        </div>
        
        <FooterList
        title='Pages'
        items= {FooterLinks}
        />

        <FooterList
        title='Utility Pages'
        items={utility}
        />

        <FooterList
        title='Follow Us On Instagram'
        img={img}
        />

      </div>

      <div className="w-full border-t border-oliv-06  border-1"/>

      <p className='text-[#ADB29E] text-center text-[14px] mt-6'>
        Copyright &copy; 2025 Hashtag Developer. All Rights Reserved	
      </p>
    </div>
  )
}

export default Footer