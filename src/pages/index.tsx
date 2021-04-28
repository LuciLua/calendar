import Head from 'next/head'
import styles from '../pages/home.module.scss'
import { api } from '../services/api';
import React from 'react';
import { GetStaticProps } from 'next';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import { id } from 'date-fns/locale';
import Link from 'next/link';



const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
  locale: ptBR,
}) 

type Usuario = {
  id: string;
  username: string;
  idade: string;
  hobbie_principal: string;
  hobbie_secundario: string;
}

type HomeProps = {
  allUsers: Usuario[];
}
 

export default function Home({allUsers}: HomeProps) {

  const usuarioList = [...allUsers];

  return (
   <div>
    <Head>
        <title>Calendario</title>
    </Head>

    <div className={styles.header}>
      <span> Link: 
        {allUsers.map((usuario)=>{
        return(
          <span><Link href={`/usuarios/${usuario.id}`}>
          <a>{usuario.username} here </a>
          </Link></span>
          )})}
      </span>
      <span>{currentDate}<p></p> 2021</span>
    </div>
    <div className={styles.calendar}>
      <table>
        <tbody>
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
          <td id={styles.d1}><input type="checkbox"></input></td>
          <td id={styles.d2}><input type="checkbox"></input></td>
          <td id={styles.d3}><input type="checkbox"></input></td>
          <td id={styles.d4}><input type="checkbox"></input></td>
          <td id={styles.d5}><input type="checkbox"></input></td>
          <td id={styles.d6}><input type="checkbox"></input></td>
          <td id={styles.d7}>1<input type="checkbox"></input></td>
        </tr>
        <tr className={styles.days}>
          <td id={styles.d8}>2<input type="checkbox"></input></td>
          <td id={styles.d9}>3<input type="checkbox"></input></td>
          <td id={styles.d10}>4<input type="checkbox"></input></td>
          <td id={styles.d11}>5<input type="checkbox"></input></td>
          <td id={styles.d12}>6<input type="checkbox"></input></td>
          <td id={styles.d13}>7<input type="checkbox"></input></td>
          <td id={styles.d14}>8<input type="checkbox"></input></td>
        </tr>
        <tr className={styles.days}>
          <td id={styles.d15}>9<input type="checkbox"></input></td>
          <td id={styles.d16}>10<input type="checkbox"></input></td>
          <td id={styles.d17}>11<input type="checkbox"></input></td>
          <td id={styles.d18}>12<input type="checkbox"></input></td>
          <td id={styles.d19}>13<input type="checkbox"></input></td>
          <td id={styles.d20}>14<input type="checkbox"></input></td>
          <td id={styles.d21}>15<input type="checkbox"></input></td>
        </tr>
        <tr className={styles.days}>
          <td id={styles.d22}>16<input type="checkbox"></input></td>
          <td id={styles.d23}>17<input type="checkbox"></input></td>
          <td id={styles.d24}>18<input type="checkbox"></input></td>
          <td id={styles.d25}>19<input type="checkbox"></input></td>
          <td id={styles.d26}>20<input type="checkbox"></input></td>
          <td id={styles.d27}>21<input type="checkbox"></input></td>
          <td id={styles.d28}>22<input type="checkbox"></input></td>
        </tr>
        <tr className={styles.days}>
          <td id={styles.d29}>23<input type="checkbox"></input></td>
          <td id={styles.d30}>24<input type="checkbox"></input></td>
          <td id={styles.d31}>25<input type="checkbox"></input></td>
          <td id={styles.d32}>26<input type="checkbox"></input></td>
          <td id={styles.d33}>27<input type="checkbox"></input></td>
          <td id={styles.d34}>28<input type="checkbox"></input></td>
          <td id={styles.d35}>29<input type="checkbox"></input></td>
        </tr>
        <tr className={styles.days}>
          <td id={styles.d36}>30<input type="checkbox"></input></td>
          <td id={styles.d37}>31<input type="checkbox"></input></td>
          <td id={styles.d38}><input type="checkbox"></input></td>
          <td id={styles.d39}><input type="checkbox"></input></td>
          <td id={styles.d40}><input type="checkbox"></input></td>
          <td id={styles.d41}><input type="checkbox"></input></td>
          <td id={styles.d42}><input type="checkbox"></input></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

export const getStaticProps: GetStaticProps = async() =>{

  const { data } = await api.get('usuarios',{});

  const usuarios = data.map(usuario =>{

  return{
    id: usuario.id,
    username: usuario.username,
    idade: usuario.idade,
    hobbie_principal: usuario.hobbie_principal,
    hobbie_secundario: usuario.hobbie_secundario,
  }
}
)

const allUsers = usuarios.slice(usuarios.length);

  return{
    props: {
      allUsers,
    },
    revalidate: 60 * 60 * 8,
  }
}