import { useFooter } from '../../contexts/FooterContext';
import styles from './footer.module.scss'

export function Footer(){
    
const {
    toggleList,
    isDisplay,

    toggleColor,
    isColor
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
                    <li id={styles.resultado} onClick={toggleColor}>
                            <a href="#">
                            <img src="ico_add.svg" alt=""/>
                            <span>Adicionar</span>
                            </a>
                        </li>
                        :
                        <li onClick={toggleColor}>
                            <form action="">
                            <a href="#">
                            <img src="ico_add.svg" alt=""/>
                            <span>Adicionar</span>
                            <input type="color" name={styles.cores} value="#fff" onSubmit={function(){
                                let dias = document.getElementById('d7').style.background;
                                document.getElementById("resultado").style.background = dias['cores'].value;  
                                return false;
                          }
                        }/>
                            </a>
                            </form>
                        </li>}
                        
                    

                    <li>
                        <a href="#">
                        <img src="ico_del.svg" alt=""/>
                        <span>Excluir</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <img src="ico_calendar.svg" alt=""/>
                        <span>Editar</span>
                        </a>
                    </li>
                    <li id={styles.list}>
                        <a href="#" onClick={toggleList}>
                        <img src="ico_list.svg" alt=""/>
                        <span>Listar</span>
                        </a>
                    </li>
                    <li>
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