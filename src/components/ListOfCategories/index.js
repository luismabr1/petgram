import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item, Spinner } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    fetch('https://api-petgram.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])
  // para pedirla una sola vez mando un array vacio
  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()

  useEffect(function () {
    function onScroll (e) {
      const isShowFixed = window.scrollY > 100
      setShowFixed(isShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return function () {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map(category => <Item key={category.id} ><Category {...category} path={`/pet/${category.id}`} /></Item>)
      }
    </List>
  )

  if (loading) {
    return <Spinner />
  }

  return (
    <Fragment>
      {renderList()}
      { showFixed && renderList(true)}
    </Fragment>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
