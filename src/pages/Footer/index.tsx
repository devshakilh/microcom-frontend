import { Button, Heading, Img, Input, Text } from 'components'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full mt-[101px] px-14 py-[95px] bg-gray-900_01">
    {/* Container for Footer Content */}
    <div className="flex flex-row justify-center w-full mb-3 mx-auto max-w-[1056px]">
      
      {/* Main Footer Section */}
      <div className="flex flex-col items-center justify-center w-full gap-20">
        
        {/* First Row: Main Information */}
        <div className="flex flex-row justify-between items-start w-full">
          
          {/* Left Column: Company Information and Social Links */}
          <div className="flex flex-row justify-start items-start w-[54%] gap-6">
            
            {/* Company Information */}
            <div className="flex flex-col items-start justify-start w-[63%]">
              <Heading size="lg" as="h5" className="!text-white-A700">
                Scan. Detect. Remove.
              </Heading>
  
              {/* Social Links */}
              <div className="flex flex-row justify-start w-full mt-[50px] pb-9 gap-[39px]">
                {/* Twitter Icon */}
                <div className="flex flex-col items-center justify-start h-9 w-9">
                  <Img src="images/img_icon_awesome_twitter_square.svg" alt="iconawesome_one" className="h-9 w-9" />
                </div>
  
                {/* Facebook Icon */}
                <div className="flex flex-col items-center justify-start h-9 w-9">
                  <Img src="images/img_icon_awesome_facebook_square.svg" alt="iconawesome" className="h-9 w-9" />
                </div>
  
                {/* Custom Button with Icon */}
                <Button color="white_A700" size="sm" shape="square" className="w-9">
                  <Img src="images/img_exclusion_8.svg" />
                </Button>
              </div>
  
              {/* Additional Links */}
              <div className="flex flex-row justify-start w-[97%] mt-3 gap-[25px] py-1.5">
                {/* Privacy Policy Link */}
                <div className="flex flex-row justify-start w-[22%] mb-[5px]">
                  <a href="#">
                    <Text size="xs" as="p" className="!text-white-A700 !font-inter underline">
                      Privacy Policy
                    </Text>
                  </a>
                </div>
  
                {/* Terms of Service Link */}
                <div className="flex flex-row justify-start w-[27%]">
                  <a href="#">
                    <Text size="xs" as="p" className="!text-white-A700 !font-inter underline">
                      Terms of Service
                    </Text>
                  </a>
                </div>
              </div>
  
              {/* Copyright Text */}
              <Text size="xs" as="p" className="w-[88%] mt-9 !text-white-A700 !font-inter !leading-[15px]">
                Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356
              </Text>
  
              {/* Designed & Developed By */}
              <Text size="xs" as="p" className="mt-5 !text-white-A700 !font-inter">
                <span className="text-white-A700">Designed & developed by </span>
                <a href="#" className="text-white-A700 underline">
                  Bigger Picture
                </a>
              </Text>
            </div>
  
            {/* Right Column: Miro Information */}
            <div className="flex flex-col items-start justify-start w-[34%] gap-[60px]">
              <Heading size="2xl" as="h2" className="pt-px pb-[26px] pr-[35px] !text-white-A700 border-white-A700 border-b border-solid">
                Miro.
              </Heading>
  
              {/* Miro Links */}
              <div className="flex flex-col items-start justify-start w-full gap-[25px]">
                {/* Miro Categories */}
                <div className="flex flex-row justify-start items-center gap-6">
                  <Img src="images/img_span.svg" alt="span_three" className="h-5 w-5" />
                  <Heading size="s" as="h6" className="!text-orange-300 tracking-[-0.40px]">
                    iPhone
                  </Heading>
                </div>
                <div className="flex flex-row justify-start items-center gap-6">
                  <Img src="images/img_span.svg" alt="span_five" className="h-5 w-5" />
                  <Heading size="s" as="h6" className="!text-orange-300 tracking-[-0.40px]">
                    Android
                  </Heading>
                </div>
                <div className="flex flex-row justify-start items-center gap-6">
                  <Img src="images/img_span.svg" alt="span_seven" className="h-5 w-5" />
                  <Heading size="s" as="h6" className="!text-orange-300 tracking-[-0.40px]">
                    Help
                  </Heading>
                </div>
                <div className="flex flex-row justify-start items-center gap-6">
                  <Img src="images/img_span.svg" alt="span_nine" className="h-5 w-5" />
                  <Heading size="s" as="h6" className="!text-orange-300 tracking-[-0.40px]">
                    About
                  </Heading>
                </div>
                <div className="flex flex-row justify-start items-center gap-6">
                  <Img src="images/img_span.svg" alt="span_eleven" className="h-5 w-5" />
                  <Heading size="xs" as="h6" className="mt-0.5 !text-orange-300 tracking-[-0.40px]">
                    Insights
                  </Heading>
                </div>
              </div>
            </div>
          </div>
  
          {/* Newsletter Subscription Section */}
          <div className="h-[232px] w-[436px] bg-orange-300 relative rounded-[42px]">
            <Img
              src="images/img_form_newsletter.svg"
              alt="formnewsletter"
              className="justify-center h-[232px] left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[42px]"
            />
            <div className="flex flex-col items-center justify-center w-max h-max gap-9 left-0 bottom-0 right-0 top-0 m-auto absolute">
              {/* Newsletter Content */}
              <div className="flex flex-col items-start justify-start w-[99%] gap-5 px-4">
                <Heading size="lg" as="h5" className="!text-gray-900_01 tracking-[-0.48px]">
                  Sign up to our newsletter
                </Heading>
                <Text size="lg" as="p" className="!text-gray-900_01 !font-inter">
                  Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!
                </Text>
              </div>
  
              {/* Newsletter Form */}
              <div className="flex flex-row justify-center -ml-[199px] wfull">
                <div className="flex flex-row justify-center w-full">
                  {/* Email Input */}
                  <Input
                    color="white_A700"
                    size="xs"
                    variant="fill"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="w-[70%] rounded-tl-[21px] rounded-bl-[21px] rounded-r-none font-inter"
                  />
                  {/* Submit Button */}
                  <Button
                    color="gray_900_01"
                    size="xs"
                    className="rounded-tr-[21px] rounded-br-[21px] rounded -ml-2 font-inter font-extrabold min-w-[109px]"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Additional Text */}
        <Text size="s" as="p" className="w-[52%] !text-white-A700 !font-inter">
          Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.
        </Text>
      </div>
    </div>
  </footer>
  
  )
}
