import { useFooter } from '../contexts/FooterContext';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

export function Footer(){
    
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    })

    return(
        <header>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, architecto deserunt hic neque fugiat quasi veniam maiores quidem atque illum illo consectetur ad sint excepturi quisquam error quam cum provident?
            </p>
            <span>{currentDate}</span>
        </header>
    );
}