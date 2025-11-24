import { useState, useEffect } from "react";
import { useMovies } from "../../cases/movies/hooks/use-hook"
import { MovieGenres } from "../../cases/movies/components/movie-genger";


export function Highlight() {
    const { selectedMovie } = useMovies();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => (

        setIsLoading(!selectedMovie)

    ), [selectedMovie])

    return (
        isLoading ? (
            <div className="flex justify-center itens-center">
                <p className="text-2xl text-center text-white">Carregado...</p>
            </div>
        ) : (
            <section className="flex bg-position-[left_calc((50vw-170px)-340px)_top] bg-cover relative"
                style={{
                    backgroundImage: `url(${selectedMovie.highlight})`
                }}>
                <div className="absolute inset-0 z-10 bg-linear-to-r from-[#111] from-[calc((50vw-70px)-340px)] via-[#111]/70 via-50% to-[#111]/70"></div>
                <div className="container relative z-20 mx-auto flex gap-8 py-8">
                    <img className="rounded-lg" src={selectedMovie.image} alt="Capa Filme" />
                    <div className="flex flex-col">
                        <h2 className="text-5xl font-normal text-white">{selectedMovie.title}</h2>



                        <MovieGenres movie={selectedMovie}>
                            <span className="pl-4 text-gray-300">
                                {selectedMovie.duration.replace(':', 'h ') + 'm'}
                            </span>
                        </MovieGenres>

                        <div className="flex flex-col gap-2">
                            <h4 className="pb-2 pt-12 text-2xl font-normal text-white">Sinopse</h4>
                            <p className="text-sm text-gray-400">{selectedMovie.sinopse}</p>

                        </div>
                        <div className="my-6 flex gap-4">
                            <button className="cursor-pointer rounded border-none bg-[#e50914] px-6 py-3 font-bold text-white transition hover:bg-[#b8070f]">Assistir</button>
                            <button className="cursor-pointer rounded border border-white/30 bg-white/20 px-6 py-3 text-white transition hover:bg-white/30">Detalhes</button>
                            <button className="cursor-pointer rounded border border-white/30 bg-white/20 px-6 py-3 text-white transition hover:bg-white/30">+ Adicionar à lista</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    )
}