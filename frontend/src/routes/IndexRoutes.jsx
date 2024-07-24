import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from '../views/Layout';
import Page404 from '../views/Page404';
import Post from '../views/Post';
import { AddEditPost, ListPost } from '../components/CompPost';

const IndexRoutes = () => {
  return (
    <Routes>
        <Route element={<Layout/>}>
            <Route path="/" element={<Post/>}>
                <Route index element={<ListPost/>} />
                <Route path="/addEditPost/" element={<AddEditPost/>} />
            </Route>
        </Route>
        <Route path="*" element={<Page404/>} />
    </Routes>
  )
}

export default IndexRoutes;