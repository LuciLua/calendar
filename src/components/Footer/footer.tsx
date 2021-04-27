import { useFooter } from '../../contexts/FooterContext';
import styles from './footer.module.scss'

export function Footer(){
    
const {
    toggleList,
    isDisplay
} = useFooter();

    return(
        
        <div className={styles.footer}>
             <div className={!isDisplay ? styles.listagemNone : styles.listagem}>
      <h5>Listagem</h5>
      <h6>Maio</h6>
      <p>o Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus placeat saepe accusantium, officia sed nulla magni aut reiciendis in temporibus aliquam pariatur alias suscipit dolore sapiente blanditiis quas fuga magnam!</p>
      <p>o Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus placeat saepe accusantium, officia sed nulla magni aut reiciendis in temporibus aliquam pariatur alias suscipit dolore sapiente blanditiis quas fuga magnam!</p>
      <p>o Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus placeat saepe accusantium, officia sed nulla magni aut reiciendis in temporibus aliquam pariatur alias suscipit dolore sapiente blanditiis quas fuga magnam!</p>
      <h6>Junho</h6>
      <p>o Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus placeat saepe accusantium, officia sed nulla magni aut reiciendis in temporibus aliquam pariatur alias suscipit dolore sapiente blanditiis quas fuga magnam!</p>
      <p>o Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus placeat saepe accusantium, officia sed nulla magni aut reiciendis in temporibus aliquam pariatur alias suscipit dolore sapiente blanditiis quas fuga magnam!</p>
      <p>o Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus placeat saepe accusantium, officia sed nulla magni aut reiciendis in temporibus aliquam pariatur alias suscipit dolore sapiente blanditiis quas fuga magnam!</p>
    </div>
            <div className={styles.footerFill}>
                <ul>
                    <li>
                        <a href="#">
                        <img src="ico_add.svg" alt=""/>
                        <span>Adicionar</span>
                        </a>
                    </li>
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