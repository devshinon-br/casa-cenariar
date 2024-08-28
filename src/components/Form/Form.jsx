import { useState } from 'react';
import emailjs from 'emailjs-com';
import css from './Form.module.css';

function Form() {

    const [form, setForm] = useState({
        nome: '',
        email: ''
    })

    function getData(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form);
    }

    function validar() {
        if (form.nome === '' || form.phone === '' || form.email === '')
            alert('Todos os campos precisam ser preenchidos');
        else {
            var templateParams = {
                from_name: form.nome,
                from_phone: form.phone,
                from_email: form.email,
            };

            emailjs.send("service_jypz835",
                "template_t2cq9vm",
                templateParams,
                "RiFNBPXlCkkaWPFs_").then(
                    (response) => {
                        console.log('SUCCESS!', response.status, response.text);
                    },
                    (error) => {
                        console.log('FAILED...', error)
                    });

        }
    }

    return (
        <section className={css.FaleConosco}>

            <form className={css.form} >

                <input type="text" name="nome" placeholder='Digite seu nome' onChange={getData} />
                <input type="text" name="phone" placeholder='Telefone' onChange={getData} />
                <input type="email" name="email" placeholder='E-mail' onChange={getData} />
                <textarea name="mensagem" placeholder="Digite sua mensagem" maxLength="500" onChange={getData}></textarea>
                <input type="button" value="Enviar" onClick={validar} />
            </form>
        </section>
    )
}

export default Form
