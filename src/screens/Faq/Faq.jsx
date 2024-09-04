import { useEffect, useState } from 'react';
import css from './Faq.module.css';
import { SlArrowDown, SlArrowUp  } from "react-icons/sl";


function Faq() {
    const [duvidasFrequentes, setDuvidasFrequentes] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null); // Estado para controlar qual índice de FAQ está atualmente ativo (expandido).


    useEffect(() => {
        fetch('./faq.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na rede ao tentar carregar o arquivo JSON');
                }
                return response.json();
            })
            .then(info => setDuvidasFrequentes(info.duvidasFrequentes))
            .catch(error => console.error('Erro ao carregar as FAQs:', error));
    }, []);
    
    function handleToggle(index) {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    }

    function getPerguntas() {
        if (duvidasFrequentes.length > 0) {
            return (
                duvidasFrequentes.map((duvida, index) => (
                    <div key={index} className={css.duvidaContainer}>
                        <div
                            className={css.pergunta}
                            onClick={() => handleToggle(index)}>
                            {duvida.pergunta}
                            <span className={css.seta}>
                                {activeIndex === index ? <SlArrowUp /> : <SlArrowDown />}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className={css.resposta}>
                                <p>{duvida.resposta}</p>
                            </div>
                        )}
                    </div>
                ))
            );
        }
    }

    return (
        <section id='faq' className={css.secaoDuvidasFrequentes}>
          <div className={css.container}>
            <h2>Dúvidas Frequentes</h2>
            {getPerguntas()}
          </div>
        </section>
      );
}

export default Faq
