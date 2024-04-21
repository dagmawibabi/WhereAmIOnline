import Image from "next/image";

export default function PodcastContainer(props: any) {
    return (
        <div className="p-2 w-full">
            <div className="bg-[url('/assets/spotify.png')] bg-center bg-blend-overlay h-40  border border-zinc-800 rounded-2xl bg-zinc-900 hover:border-zinc-700 hover:bg-zinc-800 hover:text-purple-500">
                <div className="flex justify-center items-center bg-zinc-800 h-full bg-opacity-90">

                <div className="w-fit">
                    {props.icon}
                </div>

                <span className="pl-2 font-bold text-lg
                    sm:pl-2 sm:font-bold sm:text-xl
                    md:pl-2 md:font-bold md:text-xl
                    lg:pl-2 lg:font-semibold lg:text-xl
                "> 
                    {props.socialName} 
                </span>
                </div>

                {/* <div className="w-full h-56">
                    <Image 
                        fill
                        src="/assets/spotify.png" 
                        alt="Spotify" 
                        objectFit="cover"
                    />
                </div> */}
            </div>
        </div>
    );
}