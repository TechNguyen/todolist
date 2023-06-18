import classNames from "classnames/bind"
import Styles from './Search.module.scss'
import { useState } from "react"
import { useSelector } from "react-redux"
const cx = classNames.bind(Styles)

const Search = () => {
    const [search, setSeacrh] = useState('');
    const searchArr = useSelector()
    return (
        <>
            
        </>
    )
}



export default Search