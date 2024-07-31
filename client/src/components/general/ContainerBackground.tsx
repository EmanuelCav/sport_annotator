import { ReactNode } from "react"

const ContainerBackground = ({ children }: { children: ReactNode }) => {
    return (
        <div className="fixed top-0 left-0 h-screen w-full justify-center items-center z-20 flex" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="w-1/3 bg-white p-4">
                {children}
            </div>
        </div>
    )
}

export default ContainerBackground