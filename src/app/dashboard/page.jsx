"use client"
import React from "react";
import { FiPieChart } from 'react-icons/fi'
import { BsTags } from 'react-icons/bs'
import { TbCalendarTime } from 'react-icons/tb'
import { BiUserCircle } from 'react-icons/bi'
import { IoSettingsOutline } from 'react-icons/io5'
import { FaRegBell } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'
import {LuBanknote} from 'react-icons/lu'
import {AiOutlineLike} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'
import "./index.css";
const dashboard = () => {
  return (
    <div className="m-10 bg-[#F8FAFF]">

      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"> Sidebar
        <span className="sr-only">Open sidebar</span>
      </button>

      <aside id="default-sidebar" className="fixed top-4 left-3 z-40 w-64 h-[96vh] transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gradient-to-b from-[#4285F4] to-[#3C83F9] rounded-2xl">
          <h1 className="font-montserrat ml-6 font-bold text-3xl leading-9 text-white my-10">Board.</h1>
          <ul className="space-y-3 font-medium ml-4">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-100 rounded-lg hover:text-white hover:font-semibold group">
                <FiPieChart size={20} />
                <span className="ml-3  ">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-100 rounded-lg hover:text-white hover:font-semibold group">
                <BsTags size={20} />
                <span className="flex-1 ml-3 whitespace-nowrap ">Transactions</span>

              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-100 rounded-lg hover:text-white hover:font-semibold group">
                <TbCalendarTime size={20} />
                <span className="flex-1 ml-3 whitespace-nowrap ">Schedules</span>

              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-100 rounded-lg hover:text-white hover:font-semibold group">
                <BiUserCircle size={20} />
                <span className="flex-1 ml-3 whitespace-nowrap ">Users</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-100 rounded-lg hover:text-white hover:font-semibold group">
                <IoSettingsOutline size={20} />
                <span className="flex-1 ml-3 whitespace-nowrap ">Settings</span>
              </a>
            </li>

          </ul>
          <ul className="space-y-1 mt-[28vh]">
            <li>
              <a href="#" className="flex items-center p-1 text-gray-100 -mb-1 rounded-lg hover:text-white hover:font-semibold group">
                <span className="flex-1 ml-4 whitespace-nowrap ">Help</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-1 text-gray-100 rounded-lg hover:text-white hover:font-semibold group">
                <span className="flex-1 ml-4 whitespace-nowrap">Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 -mt-10 sm:ml-64">

        <nav class="bg-white">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center">
              <span class="self-center text-2xl font-semibold whitespace-nowrap">Dashboard</span>
            </a>
            <div class="flex md:order-2">
              <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1" >
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span class="sr-only">Search</span>
              </button>
              <div class="relative hidden md:block">
                <input type="text" id="search-navbar" class="block w-full p-2 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span class="sr-only">Search icon</span>
                </div>
              </div>

              <FaRegBell size={24} className="mt-1 ml-4" />
              <FaUserCircle size={24} className="mt-1 ml-4" />


              <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-search" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
              <div class="relative mt-3 md:hidden">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
              </div>
            </div>
          </div>
        </nav>
        <div className="flex flex-col sm:flex-row gap-4 ">

          <a href="#" class="block w-full mr-5 sm:mr-0 sm:w-1/4 px-8 py-4  bg-white border border-gray-200 rounded-3xl shadow-lg hover:bg-gray-100">
            <div className="rounded-full bg-[#7FCD93] text-white w-12 p-3">
              <LuBanknote size={24}/>
            </div>
            <p class="font-normal text-gray-700 my-2">Total Revenues</p>
            <div className="flex items-center justify-between">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 mr-2">$2,128,430</h5>
              <div className="bg-green-300/50 text-green-500 rounded-3xl text-sm px-3 py-1">+2.5%</div>
            </div>
          </a>
          <a href="#" class="block w-full mr-5 sm:mr-0 sm:w-1/4 px-8 py-4  bg-white border border-gray-200 rounded-3xl shadow-lg hover:bg-gray-100">
            <div className="rounded-full bg-[#DEBF85] text-white w-12 p-3">
              <BsTags size={24}/>
            </div>
            <p class="font-normal text-gray-700 my-2">Total Transactions</p>
            <div className="flex items-center justify-between">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 mr-2">1,520</h5>
              <div className="bg-green-300/50 text-green-500 rounded-3xl text-sm px-3 py-1">+1.7%</div>
            </div>
          </a>
          <a href="#" class="block w-full mr-5 sm:mr-0 sm:w-1/4 px-8 py-4  bg-white border border-gray-200 rounded-3xl shadow-lg hover:bg-gray-100">
            <div className="rounded-full bg-[#ECA4A4] text-white w-12 p-3">
              <AiOutlineLike size={24}/>
            </div>
            <p class="font-normal text-gray-700 my-2">Total Likes</p>
            <div className="flex items-center justify-between">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 mr-2">9023</h5>
              <div className="bg-green-300/50 text-green-500 rounded-3xl text-sm px-3 py-1">+1.4%</div>
            </div>
          </a>
          <a href="#" class="block w-full mr-5 sm:mr-0 sm:w-1/4 px-8 py-4  bg-white border border-gray-200 rounded-3xl shadow-lg hover:bg-gray-100">
            <div className="rounded-full bg-[#A9B0E5] text-white w-12 p-3">
              <FiUsers size={24}/>
            </div>
            <p class="font-normal text-gray-700 my-2">Total Users</p>
            <div className="flex items-center justify-between">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 mr-2">9002</h5>
              <div className="bg-green-300/50 text-green-500 rounded-3xl text-sm px-3 py-1">+4.5%</div>
            </div>
          </a>

        </div>
        <div className="block px-8 py-4 h-[60vh] w-full mt-10 bg-white border border-gray-200 rounded-3xl shadow-lg hover:bg-gray-100">

        </div>
        <div className="flex gap-4 mt-10 flex-col sm:flex-row">
          <div className="block w-full sm:w-1/2 px-8 py-4  bg-white border border-gray-200 rounded-3xl shadow-lg hover:bg-gray-100">Top Product</div>
          <div className="block w-full sm:w-1/2 px-8 py-4  bg-white border border-gray-200 rounded-3xl shadow-lg hover:bg-gray-100">Add Profile</div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
