
import LineTitle from "./LineTitle"
import LineInput from "./LineInput"
import LineLabel from "./LineLabel"

function Search() {
    return (
        <>
            {/* Filtros */}
            <div className="max-w-305.75 w-full flex flex-col">
                <LineTitle h="[48px]">Filtros</LineTitle>
                <div className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-12 border-red-800 border-4 px-3 py-3 rounded-2xl">
                    <div className="col-span-1 md:col-span-12 flex flex-row gap-1">
                        <LineLabel>Titulo:</LineLabel>
                        <LineInput 
                        placeholder="A história dos hebreus" 
                        value={null}
                        onchange={(e) => (e.target.value)}
                        />
                    </div>
                    <div className="col-span-1 md:col-span-6 flex flex-row gap-1">
                        <LineLabel>Autor:</LineLabel>
                        <LineInput 
                        placeholder="Flávio Josefo" 
                        value={null}
                        onchange={(e) => (e.target.value)}
                        />
                    </div>
                    <div className="col-span-1 md:col-span-6 flex flex-row gap-1">
                        <LineLabel>Editora:</LineLabel>
                        <LineInput 
                        placeholder="Casa Publicadora das Assembleias de Deus" 
                        value={null}
                        onchange={(e) => (e.target.value)}
                        />
                    </div>
                    <div className="col-span-1 md:col-span-3 flex flex-row gap-1">
                        <LineLabel>Ano inicial:</LineLabel>
                        <LineInput 
                        placeholder="-100" 
                        value={null}
                        onchange={(e) => (e.target.value)}
                        />
                    </div>
                    <div className="col-span-1 md:col-span-3 flex flex-row gap-1">
                        <LineLabel>Ano final:</LineLabel>
                        <LineInput 
                        placeholder="-37" 
                        value={null}
                        onchange={(e) => (e.target.value)}
                        />
                    </div>
                    <div className="col-span-1 md:col-span-6 flex flex-row gap-1">
                        <LineLabel>Isbn:</LineLabel>
                        <LineInput 
                        placeholder="12398522498" 
                        value={null}
                        onchange={(e) => (e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Resultados da busca */}
            <div className="bg-amber-200 max-w-305.75 w-full flex flex-col">
                <LineTitle h="[48px]">Resultados</LineTitle>
            </div>
        </>
    )
}

export default Search