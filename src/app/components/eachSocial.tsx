export default function EachSocial(props: any) {
    return (
        <div className="p-2 ">
            <div className="flex border border-zinc-800 px-4 py-3 rounded-2xl bg-zinc-900 hover:border-zinc-700 hover:bg-zinc-800 hover:text-orange-500">
                {/* <Linkedin className="text-blue-500"/> */}
                {props.icon}
                <span className="pl-3 font-bold text-2xl"> {props.socialName} </span>
            </div>
        </div>
    );
}