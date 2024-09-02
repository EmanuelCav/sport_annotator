import MainImage from "./components/main/MainImage"
import MainText from "./components/main/MainText"

const Main = ({ redirectCreate }: { redirectCreate: () => void }) => {

  return (
    <div className="h-screen mx-auto max-w-6xl w-full flex justify-center items-center flex-wrap">
        <MainText redirectCreate={redirectCreate} />
        <MainImage />
    </div>
  )
}

export default Main