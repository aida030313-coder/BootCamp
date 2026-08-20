import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import { ApolloProvider } from '@apollo/client/react'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
  // 여기서 캐시 설정을 했기 때문에 UserDetail 파일에서 이름을 눌러 상세정보를 조회하더라도 화면이 깜빡거리지 않음(= 재로딩되지X)
})

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
