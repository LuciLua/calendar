import Head from 'next/head'
import styles from '../pages/home.module.scss'
import { api } from '../services/api';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './_app';
import { GetStaticProps } from 'next';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
  locale: ptBR,
}) 

type Usuarios = {
  id: number;
  username: string;
  idade: number;
  hobbies: string;
  hobbie_principal: string;
  hobbie_secundario: string;
}


export default function Home() {

  return (
   <div>
   <Head>
      <title>Calendário</title>
   </Head>
    <div className={styles.header}>
      <span>{currentDate} <p></p> 2021</span>
    </div>
    <div className={styles.calendar}>
      <table>
        <tr className={styles.Week}>
          <th>Domingo</th>
          <th>Segunda</th>
          <th>Terça</th>
          <th>Quarta</th>
          <th>Quinta</th>
          <th>Sexta</th>
          <th>Sábado</th>
        </tr>
        <tr className={styles.days}>
          <td id={styles.d1}></td>
          <td id={styles.d2}></td>
          <td id={styles.d3}></td>
          <td id={styles.d4}></td>
          <td id={styles.d5}></td>
          <td id={styles.d6}></td>
          <td id={styles.d7}>1</td>
        </tr>
        <tr className={styles.days}>
          <td id={styles.d8}>2</td>
          <td id={styles.d9}>3</td>
          <td id={styles.d10}>4</td>
          <td id={styles.d11}>5</td>
          <td id={styles.d12}>6</td>
          <td id={styles.d13}>7</td>
          <td id={styles.d14}>8</td>
        </tr>
        <tr className={styles.days}>
          <td id={styles.d15}>9</td>
          <td id={styles.d16}>10</td>
          <td id={styles.d17}>11</td>
          <td id={styles.d18}>12</td>
          <td id={styles.d19}>13</td>
          <td id={styles.d20}>14</td>
          <td id={styles.d21}>15</td>
          </tr>
          <tr className={styles.days}>
          <td id={styles.d22}>16</td>
          <td id={styles.d23}>17</td>
          <td id={styles.d24}>18</td>
          <td id={styles.d25}>19</td>
          <td id={styles.d26}>20</td>
          <td id={styles.d27}>21</td>
          <td id={styles.d28}>22</td>
          </tr>
          <tr className={styles.days}>
          <td id={styles.d29}>23</td>
          <td id={styles.d30}>24</td>
          <td id={styles.d31}>25</td>
          <td id={styles.d32}>26</td>
          <td id={styles.d33}>27</td>
          <td id={styles.d34}>28</td>
          <td id={styles.d35}>29</td>
          </tr>
          <tr className={styles.days}>
          <td id={styles.d36}>30</td>
          <td id={styles.d37}>31</td>
          <td id={styles.d38}></td>
          <td id={styles.d39}></td>
          <td id={styles.d40}></td>
          <td id={styles.d41}></td>
          <td id={styles.d42}></td>
          </tr>
      </table>
    </div>
    </div>
  )
}

// export const GetStaticProps: GetStaticProps = async () =>{
//   const { data } = await api.get('usuarios',{
//     params:{
//       _order: 'desc'
//     }
//   })

//   const usuario = data.map(usuario => {
//     return {
//       id: usuario.id,
//       nome: usuario.nome,
//       idade: usuario.idade,
//       hobbies: usuario.hobbies,
//       hobbie_primario: usuario.hobbies.hobbie_primario,
//       hobbie_secundario: usuario.hobbies.hobbie_secundario
//     };
//   })
