import { Button, Img, Text } from 'components'
import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    
    <header className="flex justify-center items-center w-full pt-5 pb-[19px] px-5 border-gray-200 border-b border-solid bg-white-A700">
    {/* Container for header content */}
    <div className="flex flex-row justify-center w-full mx-auto max-w-[1380px]">
      <div className="flex flex-row justify-center items-center w-full gap-6">
        {/* Logo */}
        <Link to='/' ><Img src="images/img_svg.svg" alt="svg_one" className="h-8 mt-1" /></Link>
  
        {/* Navigation Links */}
        <div className="flex flex-row justify-between items-center w-[92%]">
          <ul className="flex flex-row justify-start items-center w-[39%]">
            {/* Product Link */}
            <li>
              <a href="#">
                <div className="flex flex-row justify-start items-center pl-0.5 gap-[13px] py-0.5">
                  <Text size="xl" as="p" className="ml-px text-center">
                    Product
                  </Text>
                  <MdKeyboardArrowDown className="h-5 w-5 hover:rotate-180"/>
                </div>
              </a>
            </li>
  
            {/* Solutions Link */}
            <li>
              <a href="#">
                <div className="flex flex-row justify-start items-center ml-4 pl-0.5 gap-[13px] py-0.5">
                  <Text size="xl" as="p" className="ml-0.5 text-center">
                    Solutions
                  </Text>
                  <Img src="images/img_arrow_down.svg" alt="arrowdown_three" className="h-2.5 w-2.5 hover:rotate-180" />
                </div>
              </a>
            </li>
  
            {/* Resources Link */}
            <li>
              <a href="#">
                <div className="flex flex-row justify-start items-center ml-4 pl-0.5 gap-[11px] py-0.5">
                  <Text size="xl" as="p" className="ml-px text-center">
                    Resources
                  </Text>
                  <Img src="images/img_arrow_down.svg" alt="arrowdown_five" className="h-2.5 w-2.5" />
                </div>
              </a>
            </li>
  
            {/* Enterprise Link */}
            <li>
              <a href="#" className="ml-4">
                <Text size="xl" as="p" className="!font-inter">
                  Enterprise
                </Text>
              </a>
            </li>
  
            {/* Pricing Link */}
            <li>
              <a href="#" className="ml-[22px]">
                <Text size="xl" as="p" className="!font-inter">
                  Pricing
                </Text>
              </a>
            </li>
          </ul>
  
          {/* Language, Contact, Login, and Sign Up */}
          <div className="flex flex-row justify-center items-center w-[33%]">
            {/* Language Selector */}
            <div className="flex flex-row justify-start items-center w-[14%] gap-2">
              <Img src="images/img_vector.svg" alt="vector_one" className="h-6 w-6" />
              <Text size="xl" as="p" className="uppercase text-center">
                en
              </Text>
            </div>
  
            {/* Contact Sales Link */}
            <a href="#" className="ml-4">
              <Text size="xl" as="p" className="!font-inter">
                Contact Sales
              </Text>
            </a>
  
            {/* Login Link */}
            <a href="#" className="ml-6">
              <Text size="xl" as="p" className="!font-inter">
                Login
              </Text>
            </a>
  
            {/* Sign Up Button */}
            <Button className="ml-[19px] border-indigo-A400 border border-solid min-w-[151px]">
              Sign up free →
            </Button>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}
