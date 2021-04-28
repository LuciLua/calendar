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
                Hello, {Math.PI}
            </h1>
            
        <p>
            {usuario.username}
        </p>
        </div>
        
        <Head>
            <title> Ola | Bem Vindo</title>
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


// export const getStaticPaths: GetStaticPaths = async () =>{
    //     const { data } = await api.get('usuario',{
        //         params:{}})
        
        //       const paths = data.map(usuario => {
            //           return {
                //               params: {
                    //                   slug: usuario.id
                    //               }
                    //           }
                    //       })
                    
//     return{
//         paths,
//         fallback: 'blocking'
//     }

//     //dentro oo next, fallback blocking/true se chama: incremental static regeneration

// }

// export const getStaticProps: GetStaticProps = async (ctx) => {

//     const { slug } = ctx.params;
    
//     const { data } = await api.get(`/usuarios/${slug}`)

//     const usuario = {
//     id: data.id,
//     username: data.username,
//     idade: data.idade,
//     hobbie_principal: data.hobbie_principal,
//     hobbie_secundario: data.hobbie_secundario,
//   };
    
//     return{
//         props: {
//             usuario,
//         },
//         revalidate: 60 * 60 * 24, //24 hours
//     }
// }
