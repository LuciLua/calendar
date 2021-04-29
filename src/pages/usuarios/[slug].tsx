import { GetStaticPaths, GetStaticProps } from 'next';
import { api } from '../../services/api';

import Link from 'next/link';

import styles from './usuario.module.scss'


import { useFooter } from '../../contexts/FooterContext';

import Head from 'next/head';

type Usuario = {
    id: string;
    username: string;
    idade: string;
    hobbie_principal: string;
    hobbie_secundario: string;
};

type UsuarioProps = {
    usuario: Usuario;
};



export default function Usuario( {usuario}: UsuarioProps ){

    //exporta de um lugar para outroo
    const { usuarioList } = useFooter();

    return( 
    <div>
        <div className={styles.main}>
            <h1>
                Hello, {usuario.username}
            </h1>
            
        <p>
           Age: {usuario.idade}
           <br/>
           Habbies: {usuario.hobbie_secundario} e {usuario.hobbie_principal}
           
                 <br/>
                 <br/>
        Outros usuários: <br/>
        <a href="/usuarios/1">Luci</a><br/>
        <a href="/usuarios/2">João</a><br/>
        <a href="/usuarios/3">Roberta</a><br/>
        <a href="/usuarios/4">Sara</a><br/>
        <a href="/usuarios/5">John</a><br/>
        <a href="/usuarios/6">Jane</a><br/>
        </p>

  
        </div>
        
        <Head>
            <title> Ola {usuario.username} -  Bem-Vindo</title>
        </Head>  
    

    </div>
   
    )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
    
    const { slug } = ctx.params;
    
    const { data } = await api.get(`/usuarios/${slug}`)
    
    const usuario = {
        id: data.id,
    username: data.username,
    idade: data.idade,
    hobbie_principal: data.hobbies.hobbie_principal,
    hobbie_secundario: data.hobbies.hobbie_secundario,
};

return{
    props:{
        usuario,
    },
    revalidate: 1000,
    
}
}

export const getStaticPaths: GetStaticPaths = async () =>{
    const { data } = await api.get('usuarios')

      const paths = data.map(usuario => {
          return {
              params: {
                  slug: usuario.id
              }
          }
      }
    )

    return{
        paths,
        fallback: 'blocking'
    }

    //dentro oo next, fallback blocking/true se chama: incremental static regeneration
}

