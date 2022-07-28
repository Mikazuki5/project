import { ReactNode } from "react"
import Navbar from "../component/navbar/navbar-container"
import Header from "./header-container"

type Props = {
  children?: ReactNode
  title?: string
  withNavbar?: boolean
} 

const LayoutContainer = ({ children, title = 'This is the default title', withNavbar = true }: Props) => {
  return(
    <div style={{overflowX: 'hidden', backgroundColor: '#111'}} className=''>
      <Header title={title} />
      {withNavbar && <Navbar />}
      {children}
    </div>
  )
}

export default LayoutContainer;