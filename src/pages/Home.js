import React from 'react'
import { ListOfPhotoCardsWithQuery } from '../container/ListOfPhotoCardWithQuery'
import { ListOfCategories } from '../components/ListOfCategories'
import { Layout } from '../components/Layout'

const HomePage = ({ categoryId }) => {
  return (
    <Layout title='Petgram - Tu app de fotos de mascotas' subtitle='Con petgram puedes encontrar fotos de animales domesticos muy bonitos'>

      <ListOfCategories />
      <ListOfPhotoCardsWithQuery categoryId={categoryId} />
    </Layout>
  )
}

export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
