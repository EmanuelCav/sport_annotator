import InfoFooter from "./components/footer/InfoFooter"
import NavFooter from "./components/footer/NavFooter"

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 flex justify-center items-center">
      <NavFooter />
      <InfoFooter />
    </div>
  )
}

export default Footer