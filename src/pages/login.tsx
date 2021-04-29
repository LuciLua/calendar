import Head from 'next/head'
import { api } from '../services/api';
import React from 'react';
import { GetStaticProps } from 'next';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';
import styles from './login.module.scss'



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
        <title>Login</title>
    </Head>

    <div>
      <form action="" method="post" className={styles.login}>
        <h2>Login</h2>
        <label htmlFor="user">Usuario </label>
        <br/>
        <input type="text" name="user"/>
        <br/>
        <label htmlFor="age">Idade</label>
        <br/>
        <input type="text" name="age"/>
        <br/>
        <button type="button">Create Account</button>
        <Link href="/usuarios/1">
          <button type="submit">Login</button>
        </Link>
      </form>
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