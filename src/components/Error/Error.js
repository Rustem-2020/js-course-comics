import {ROOT_INDEX} from '../../constants/root'
import classes from './Error.css'
class Error{
    render(){
        const htmlWrapper =`
        <div class="${classes.error__container}">
            <span>
                <h2 class="${classes.error__alert}">
                Произошла ошибка              
                </h2>
            </span>
        </div>
        `
        ROOT_INDEX.innerHTML = htmlWrapper
    }
}
export default new Error()