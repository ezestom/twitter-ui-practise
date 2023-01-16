import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Post from '../components/Post'
import PostForm from '../components/PostForm'
import Bio from '../components/Bio'
import NavItem from '../components/NavItem/NavItem'
import AccountNavItem from '../components/AccountNavItem'
import Link from 'next/link'
import HeaderBlock from '../components/HeaderBlock/HeaderBlock'
import TweetForm from '../components/TweetForm'
import Search from '../components/Search'
import PanelItem from '../components/PanelItem'
import Panel from '../components/Panel'
import PanelItemTrends from '../components/PanelItemTrends'
import Footer from '../components/Footer'
import { HiOutlineHome } from "react-icons/hi2";
import { HiHashtag } from "react-icons/hi2";
import { HiOutlineBell } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiOutlineBookmark } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineEllipsisHorizontalCircle } from "react-icons/hi2";
import { HiOutlinePencil } from "react-icons/hi2";
import { SiTwitter } from "react-icons/si";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex xflex-col max-w-7xl mx-auto xl:grid xl:grid-cols-10 gap-5">
        <header className="hidden sm:flex w-24 xl:col-span-2">
          <div className="flex flex-1 xl:w-60 flex-col fixed h-full">
            <div className="flex flex-col flex-1 ">
          <NavItem href="/" text="">
            <SiTwitter className="w-6 h-6" />
          </NavItem>
          <NavItem href="/" text="Home">
            <HiOutlineHome className="w-6 h-6" />
          </NavItem>
          <NavItem href="/" text="Explore">
            <HiHashtag className="w-6 h-6" />
          </NavItem>
          <NavItem href="/" text="Notifications">
            <HiOutlineBell className="w-6 h-6" />
          </NavItem>
          <NavItem href="/" text="Messages">
            <HiOutlineEnvelope className="w-6 h-6" />
          </NavItem>
          <NavItem href="/" text="Bookmarks">
            <HiOutlineBookmark className="w-6 h-6" />
          </NavItem>
          <NavItem href="/" text="Profile">
            <HiOutlineUser className="w-6 h-6" />
          </NavItem>
          <NavItem href="/" text="More">
            <HiOutlineEllipsisHorizontalCircle className="w-6 h-6" />
              </NavItem>
            <div className="mt-5 flex justify-center xl:justify-start"> 
                <button className="bg-slate-900 font-semibold text-white px-3 xl:px-20 py-3 text-lg rounded-full">
                  <HiOutlinePencil className="w-6 h-6 xl:hidden" />
                  <span className="hidden xl:flex">Tweet</span>
                </button>
            </div>   
            </div>
            <div>
              <AccountNavItem />
            </div>
          </div> 
        </header>
        <main className="col-span-5 xmax-w-[600px] w-full border-x border-slate-200">
          <HeaderBlock title="Home" href="/" text="Top tweets" />
          <TweetForm />
        <ul className="[&_p:last-child]:text-slate-500 [&_p:first-child]:text-lg divide-y divide-slate-200">
          <li className="p-4">
            <Post name="Roy Quilor" username="royquilor" content="Create design and build templates" date="3/1/2023">
              <div className="w-full relative h-80 xaspect-square mb-4">
              <Image
                fill={true}
                style={{objectFit:"cover"}}
                className="rounded-3xl"
                src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
                alt="Gradient" />  
              </div>
            </Post>  
          </li>
          <li className="p-4">
            <Post name="Roy Quilor" username="royquilor" content="I love Figma" date="2/1/2023">&nbsp;</Post>
          </li>
          <li className="p-4">
            <Post name="Roy Quilor" username="royquilor" content="Tailwind CSS is insane" date="1/1/2023">&nbsp;</Post>
          </li>
          <li className="p-4">
            <Post name="Roy Quilor" username="royquilor" content="Next JS documentation is so good" date="1/1/2023">&nbsp;</Post>
          </li>
          <li className="p-4">
            <Post name="Roy Quilor" username="royquilor" content="How to use custom fonts with Storybook" date="1/1/2023">&nbsp;</Post>
          </li>
          <li className="p-4">
            <Post name="Roy Quilor" username="royquilor" content="Why use Storybook?" date="1/1/2023">&nbsp;</Post>
          </li>
          <li className="p-4">
            <Post name="Roy Quilor" username="royquilor" content="Vercel and Neflify are pretty cool" date="1/1/2023">&nbsp;</Post>
          </li>
          <li className="p-4">
            <Post name="Roy Quilor" username="royquilor" content="Webflow community is awesome" date="1/1/2023">&nbsp;</Post>
          </li>
        </ul>
        </main>
        <aside className="xbg-red-200 col-span-3 hidden xl:flex flex-col w-[350px]">
          <div className="sticky top-0">
            <Search />
            <Panel title="What's happening" href="/">   
              <PanelItemTrends title="Next JS" category="Development" stat="57.5K" />
              <PanelItemTrends title="Figma" category="Design" stat="107.5K" />
              <PanelItemTrends title="Webflow" category="Design" stat="127.5K" />
              <PanelItemTrends title="Tailwind CSS" category="Development" stat="87.5K" />
              <PanelItemTrends title="Vercel" category="Development" stat="27.5K" />
            </Panel>
            <Panel title="Who to follow" href="/">   
              <PanelItem name="Roy Quilor" username="royquilor" />
              <PanelItem name="Roy Quilor" username="royquilor" />
              <PanelItem name="Roy Quilor" username="royquilor" />
            </Panel>
            <Footer />
          </div>
        </aside>
      </div>
    </>
  )
}
