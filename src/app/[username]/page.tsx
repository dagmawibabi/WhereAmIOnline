/* eslint-disable react/no-unescaped-entities */
import { Ubuntu } from "next/font/google";
import { Code2, Dribbble, EarthIcon, Github, Instagram, Laptop2, Link2, Linkedin, LucidePodcast, Mails, Mic, NotebookPen, Podcast, QrCode, Smile, Twitch, Twitter, Youtube } from "lucide-react";
import EachSocial from "../components/eachSocial";
import LinkGroup from "../components/linkGroup";
import PodcastContainer from "../components/otherContainer";
import OtherContainer from "../components/otherContainer";
import RowContainer from "../components/rowContainer";
import WideColumnContainer from "../components/wideColumnContainer";
import TwoColumnContainer from "../components/twoColumnContainer";

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
            <div className="w-full p-5 m-auto
                lg:w-1/3
            ">
                {/* INTRO */}
                <div >
                    <div className="m-auto w-fit text-center ">
                        <Smile className="m-auto" size={60} />
                        <p className="pt-5 text-2xl font-bold"> {profile["fullname"]} </p>
                        <div className="flex justify-center align-middle items-end text-zinc-400">
                            <p className="pt-2 pr-2  font-bold"> <span className="text-xs">AKA</span> {profile["username"]} </p>
                            <QrCode className="" />
                        </div>
                    </div>
                </div>

                {/* SOCIALS */}
                <LinkGroup 
                    colStyle = { true }
                    icon = {<Link2 size={30}/>} 
                    links = {
                        <>
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
                                icon={<Dribbble size={25}/>} 
                                socialName="Dribble" 
                            />                        
                            <EachSocial 
                                icon={<Youtube size={25}/>} 
                                socialName="YouTube" 
                            />
                        </>
                    }
                />

                {/* WEBSITE */}
                <TwoColumnContainer 
                    colStyle = { false }
                    icon = {<EarthIcon size={30}/>} 
                    links = {
                        <>
                            <RowContainer 
                                icon={<NotebookPen size={25}/>} 
                                socialName="Blog" 
                            />
                            <RowContainer 
                                icon={<Mic size={25}/>} 
                                socialName="Podcast" 
                            />
                            <RowContainer 
                                icon={<Mails size={25}/>} 
                                socialName="Newsletter" 
                            />
                            <RowContainer 
                                icon={<Laptop2 size={25}/>} 
                                socialName="Website" 
                            />
                        </>
                    }
                />

                {/* CODE */}
                <WideColumnContainer 
                    colStyle = { false }
                    icon = {<Code2 size={30}/>} 
                    links = {
                        <>
                            <OtherContainer 
                                icon={<Github size={25}/>} 
                                socialName="GitHub" 
                            />
                            <OtherContainer 
                                icon={<Dribbble size={25}/>} 
                                socialName="Dribble" 
                            />
                        </>
                    }
                />

                {/* PODCAST */}
                <LinkGroup 
                    colStyle = { false }
                    icon = {<Mic size={30}/>} 
                    links = {
                        <>
                            <OtherContainer 
                                icon={<LucidePodcast size={25}/>} 
                                socialName="Spotify" 
                            />
                        </>
                    }
                />
            </div>
        </main>
    );
}