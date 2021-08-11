import React, { CSSProperties } from 'react'
import { Icon } from 'semantic-ui-react'
import Link from 'next/link'

const styled: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    // position: "flex",
    padding: "15px",
    color: "black"
}

const ItemStyled = {
    margin: "20px",
}

const Menubar: React.FC = () => {
    return (
        <div style={styled}>
            <Link href="/shareholder" >
                <a style={ItemStyled}>
                    <Icon name='users' size='huge'/>        
                    <br />
                    Shareholders
                </a>
            </Link>
            <Link href="/company" >
                <a style={ItemStyled}>
                    <Icon name='building' size='huge'/>
                    <br />
                    Company
                </a>
            </Link>
            
        </div>
    )
}

export default Menubar;