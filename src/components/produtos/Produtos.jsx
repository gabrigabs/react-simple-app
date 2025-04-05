import React from 'react'
import './Produtos.css'
import { Head } from '../head/Head'
import { Link } from 'react-router-dom'

export const Produtos = () => {
  const [produtos, setProdutos] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://ranekapi.origamid.dev/json/api/produto')
      const json = await response.json()
      setProdutos(json)
    }
    fetchData()
  }, [])


  if (produtos.length === 0) return null
  return (
    <div>
        <Head title="React | Produtos" description="Veja nossos produtos" />
        {
          produtos.map((produto) => (
            <Link to={`produto/${produto.id}`} key={produto.id} className='produto anime-left'>
              <h1>{produto.nome}</h1>
              <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
            </Link>
          ))
        }
    </div>
  )
}
