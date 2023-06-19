import classNames from "classnames/bind"
import Styles from './Search.module.scss'
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from "react-redux";
import { searchJob } from "../../redux/action";
const cx = classNames.bind(Styles)

const Search = () => {
    const [search, setSeacrh] = useState('');
    const handleSearch = (e) => {
        setSeacrh(e.target.value)
    }
    const dispatch = useDispatch();
    const handleSearchJobs = () => {
        dispatch(
            searchJob(
                {
                    search
                }
            )
        )
        setSeacrh('')
    }
    return (
        <div className={cx('wrapper__search')}>
            <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="Search"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={handleSearch}
                    value={search}
                    />
                     <Button variant="danger" onClick={handleSearchJobs}>
                    Search
                </Button>{' '}
            </InputGroup>
            
        </div>
    )
}



export default Search