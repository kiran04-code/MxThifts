"use client"
import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import { CiShoppingCart } from "react-icons/ci";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useAuth } from "@/context/UserAuth";
import { useRouter } from "next/navigation";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavigationMenuDemos() {
  const {user,setCartItem,CartIteam,getCartCout} = useAuth()!
  const router = useRouter()
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex gap-10 p-4 rounded-[10px] bg-black shadow-lg" >
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[#ffffff]">Home</NavigationMenuTrigger>
          {
            user ? null:<Link href={"/Register"} className="text-[#ffffff] ml-2 hover:bg-white hover:text-black p-2 rounded-[10px]  transition">Login</Link>
          }
          <NavigationMenuContent>
            <ul className="grid gap-2 lg:grid-cols-[.75fr_1fr] font-bold">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <Image src={"/img8.jpg"}  alt="" width={250} height={250} className="rounded-xl "/>
                    <div className=" flex flex-col justify-center items-center">
                       <p className=" mt-4 mb-2` font-bold text-transparent  bg-gradient-to-t bg-clip-text from-black to-white text-4xl"> Primium</p>
                       <div>
                             <div className="flex justify-center items-center gap-2">
                              <Image src={"/black_logo.png"}  alt=""  width={30} height={30}/>
                              <p>Maxx Thift's</p>
                             </div>
                       </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>

            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
       
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white">List</NavigationMenuTrigger>
         {
          user?  <Link href={"/Profile"} className="text-[#ffffff] ml-2 hover:bg-white hover:text-black p-2 rounded-[10px]  transition">Profile</Link>:null
         }
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-5">
              <li>
             
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white relative">
            {
          user? <div><Link href={"/CartPage"}> <CiShoppingCart onClick={()=>router.push("/CartPage")}   className="text-2xl font-bold hover:text-black" />
  <div className="absolute -top-2 -right-2 w-5 h-5 flex justify-center items-center bg-white rounded-full">
    <p className="text-black text-[13px]">{
     getCartCout()
      }</p>
  </div></Link></div>:null
         }
</NavigationMenuTrigger>
          
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
