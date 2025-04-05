import React from 'react'
import './Produto.css'
import { useParams } from 'react-router-dom'
import { Head } from '../head/Head'

export const Produto = () => {
    const {id} = useParams()
    const [produto, setProduto] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

      React.useEffect(() => {
        const fetchData = async () => {
         try{
            setIsLoading(true)
            const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
            const json = await response.json()
            setProduto(json)
         }catch(err){
            setError(err.message)
         }
        finally{
            setIsLoading(false)
        }
        }

        fetchData()
      }, [id])

      if(isLoading) return <div className='loading'></div>
      if(error) return <div className='error'>Erro: {error}</div>
      if(!produto) return null
  return (
    <section className='produto anime-left'>
        <Head title={`React | ${produto.nome}`} description={produto.descricao} />
        <div>
        {produto.fotos.map((foto) => (
            <img src={foto.src} alt={foto.titulo} key={foto.id} className='produto-foto' />
        ))}
        </div>
        <div>
            <h1>{produto.nome}</h1>
            <span className='produto-preco'>R$ {produto.preco}</span>
            <p className='produto-descricao'>{produto.descricao}</p>
        </div>


    </section>
  )
}
