import {API_URL, URL_COMICS,  URL_CHARACTERS, IMG_SIZE, NO_IMAGE } from '../../constants/api.js'
import {getDataApi} from '../../utils/getDataApi.js'
import classes from './Comics.css'
import {ROOT_INDEX} from '../../constants/root'
import Characters from '../Characters'
import Error from '../Error'




class Comics{
    renderComics(data){
        let htmlContent = ''
        data.forEach( ({id, title, thumbnail: {path, extension}}) =>{
            //const uri = /v1/public/comics/{comicId}/characters            
            if (path.lastIndexOf(NO_IMAGE) === -1){
                const uri = API_URL + URL_COMICS + '/' + id + '/' +  URL_CHARACTERS
                const imgSrc = path + '/' + IMG_SIZE + '.' + extension
                htmlContent += `
                    <li class="comics__item ${classes.comics__item}" data-uri="${uri}">
                    <span class="${classes.comics__name}">${title}</span>
                    <img class="${classes.comics__img}" src='${imgSrc}'/>
                    </li>
                `
           }            
        })
         const htmlWrapper = `
                <ul class="${classes.comics__container}">${htmlContent}</ul>
            `
        ROOT_INDEX.innerHTML = htmlWrapper

    }
    async render(){        
        const data = await getDataApi.getData(API_URL + URL_COMICS) 
        // if (data){ this.renderComics(data) ...              
        data ? this.renderComics(data) : Error.render()
               
                
    }
    eventListener(){
        document.querySelectorAll('.comics__item').forEach(            
            (element) =>{
                const uri = element.getAttribute('data-uri')
                element.addEventListener('click', () => {                    
                    Characters.render(uri)                                  
                    
                })
            }
        )
    }
}
export default new Comics()