import { te } from 'date-fns/locale';
import { useEffect, useRef } from 'react';
import { useFooter } from '../../contexts/FooterContext';
import styles from './footer.module.scss'

export function Footer(){
    
const {
    toggleList,
    isDisplay,

    toggleColor,
    isColor,
    
} = useFooter();


    return(
        
        <div className={styles.footer}>
             <div className={!isDisplay ? styles.listagemNone : styles.listagem}>
      <h5>Listagem</h5>
      <h6>Maio</h6>
      <p>o<strong>
          00:00 às 00:00 | Dia: 03
        </strong> <br />Curso JavaScript - Udemy</p>
        <p>o<strong>
          00:00 às 00:00 | Dia: 03
        </strong> <br />Curso JavaScript - Udemy</p>
        <p>o<strong>
          00:00 às 00:00 | Dia: 03
        </strong> <br />Curso JavaScript - Udemy</p>
      <h6>Junho</h6>
      <p>o<strong>
          00:00 às 00:00 | Dia: 03
        </strong> <br />Curso JavaScript - Udemy</p>
        <p>o<strong>
          00:00 às 00:00 | Dia: 03
        </strong> <br />Curso JavaScript - Udemy</p>
        <p>o<strong>
          00:00 às 00:00 | Dia: 03
        </strong> <br />Curso JavaScript - Udemy</p>
    </div>
            <div className={styles.footerFill}>        
                <ul>
                {!isColor 
                    ?
                    <li>   
                        <input type="radio" name={styles.cr} id={styles.cp1} onClick={toggleColor}/>
                        <a href="#">
                            <img src="ico_add.svg" alt=""/>
                            <span>Adicionar</span>
                        </a>     
                    </li>
                        :
                    <li id={styles.resultado}>
                        <input type="radio" name={styles.cr} id={styles.cp1}onClick={toggleColor}/>
                        <a href="#">
                        <img src="ico_add.svg" alt=""/>
                        <span>Adicionar</span>
                        </a>
                    </li>
                        }                   
                     <li>
                    <input type="radio" name={styles.cr} id={styles.cp1}/>
                        <a href="#">
                        <img src="ico_del.svg" alt=""/>
                        <span>Excluir</span>
                        </a>
                    </li>


                    <li>
                    <input type="radio" name={styles.cr} id={styles.cp1}/>
                        <a href="#">
                        <img src="ico_calendar.svg" alt=""/>
                        <span>Editar</span>
                        </a>
                    </li>      
                    <li id={styles.list}>
                    <input type="radio" name={styles.cr} id={styles.cp1} onClick={toggleList}/>
                        <a>
                        <img src="ico_list.svg" alt=""/>
                        <span>Listar</span>
                        </a>
                    </li>
                    <li>
                    <input id={styles.cor} type="color" name={styles.cores}/>
                        <a href="#">
                        <img src="ico_moon.svg" alt=""/>
                        <span>Tema</span>
                        </a>
                    </li>          
                </ul>
            </div>
        </div>
    );
}