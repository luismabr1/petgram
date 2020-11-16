import React from 'react'
import { ListPhotoswithQuery } from '../container/ListPhotoswithQuery'
import { ListOfCategories } from '../components/ListOfCategories'
import { Layout } from '../components/Layout'

const HomePage = ({ categoryId }) => {
  return (
    <Layout title='Petgram - Tu app de fotos de mascotas' subtitle='Con petgram puedes encontrar fotos de animales domesticos muy bonitos'>

      <ListOfCategories />
      <ListPhotoswithQuery categoryId={categoryId} />
    </Layout>
  )
}

export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
