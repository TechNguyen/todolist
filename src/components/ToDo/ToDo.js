import classNames from 'classnames/bind'
import Styles from './ToDo.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction, changeStatusJobs } from '../../redux/action';
import { useState } from 'react';
import { todoList } from '../../redux/selector';
import LoadingButton from '../Loadingbutton/Loadingbtn';               
import Search from '../Search/Search';
const cx = classNames.bind(Styles)

const ToDo = () => {
    const dispatch = useDispatch();
    const [todoname, setName] = useState('');
    const [completed, setCompleted] = useState(false);
    const [sortby, setSort] = useState('all');
    // add job
    const handleAddToList = () => {
        dispatch( addTodoAction({
            id: Math.random(),
            name: todoname,
            completed: false
        }))
        setName('')
    }
    const hanleName = (e) => {
        setName(e.target.value)
    }
    // Change completed
    const hanldeSetcomplete = (e) => {
        setCompleted(e.target.value === 'true' ? true : false)
    }
    const hanleChangeComplted = (e) => {
        dispatch(
            changeStatusJobs(
                {
                    id: e.target.id,
                    completed: completed
                }
            )
        )
    }
    // sort by
    const hanleSort = (e) => {
        setSort(e.target.value)
    }
    const todoListArr = useSelector(todoList)
    return (
        <div className={cx('todo')}>
            <div className={cx('todo__banner')}>
                <span>
                    <img src="" alt="" />
                </span>
                    <h1>To Do List</h1>
            </div>
            <div className={cx('todo__body')}>

                    <Search />

                    <div className={cx('todo__sort')}>
                        <div className={cx('todo__add')}>
                            <InputGroup size="sm" className="mb-3">
                                <Form.Control
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    placeholder='Add something'
                                    value={todoname}
                                    onChange={hanleName}
                                />
                                <Button variant="success" onClick={handleAddToList}>Add</Button>{' '}
                            </InputGroup>   
                        </div>
                    </div>


                    <div className={cx('todo__action')}>
                        <Form.Select aria-label="Default select example" onChange={hanleSort}>
                            <option defaultChecked value={'all'}>Sort By</option>
                            <option value="all">All</option>
                            <option value="complete">Complete</option>
                            <option value="todo">To Do</option>
                        </Form.Select>
                        <LoadingButton choose = {sortby} />
                    </div>


                    <div className={cx('form-card')}>

                        {todoListArr.map((todo) =>
                     (           
                        <Card style={{ width: '18rem' }} key={todo.id}>
                            <Card.Body>
                               <Card.Title style={{color: 'green'}}>Completed</Card.Title>
                                <Card.Text>
                                    {todo.name}
                                </Card.Text>
                            </Card.Body>
                            <div key={todo.id} className="mb-3" onChange={hanldeSetcomplete} >
                                    <Form.Check
                                        inline
                                        label="Completed"
                                        name={todo.id}
                                        type="radio"
                                        id={`inline-radio-1`}
                                        value={true}
                                    />
                                    <Form.Check
                                        inline
                                        label="To do"
                                        name={todo.id}
                                        type="radio"
                                        id={`inline-radio-2`}
                                        value={false}
                                    />
                                   <Button variant="warning" id={todo.id} onClick={(e) => hanleChangeComplted(e)}>Change</Button>{' '}
                            </div>
                        </Card>
                        )
                        )}
                      
                    </div>
            </div>
        </div>
    )
}

export default ToDo;