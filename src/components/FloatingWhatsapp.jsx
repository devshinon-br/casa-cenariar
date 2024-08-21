import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function FloatingWhatsapp() {

    return (
        <FloatingWhatsApp 
            phoneNumber='+5534111111111'
            accountName='Como posso ajudá-lo?'
            chatMessage='Seja bem-vindo ao espaço Cenariar. Informe a sua mensagem abaixo:'
            statusMessage=''
            placeholder='Digite a sua mensagem'
            allowClickAway={true}
            allowEsc={true} />
    )
}