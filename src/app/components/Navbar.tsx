"use client";
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
    <nav className="bg-blue-600 h-20 py-0 px-3 flex justify-between items-center text-white">
      <div><Link href='#'><Image src="/governor_sindh_logo.png" alt="governorsindhlogo" width={24} height={35} className="rounded-full w-24 h-35 -mb-16 mt-4 ml-3 -mr-5" /></Link></div>
      <div className="size-4xl font-bold">
        <h1 className='text-2xl text-cyan-100 font-semibold'>Tuition Free Education Program on Latest Technologies</h1>
        </div>
      <div className="flex justify-between">
      <ul className='flex space-x-10'>
        <li>
          <Link  href="/">Home</Link>
        </li>
        <li>
          <Link href="/apply">Apply</Link>
        </li>
        <li>
          <Link href="/jobs">Jobs</Link>
        </li>
        <li> 
          <Link href="/result">Result</Link>
        </li>
        <li>
          <Link href="/courses">Courses</Link>
      </li>
      </ul>
      </div>
    
    </nav>
    </div>
    
);
}
  

export default Navbar

//<div class="sticky top-0 z-30 w-full bg-main backdrop-blur-3xl print:hidden"><div class="m-auto flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[90%] xl:w-[1300px]"><a href="/"><img alt="logo" loading="lazy" width="90" height="113" decoding="async" data-nimg="1" class="mt-14 w-[70px] sm:mt-20 sm:w-[80px] md:w-[90px]" style="color:transparent" src="/_next/static/media/logo.9ff76f62.png"></a><h1 class="text_shadow hidden text-[15px] font-extrabold text-[#b9d8f3] lg:block xl-lg:text-xl xl:text-2xl">Tuition Free Education Program on Latest Technologies</h1><h1 class="text_shadow text-[1.125rem] font-extrabold text-[#b9d8f3] lg:hidden">Tuition Free Program<!-- --> </h1><div class="hidden items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-10"><a href="/"><div class="menu_btns capitalize">home</div></a><a href="/apply"><div class="menu_btns capitalize">apply</div></a><a href="/jobs"><div class="menu_btns capitalize">jobs</div></a><a href="/result"><div class="menu_btns capitalize">result</div></a><div class="false"><button type="button" class="chakra-button chakra-menu__menu-button css-4xx2wk" id="menu-button-:R2ibaH1:" aria-expanded="false" aria-haspopup="menu" aria-controls="menu-list-:R2ibaH1:"><span class="css-xl71ch">Courses</span><span class="chakra-button__icon css-1hzyiq5"><svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg></span></button></div><div style="visibility:hidden;position:absolute;min-width:max-content;inset:0 auto auto 0" class="css-0"><div class="bg-zinc-50 box_shadow h-[300px] sm:h-auto overflow-y-auto text-zinc-800 p-7 sm:p-4 false css-sjt5nk" tabindex="-1" role="menu" id="menu-list-:R2ibaH1:" style="transform-origin:var(--popper-transform-origin);opacity:0;visibility:hidden;transform:scale(0.8) translateZ(0)" aria-orientation="vertical"><div class="pb-5 border-b border-zinc-300"><h1 class="sm:text-xl text-lg font-bold text-zinc-800 mb-2">Core Courses</h1><a href="/compulsory/1"><button type="button" class="chakra-menu__menuitem text-zinc-600 sm:text-base text-sm hover:text-main pl-2 py-[5px] css-1k756t9" id="menu-list-:R2ibaH1:-menuitem-:R1jamiba:" role="menuitem" tabindex="-1" data-index="0">Programming Fundamentals</button></a><a href="/compulsory/2"><button type="button" class="chakra-menu__menuitem text-zinc-600 sm:text-base text-sm hover:text-main pl-2 py-[5px] css-1k756t9" id="menu-list-:R2ibaH1:-menuitem-:R2jamiba:" role="menuitem" tabindex="-1" data-index="1">Web2 Using NextJS</button></a><a href="/compulsory/3"><button type="button" class="chakra-menu__menuitem text-zinc-600 sm:text-base text-sm hover:text-main pl-2 py-[5px] css-1k756t9" id="menu-list-:R2ibaH1:-menuitem-:R3jamiba:" role="menuitem" tabindex="-1" data-index="2">Earn as You Learn</button></a></div><div class="mt-5"><h1 class="sm:text-xl text-lg font-bold text-zinc-800 mb-2">Advanced Courses</h1><a href="/tracks/wmd/4"><button type="button" class="chakra-menu__menuitem text-zinc-600 sm:text-base text-sm hover:text-main pl-2 py-[5px] css-1k756t9" id="menu-list-:R2ibaH1:-menuitem-:R1lamiba:" role="menuitem" tabindex="-1" data-index="3">Web 3 and Metaverse</button></a><a href="/tracks/cnc/4"><button type="button" class="chakra-menu__menuitem text-zinc-600 sm:text-base text-sm hover:text-main pl-2 py-[5px] css-1k756t9" id="menu-list-:R2ibaH1:-menuitem-:R2lamiba:" role="menuitem" tabindex="-1" data-index="4">Cloud-Native Computing</button></a><a href="/tracks/ai/4"><button type="button" class="chakra-menu__menuitem text-zinc-600 sm:text-base text-sm hover:text-main pl-2 py-[5px] css-1k756t9" id="menu-list-:R2ibaH1:-menuitem-:R3lamiba:" role="menuitem" tabindex="-1" data-index="5">Artificial Intelligence (AI) and Deep Learning</button></a><a href="/tracks/iot/4"><button type="button" class="chakra-menu__menuitem text-zinc-600 sm:text-base text-sm hover:text-main pl-2 py-[5px] css-1k756t9" id="menu-list-:R2ibaH1:-menuitem-:R4lamiba:" role="menuitem" tabindex="-1" data-index="6">Ambient Computing and IoT</button></a><a href="/tracks/gbs/4"><button type="button" class="chakra-menu__menuitem text-zinc-600 sm:text-base text-sm hover:text-main pl-2 py-[5px] css-1k756t9" id="menu-list-:R2ibaH1:-menuitem-:R5lamiba:" role="menuitem" tabindex="-1" data-index="7">Genomics and Bioinformatics</button></a><a href="/tracks/npa/4"><button type="button" class="chakra-menu__menuitem text-zinc-600 sm:text-base text-sm hover:text-main pl-2 py-[5px] css-1k756t9" id="menu-list-:R2ibaH1:-menuitem-:R6lamiba:" role="menuitem" tabindex="-1" data-index="8">Network Programmability and Automation</button></a></div></div></div></div><div class="block sm:hidden"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-white" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></div></div></div>