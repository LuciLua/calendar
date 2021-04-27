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
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
        </tr>
        <tr>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
        </tr>
        <tr>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
          <td>20</td>
          <td>21</td>
          </tr>
          <tr>
          <td>22</td>
          <td>23</td>
          <td>24</td>
          <td>25</td>
          <td>26</td>
          <td>27</td>
          <td>28</td>
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
