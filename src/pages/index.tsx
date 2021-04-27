import Head from 'next/head'
import styles from '../pages/home.module.scss'
import { api } from '../services/api';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './_app';
import { GetStaticProps } from 'next';



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
      <title>Hello</title>
   </Head>
    <h1>Hello, world!</h1>
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
