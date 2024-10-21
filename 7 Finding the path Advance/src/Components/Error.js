import { useRouteError } from "react-router-dom"
const Error = () => {
    const err= useRouteError();
   
  return (
    <>
    <h1>Oops! Something went wrong.</h1><br/>
   <h3>{err.data}</h3>
   <h5>{err.status}</h5>
   <h6>{err.statusText}</h6>
    </>
  )
}

export default Error