import { useRef } from "react"

const Input = ({setName}) => {
    const ref = useRef()
    return <>
    <div>
        <input type="text" ref={ref}/>
        <button onClick={() => setName(ref.current.value)}>Log In</button>
    </div>
    </>
}

export default Input