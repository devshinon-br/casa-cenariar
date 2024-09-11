import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../assets/logo-header.png'

export default function FloatingWhatsapp() {

    return (
        <FloatingWhatsApp 
            phoneNumber='+5534996646441'
            accountName='Cenariar'
            chatMessage='Seja bem-vindo ao espaço Cenariar. Como podemos ajudá-lo?'
            avatar={logo}
            statusMessage=''
            placeholder='Digite a sua mensagem'
            allowClickAway={true}
            allowEsc={true} />
    )
}