import classes from './Characters.css'
import {getDataApi} from '../../utils/getDataApi.js'
import {ROOT_INDEX, ROOT_MODAL} from '../../constants/root'


class Characters {

    renderContent(data){
        let htmlContent =''
        data.forEach(({name, thumbnail:{path, extension}}) =>{
            const imgSrc = path + '.' + extension

            htmlContent +=`
                <li class="${classes.characters__item}">
                    <h3  class="${classes.characters__name}">${name}</h3>
                    <img  class="${classes.characters__img}" src="${imgSrc}"/>
                   
                </li>
            `
            
        })
        let htmlWrapper = `
        <div class="${classes.wrapper}">
                <ul class="${classes.characters__container}">${htmlContent}</ul>
                <button 
                class="${classes.characters__close}"
                onclick="modal.innerHTML=''">Close</button>
        </div>
            `
        ROOT_MODAL.innerHTML = htmlWrapper
        
    }
    renderNotif(){
        let htmlCont = `
        <div style="position:fixed;top:0;border:3px solid red;background:white;">
            <h2>No content!</h2>
            <button onclick="modal.innerHTML=''">Close</button>
        </div>
        `
        ROOT_MODAL.innerHTML = htmlCont
    }
    async render(uri){
        const data = await getDataApi.getData(uri)        
        data.length ? this.renderContent(data) :  this.renderNotif()
    }
    
}
export default new Characters()