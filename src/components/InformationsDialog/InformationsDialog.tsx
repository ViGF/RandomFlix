import { CloseCircleOutlined } from "@ant-design/icons";

import './styles.css'

type functionProp = {
    open: boolean,
    onClose: () => void
}

export function InformationsDialog({ open, onClose }: functionProp) {

    return (
        <div className='container' style={open ? {transform: 'translateY(-50%)'} : {}} onClick={() => onClose()}>
            <p>
                A obra é sorteada de uma lista composta pelas 250 maiores bilheterias da história, de acordo com o IMDB
            </p>
            <CloseCircleOutlined onClick={() => onClose()} className='icon'/>
        </div>
    );
}