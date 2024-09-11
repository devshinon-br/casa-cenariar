import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import css from './Form.module.css'; // Certifique-se de importar o CSS corretamente

function Form() {
    const [form, setForm] = useState({
        nome: '',
        phone: '',
        email: '',
        mensagem: ''
    });

    function getData(e) {
        const { name, value } = e.target;
        if (name === 'phone') {
            setForm({ ...form, [name]: formatPhoneNumber(value) });
        } else {
            setForm({ ...form, [name]: value });
        }
    }

    function formatPhoneNumber(value) {
        // Remove todos os caracteres não numéricos
        const phoneNumber = value.replace(/\D/g, '');
        // Formata o número de telefone como (xx) xxxxx-xxxx
        const formattedPhoneNumber = phoneNumber.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
        return formattedPhoneNumber;
    }

    function isValidEmail(email) {
        // Expressão regular para validar o formato do email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    function validar() {
        if (form.nome === '' || form.phone === '' || form.email === '' || form.mensagem === '') {
            alert('Todos os campos precisam ser preenchidos');
        } else if (!isValidEmail(form.email)) {
            alert('Por favor, insira um email válido');
        } else {
            var templateParams = {
                from_name: form.nome,
                from_phone: form.phone,
                from_email: form.email,
                from_message: form.mensagem
            };

            console.log('Enviando dados:', templateParams); // Adicione este log para verificar os dados

            emailjs.send("service_jypz835", "template_t2cq9vm", templateParams, "RiFNBPXlCkkaWPFs_")
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Formulário enviado com sucesso!'); // Exibe um alert com a mensagem de sucesso
                    setForm({
                        nome: '',
                        phone: '',
                        email: '',
                        mensagem: ''
                    });
                }, (error) => {
                    console.log('FAILED...', error);
                });
        }
    }

    return (
        <section className={css.FaleConosco}>
            <form className={css.form}>
                <input type="text" name="nome" placeholder='Digite seu nome' value={form.nome} onChange={getData} />
                <input type="text" name="phone" placeholder='Telefone' value={form.phone} onChange={getData} />
                <input type="email" name="email" placeholder='E-mail' value={form.email} onChange={getData} />
                <textarea name="mensagem" placeholder="Digite sua mensagem" maxLength="500" value={form.mensagem} onChange={getData}></textarea>
                <input type="button" value="Enviar" onClick={validar} />
            </form>
        </section>
    );
}

export default Form;