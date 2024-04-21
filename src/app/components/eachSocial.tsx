export default function EachSocial(props: any) {
    return (
        <div className="p-2">
            <div className="flex items-center border border-zinc-800 px-4 py-3 rounded-2xl bg-zinc-900 hover:border-zinc-700 hover:bg-zinc-800 hover:text-orange-500">
                <div className="w-ft">
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
        </div>
    );
}