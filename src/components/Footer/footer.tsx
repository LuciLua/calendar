import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './footer.module.scss'

export function Footer(){
    
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    })

    return(
        <div className={styles.footer}>
            <div className={styles.footerFill}>
                <span>{currentDate}</span>
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
                    <li>
                        <a href="#">
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