import React from 'react'
import { Link, useParams } from 'react-router-dom'
import * as C from './styles'
import { ReactComponent as ShurikenSvg } from '../../imgs/svg/shuriken-svgrepo.svg'
import { ReactComponent as HeartsSvg } from '../../imgs/svg/hearts-svgrepo.svg'
import { ReactComponent as SwordsSvg } from '../../imgs/svg/swords-in-cross-svgrepo.svg'
import { ReactComponent as SuperPowerSvg } from '../../imgs/svg/burst-solid.svg'
import { ReactComponent as SchoolBusSvg } from '../../imgs/svg/school-bus-svgrepo1.svg'
import { ReactComponent as TvSvg } from '../../imgs/svg/tv-solid.svg'
import { ReactComponent as BallonSvg } from '../../imgs/svg/speech-balloon-svgrepo.svg'
import { ReactComponent as OneShotSvg } from '../../imgs/svg/magazines-svgrepo.svg'
import { ReactComponent as RomanceBookSvg } from '../../imgs/svg/picture-love-and-romance-svgrepo.svg'
import { ReactComponent as MovieSvg } from '../../imgs/svg/movie-player-svgrepo.svg'
import { ReactComponent as StarSvg } from '../../imgs/svg/star-fill.svg'
import { ReactComponent as OpenBookSvg } from '../../imgs/svg/open-book-svgrepo.svg'
import { ReactComponent as SettingsSvg } from '../../imgs/svg/settings-svgrepo.svg'
import { ReactComponent as LogOutSvg } from '../../imgs/svg/arrow-right-from-bracket-solid.svg'

export default function AsideNavLinks(data: any) {

  const handleLogOut = (e: React.MouseEvent) => {
    e.preventDefault()
    //make logout system with redux after making the sign up
  }

  // console.log(data)

  return (
    <C.Container data={data.data}>

      <h3>Category</h3>

      <ul>

        <li><Link to={`/genre/Shounen`}><ShurikenSvg /> Shounen</Link></li>
        <li><Link to={`/genre/Shoujo`}><HeartsSvg /> Shoujo</Link></li>
        <li><Link to={`/genre/Seinen`}><SwordsSvg /> Seinen</Link></li>
        <li><Link to={`/genre/Super%20Power`}><SuperPowerSvg /> Super Power</Link></li>
        <li><Link to={`/genre/School`}><SchoolBusSvg /> School</Link></li>

      </ul>

      <h3>Format</h3>

      <ul>

        <li><Link to={`/format/tv`}><TvSvg /> TV</Link></li>
        <li><Link to={`/format/manga`}><BallonSvg /> Manga</Link></li>
        <li><Link to={`/format/one_shot`}><OneShotSvg /> One Shot</Link></li>
        <li><Link to={`/format/novel`}><RomanceBookSvg /> Novel</Link></li>
        <li><Link to={`/format/movie`}><MovieSvg /> Movie</Link></li>
        <li><Link to={`/format/special`}><StarSvg /> Special</Link></li>
        <li><Link to={`/format/ova`}><OpenBookSvg /> OVA</Link></li>

      </ul>

      <h3>General</h3>

      <ul className='settings'>

        <li><Link to={`/settings`}><SettingsSvg /> Settings</Link></li>
        <li><Link to={``} onClick={(e) => handleLogOut(e)}><LogOutSvg /> Log Out</Link></li>

      </ul>
    </C.Container>
  )
}