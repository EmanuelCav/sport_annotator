import MainImage from "./components/main/MainImage"
import MainText from "./components/main/MainText"

const Main = ({ redirectCreate }: { redirectCreate: () => void }) => {

  return (
    <div className="h-screen w-full flex justify-center items-center flex-wrap">
        <MainText redirectCreate={redirectCreate} />
        <MainImage />
    </div>
  )
}

export default Main