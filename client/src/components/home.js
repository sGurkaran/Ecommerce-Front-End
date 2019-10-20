import React, { Component } from 'react'
import Card from './card'
import BrandStrip from './brandstrip'
import SearchBar from './searchbar'
import '../dist/styles/css/home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="Poster">
                    <h1 style={{
                        position: 'relative',
                        textAlign: 'center',
                        fontWeight: '400',
                        margin: '0px',
                        padding: '12px',
                        fontSize: '22px',
                        marginBottom: '50px',
                        margin: '18px',
                        color: '#3a3a3abf',
                        // backgroundColor:'#18c0c9',
                        opacity: '0.8'
                    }}>
                        <i style={{
                            fontFamily: 'Ainslie',
                            fontSize: '32px',
                            color: '#3a3a3a',
                        }}>DentalStall</i><br /> Helps You, To Make People Smile!
                    </h1>
                </div>
                <BrandStrip></BrandStrip>
                <SearchBar></SearchBar>
                <h2 style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translate(-50%,0%)',
                    fontFamily: 'Quicksand-Regular',
                    color: '#868686',
                }}>Top Products</h2>
                <div className="Home-Root">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>

        )
    }
}
