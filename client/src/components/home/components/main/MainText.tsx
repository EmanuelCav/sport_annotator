
const MainText = ({ redirectCreate }: { redirectCreate: () => void }) => {
    return (
        <div className="max-w-xl h-full w-full flex justify-center items-center flex-col select-none">
            <h1 className="text-bold text-4xl text-orange-500 my-4 text-center">Sports Scoreboard</h1>
            <p className="text-semibold text-2xl text-orange-500 my-4 text-center">Un marcador para todos los deportes</p>
            <p className="text-semibold text-xl text-orange-500 my-4 text-center">Una solución para llevar un control preciso y dinámico de los marcadores en una amplia variedad de deportes. 
                Diseñada para ser intuitiva y accesible, permite registrar y seguir los puntajes en tiempo real.</p>
            <button className="bg-orange-500 w-42 p-4 text-white text-semibold rounded-lg hover:bg-orange-400 active:bg-orange-500 my-4" onClick={redirectCreate}>
                GET STARTED
            </button>
        </div>
    )
}

export default MainText