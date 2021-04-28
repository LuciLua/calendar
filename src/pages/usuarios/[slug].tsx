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
    // const { isColor } = useFooter();

    return( 
        
        <body> 
        
        <div className={styles.usuarios}>
            
        <Head>
            <title> Ola | Bem Vindo</title>
        </Head>

            <div>
                <Link href="/">
                    <button type="button">
                        <img src="/arrow-left.svg" alt="Voltar"/>
                    </button>
                </Link>
                
                <button type="button">
                    <img src="/play.svg" alt="Tocar episódio"/>
                </button>
            </div>
            <header>
                <h1>{usuario.username}</h1>
                <span>{usuario.idade}</span>
                <span>{usuario.hobbie_principal}</span>
                <span>{usuario.hobbie_secundario}</span>
            </header>

            <div dangerouslySetInnerHTML={{__html: usuario.hobbie_principal}}/>
        </div> 
    </body>
    )
}



export const getStaticPaths: GetStaticPaths = async () =>{
    const { data } = await api.get('usuario',{
        params:{}})

      const paths = data.map(usuario => {
          return {
              params: {
                  slug: usuario.id
              }
          }
      })

    return{
        paths,
        fallback: 'blocking'
    }

    //dentro oo next, fallback blocking/true se chama: incremental static regeneration

}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const { slug } = ctx.params;
    
    const { data } = await api.get(`/usuarios/${slug}`)

    const usuario = {
    id: data.id,
    username: data.username,
    idade: data.idade,
    hobbie_principal: data.hobbie_principal,
    hobbie_secundario: data.hobbie_secundario,
  };
    
    return{
        props: {
            usuario,
        },
        revalidate: 60 * 60 * 24, //24 hours
    }
}