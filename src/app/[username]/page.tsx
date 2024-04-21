/* eslint-disable react/no-unescaped-entities */
import { Ubuntu } from "next/font/google";
import { Github, Instagram, Link2, Linkedin, Smile, Twitch, Twitter, Youtube } from "lucide-react";
import EachSocial from "../components/eachSocial";

const ubuntu = Ubuntu({
    subsets: ["cyrillic"],
    style: "normal",
    weight: "300"
});

let profile = {
    "fullname": "Dagmawi Esayas",
    "username": "Dagmawi Babi",

}


export default function username() {
    return (
        <main className={ubuntu.className}>
            <div className="w-1/3 p-5 h-screen m-auto">
                <div >
                    <div className="m-auto w-fit text-center ">
                        <Smile className="m-auto" size={50} />
                        <p className="pt-5 text-2xl font-bold"> {profile["fullname"]} </p>
                    </div>
                </div>

                <div className="h-16"></div>

                {/* SOCIALS */}
                <div >
                    <div className="relative border border-zinc-800 rounded-2xl">
                        <div className="m-auto w-fit absolute -mt-7 mx-72 p-2 bg-[#121212]">
                            <Link2 />
                        </div>
                        <div className="pt-4 pb-3 px-2 grid grid-flow-row grid-cols-3 ">
                            <EachSocial 
                                icon={<Linkedin className=""/>} 
                                socialName="LinkedIn" 
                            />                        
                            <EachSocial 
                                icon={<Instagram className=""/>} 
                                socialName="Instagram" 
                            />
                            <EachSocial 
                                icon={<Twitter className=""/>} 
                                socialName="Twitter" 
                            />                        
                            <EachSocial 
                                icon={<Twitch className=""/>} 
                                socialName="Twitch" 
                            />
                            <EachSocial 
                                icon={<Github className=""/>} 
                                socialName="GitHub" 
                            />                        
                            <EachSocial 
                                icon={<Youtube className=""/>} 
                                socialName="YouTube" 
                            />
                            
                        </div>
                    </div>
                </div>

                {/* SOCIALS */}
                <div className="pt-14">
                    <div className="relative border border-zinc-800 rounded-2xl">
                        <div className="m-auto w-fit absolute -mt-7 mx-72 p-2 bg-[#121212]">
                            <Link2 />
                        </div>
                        <div className="pt-4 pb-3 px-2 grid grid-flow-row grid-cols-3 ">
                            <EachSocial 
                                icon={<Linkedin className=""/>} 
                                socialName="LinkedIn" 
                            />                        
                            <EachSocial 
                                icon={<Instagram className=""/>} 
                                socialName="Instagram" 
                            />
                            <EachSocial 
                                icon={<Twitter className=""/>} 
                                socialName="Twitter" 
                            />                        
                            <EachSocial 
                                icon={<Twitch className=""/>} 
                                socialName="Twitch" 
                            />
                            <EachSocial 
                                icon={<Github className=""/>} 
                                socialName="GitHub" 
                            />                        
                            <EachSocial 
                                icon={<Youtube className=""/>} 
                                socialName="YouTube" 
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}