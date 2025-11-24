const categories = [
    { label: "Mais assistidos", active: true, link: "/mais-assistidos"},
    { label: "Mais votados", active: true, link: "/mais-votados"},
    { label: "Novidades", active: true, link: "/novidades"},
    { label: "Top 10", active: true, link: "/top10"},
    { label: "Gêneros", active: true, link: "/generos"},
 ];

export function NavBar() {
    return(
        <nav className="flex bg-[#1c1c1c] border-b border-b-[#333] max-w-6xl mx-auto">
            <ol className="flex gap-8 list-none py-6">
                {categories.map((item)=>(
                     <li>
                        <a
                            href={item.link}
                            className={`text-sm 
                                ${item.active 
                                    ? "text-[#e50914] border-b-2 border-[#e50925] hover:text-[#e50925]" 
                                    : "text-[#ccc] hover:text-white"
                                }
                            `}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ol>
        </nav>
    )
}