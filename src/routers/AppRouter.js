import React from 'react'
import { Route, Routes } from 'react-router-dom' 
import NavBar from '../components/ui/NavBar'
import Genero from '../components/generos/Genero'
import Director from '../components/directores/Director'
import Productora from '../components/productoras/Productora'
import Tipo from '../components/tipos/Tipo'
import Media from '../components/medias/Media'
import NotFound from '../components/ui/NotFound'

export default function AppRouter() {
    return (
            <div>
                <NavBar />
                <div className ='container'>
                <Routes>
                    <Route path='/generos' element={<Genero />} />
                    <Route path='/directores' element={<Director />} />
                    <Route path='/productoras' element={<Productora />}/>
                    <Route path='/tipos' element={<Tipo />}/>
                    <Route path='/medias' element={<Media />}/>
                    <Route path='*' element={<NotFound />} />
                </Routes>
                </div>
            </div>
    )
}
