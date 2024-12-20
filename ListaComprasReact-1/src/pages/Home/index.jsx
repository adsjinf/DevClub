import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import { AddButton, Container, Product, TrashButton } from './styles'


// React Hooks
// useRef
// useState / estado -> É uma variável, que, toda vez que troca de valor
// a tela irá "Recarregar os valores"

function Home() {
  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()


  function cliqueiNoBotao() {
    if (inputRef.current.value != '') {
      setProdutos([
        {
          id: v4(),
          nome: inputRef.current.value.toUpperCase()
        },
        ...produtos
      ])
      inputRef.current.value = ''
    }
  }

  function deletarProduto(id) {
    setProdutos(produtos.filter(produto => produto.id !== id))
  }

  return (
    <Container>
      <h1>Lista de Compras</h1>
      <input placeholder="Nome do Produto...." ref={inputRef} />
      <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>
      {
        produtos.map((produto) => (
          <Product key={produto.id}>
            <p>{produto.nome}</p>
            <TrashButton onClick={() => deletarProduto(produto.id)}>🗑️</TrashButton>
          </Product>
        ))
      }
    </Container>
  )
}

export default Home
