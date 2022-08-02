import Skeleton from '@mui/material/Skeleton';
import { useState } from 'react';
import { Informations } from '../../types/informations';
import './styles.css';

type PropsType = {
    title: Informations
}

export function Title(props: PropsType) {
    const [loading, setLoading] = useState<boolean>(true)
    const [display, setDisplay] = useState<'none' | 'block'>('none')

    return (
        <div className="container">
            <img
                src={props.title.image}
                alt={`Imagem da obra ${props.title.fullTitle}`}
                style={{display: `${display}`}}
                onLoad={() => {
                    setLoading(false)
                    setDisplay('block')
                }}
            />
            {
                loading
                    ?
                    <Skeleton
                        variant="rectangular"
                        width={190}
                        height={243}
                        animation="wave"
                        sx={{ bgcolor: 'rgba(97, 82, 82, 0.452)' }}
                    />
                    : ''
            }
            <div className='informations'>
                <h2>{props.title.fullTitle}</h2>
                <p>
                    {props.title.plot}
                </p>
            </div>
        </div>
    )
}