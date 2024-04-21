/* eslint-disable react/no-unescaped-entities */
import { Ubuntu } from "next/font/google";
import { Github, Instagram, Link2, Linkedin, LucidePodcast, Podcast, Smile, Twitch, Twitter, Youtube } from "lucide-react";
import EachSocial from "../components/eachSocial";
import LinkGroup from "../components/linkGroup";
import PodcastContainer from "../components/podcastContainer";

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
            <div className="w-full p-5 h-screen m-auto
                lg:w-1/3
            ">
                <div >
                    <div className="m-auto w-fit text-center ">
                        <Smile className="m-auto" size={50} />
                        <p className="pt-5 text-2xl font-bold"> {profile["fullname"]} </p>
                    </div>
                </div>


                {/* SOCIALS */}
                <div className="pt-8
                    lg:pt-14
                ">
                    <div className="relative border border-zinc-800 rounded-2xl">
                        <div className="w-full -mt-7 p-2">
                            <Link2 className="mx-auto bg-[#121212] p-2" size={40}/>
                        </div>
                        
                        <div className="pb-3 px-2 grid grid-flow-row grid-cols-2
                            lg:grid-cols-3 
                        ">
                            <EachSocial 
                                icon={<Linkedin size={25}/>} 
                                socialName="LinkedIn" 
                            />                        
                            <EachSocial 
                                icon={<Instagram size={25}/>} 
                                socialName="Instagram" 
                            />
                            <EachSocial 
                                icon={<Twitter size={25}/>} 
                                socialName="Twitter" 
                            />                        
                            <EachSocial 
                                icon={<Twitch size={25}/>} 
                                socialName="Twitch" 
                            />
                            <EachSocial 
                                icon={<Github size={25}/>} 
                                socialName="GitHub" 
                            />                        
                            <EachSocial 
                                icon={<Youtube size={25}/>} 
                                socialName="YouTube" 
                            />
                            
                        </div>
                    </div>
                </div>

                {/* SOCIALS */}
                <LinkGroup 
                    colStyle = { false }
                    icon = {<Podcast className="mx-auto bg-[#121212] p-2" size={40}/>} 
                    links = {
                        <>
                            <PodcastContainer 
                                icon={<LucidePodcast size={25}/>} 
                                socialName="Spotify" 
                            />
                            <PodcastContainer 
                                icon={<Linkedin size={25}/>} 
                                socialName="LinkedIn" 
                            />    
                               

                        </>
                    }
                />
            </div>
        </main>
    );
}