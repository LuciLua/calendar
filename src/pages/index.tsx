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
      {/* <span> Link: 
        {allUsers.map((usuario)=>{
        return(
          <span><Link href={`/usuarios/${usuario.id}`}>
          <a>{usuario.username} here </a>
          </Link></span>
          )})}
      </span> */}
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
          <td id={styles.d1}>
            <input disabled value="d1" type="checkbox"/>
            <label htmlFor="d1"></label>
          </td>
          <td id={styles.d2}>
            <input disabled value="d2" type="checkbox"/>
            <label htmlFor="d2"></label>
            </td>
          <td id={styles.d3}>
            <input disabled value="d3" type="checkbox"/>
            <label htmlFor="d3"></label>
          </td>
          <td id={styles.d4}>
            <input disabled value="d4" type="checkbox"/>
            <label htmlFor="d4"></label>
          </td>
          <td id={styles.d5}>
            <input disabled value="d5" type="checkbox"/>
            <label htmlFor="d5"></label>
          </td>
          <td id={styles.d6}>
            <input disabled value="d6" type="checkbox"/>
            <label htmlFor="d6"></label>
          </td>
          <td id={styles.d7}>1
          <input value="d7" type="checkbox"/>
          <label htmlFor="d7"></label>
        </td>
        </tr>
        <tr className={styles.days}>
          <td id={styles.d8}>2
          <input value="d8" type="checkbox"/>
          <label htmlFor="d8"></label>
        </td>
          <td id={styles.d9}>3
          <input value="d9" type="checkbox"/>
          <label htmlFor="d9"></label>
        </td>
          <td id={styles.d10}>4
          <input value="d10" type="checkbox"/>
          <label htmlFor="d10"></label>
        </td>
          <td id={styles.d11}>5
          <input value="d11" type="checkbox"/>
          <label htmlFor="d11"></label>
        </td>
          <td id={styles.d12}>6
          <input value="d12" type="checkbox"/>
          <label htmlFor="d12"></label>
        </td>
          <td id={styles.d13}>7
          <input value="d13" type="checkbox"/>
          <label htmlFor="d13"></label>
        </td>
          <td id={styles.d14}>8
          <input value="d14" type="checkbox"/>
          <label htmlFor="d14"></label>
        </td>
        </tr>
        <tr className={styles.days}>
          <td id={styles.d15}>9
          <input value="d15" type="checkbox"/>
          <label htmlFor="d15"></label>
        </td>
          <td id={styles.d16}>10
          <input value="d16" type="checkbox"/>
          <label htmlFor="d16"></label>
        </td>
          <td id={styles.d17}>11
          <input value="d17" type="checkbox"/>
          <label htmlFor="d17"></label>
        </td>
          <td id={styles.d18}>12
          <input value="d18" type="checkbox"/>
          <label htmlFor="d18"></label>
        </td>
          <td id={styles.d19}>13
          <input value="d19" type="checkbox"/>
          <label htmlFor="d19"></label>
        </td>
          <td id={styles.d20}>14
          <input value="d20" type="checkbox"/>
          <label htmlFor="d20"></label>
        </td>
          <td id={styles.d21}>15
          <input value="d21" type="checkbox"/>
          <label htmlFor="d21"></label>
        </td>
        </tr>
        <tr className={styles.days}>
          <td id={styles.d22}>16
          <input value="d22" type="checkbox"/>
          <label htmlFor="d22"></label>
        </td>
          <td id={styles.d23}>17
          <input value="d23" type="checkbox"/>
          <label htmlFor="d23"></label>
        </td>
          <td id={styles.d24}>18
          <input value="d24" type="checkbox"/>
          <label htmlFor="d24"></label>
        </td>
          <td id={styles.d25}>19
          <input value="d25" type="checkbox"/>
          <label htmlFor="d25"></label>
        </td>
          <td id={styles.d26}>20
          <input value="d26" type="checkbox"/>
          <label htmlFor="d26"></label>
        </td>
          <td id={styles.d27}>21
          <input value="d27" type="checkbox"/>
          <label htmlFor="d27"></label>
        </td>
          <td id={styles.d28}>22
          <input value="d28" type="checkbox"/>
          <label htmlFor="d28"></label>
        </td>
        </tr>
        <tr className={styles.days}>
          <td id={styles.d29}>23
          <input value="d29" type="checkbox"/>
          <label htmlFor="d29"></label>
        </td>
          <td id={styles.d30}>24
          <input value="d30" type="checkbox"/>
          <label htmlFor="d30"></label>
        </td>
          <td id={styles.d31}>25
          <input value="d31" type="checkbox"/>
          <label htmlFor="d31"></label>
        </td>
          <td id={styles.d32}>26
          <input value="d32" type="checkbox"/>
          <label htmlFor="d32"></label>
        </td>
          <td id={styles.d33}>27
          <input value="d33" type="checkbox"/>
          <label htmlFor="d33"></label>
        </td>
          <td id={styles.d34}>28
          <input value="d34" type="checkbox"/>
          <label htmlFor="d34"></label>
        </td>
          <td id={styles.d35}>29
          <input value="d35" type="checkbox"/>
          <label htmlFor="d35"></label>
        </td>
        </tr>
        <tr className={styles.days}>
          <td id={styles.d36}>30
          <input value="d36" type="checkbox"/>
          <label htmlFor="d36"></label>
        </td>
          <td id={styles.d37}>31
          <input value="d37" type="checkbox"/>
          <label htmlFor="d37"></label>
        </td>
          <td id={styles.d38}>
            <input disabled value="d38" type="checkbox"/>
            <label htmlFor="d38"></label>
          </td>
          <td id={styles.d39}>
            <input disabled value="d39" type="checkbox"/>
            <label htmlFor="d39"></label>
          </td>
          <td id={styles.d40}>
            <input disabled value="d40" type="checkbox"/>
            <label htmlFor="d40"></label>
          </td>
          <td id={styles.d41}>
            <input disabled value="d41" type="checkbox"/>
            <label htmlFor="d41"></label>
          </td>
          <td id={styles.d42}>
            <input disabled value="d42" type="checkbox"/>
            <label htmlFor="d42"></label>
          </td>
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