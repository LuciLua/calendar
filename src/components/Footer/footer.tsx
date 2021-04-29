import { useFooter } from '../../contexts/FooterContext';
import styles from './footer.module.scss'


export function Footer(){
    
const {
    toggleList,
    isDisplay,

    toggleColor,
    isColor,

    usuarioList
    
} = useFooter();


    return(
        
        <div className={styles.footer}>
             <div className={!isDisplay ? styles.listagemNone : styles.listagem}>
      <h5>Listagem</h5>
      <h6>Maio</h6>
      <input placeholder={'Atividade'} type="text" className={styles.inputName}/>
      <p>
         <input type="time" className={styles.inputTime} /> 
         Até
         <input type="time" className={styles.inputTime}/>
          <input type="date" className={styles.inputDate}/>
          <span>Até</span>
          <input type="date" className={styles.inputDate}/>

      </p>
          

      <input placeholder={'Atividade'} type="text" className={styles.inputName}/>
      <p>
         <input type="time" className={styles.inputTime} /> 
         Até
         <input type="time" className={styles.inputTime}/>
          <input type="date" className={styles.inputDate}/>
          <span>Até</span>
          <input type="date" className={styles.inputDate}/>

      </p>

      <input placeholder={'Atividade'} type="text" className={styles.inputName}/>
      <p>
         <input type="time" className={styles.inputTime} /> 
         Até
         <input type="time" className={styles.inputTime}/>
          <input type="date" className={styles.inputDate}/>
          <span>Até</span>
          <input type="date" className={styles.inputDate}/>

      </p>

      <h6>Junho</h6>
      <input placeholder={'Atividade'} type="text" className={styles.inputName}/>
      <p>
         <input type="time" className={styles.inputTime} /> 
         Até
         <input type="time" className={styles.inputTime}/>
          <input type="date" className={styles.inputDate}/>
          <span>Até</span>
          <input type="date" className={styles.inputDate}/>

      </p>

      <input placeholder={'Atividade'} type="text" className={styles.inputName}/>
      <p>
         <input type="time" className={styles.inputTime} /> 
         Até
         <input type="time" className={styles.inputTime}/>
          <input type="date" className={styles.inputDate}/>
          <span>Até</span>
          <input type="date" className={styles.inputDate}/>

      </p>

      <input placeholder={'Atividade'} type="text" className={styles.inputName}/>
      <p>
         <input type="time" className={styles.inputTime} /> 
         Até
         <input type="time" className={styles.inputTime}/>
          <input type="date" className={styles.inputDate}/>
          <span>Até</span>
          <input type="date" className={styles.inputDate}/>

      </p>
    </div>
            <div className={styles.footerFill}>  
                <ul>
                {!isColor 
                    ?
                    <li>   
                        <input type="checkbox" name="choice" id={styles.cp1} value="add" onClick={toggleColor}/>
                        <label htmlFor="add"></label>
                        <a>
                            <img src="/ico_add.svg" alt=""/>
                            <span>Adicionar</span>
                        </a>     
                    </li>
                        :
                    <li id={styles.resultado}>
                        <input type="checkbox" name="choice" value="add" id={styles.cp1}onClick={toggleColor}/>
                        <label htmlFor="add"></label>
                        <a>
                        <img src="/ico_add.svg" alt=""/>
                        <span>Adicionar</span>
                        </a>
                    </li>
                        }                   
                     <li>
                    <input type="checkbox" name="choice" value="del" id={styles.cp1}/>
                    <label htmlFor="del"></label>
                    <a>
                        <img src="/ico_del.svg" alt=""/>
                        <span>Excluir</span>
                        </a>
                    </li>
                    <li>
                    <input type="checkbox" name="choice" value="edit" id={styles.cp1}/>
                    <label htmlFor="edit"></label>
                        <a href="/usuarios/1">
                        <img src="/ico_calendar.svg" alt=""/>
                        <span>Editar</span>
                        </a>
                    </li>      
                    <li id={styles.list}>
                    <input type="checkbox" name="choice" value="list" id={styles.cp1} onClick={toggleList}/>
                    <label htmlFor="list"></label>
                    <a>
                        <img src="/ico_list.svg"/>
                        <span>Listar</span>
                        </a>
                    </li>
                    <li>
                    <input id={styles.cor} type="color" name={styles.cores}/>
                        <a>
                        <img src="/ico_moon.svg" alt=""/>
                        <span>Tema</span>
                        </a>
                    </li>          
                </ul>
            </div>
        </div>
    );
}