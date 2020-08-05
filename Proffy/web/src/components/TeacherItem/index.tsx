import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/58276960?s=460&u=4c0630310c7fd5b97399a41c9df8b6a12a00ae0d&v=4" alt="Alexandre Santos"/>
                    <div>
                        <strong>Alexandre Santos</strong>
                        <span>Algoritmos</span>
                    </div>
            </header>
            <p>
                Expert em solução de problemas.
                <br/><br/>
                Da aulas de algoritmos, ajudando a implementar uma melhor lógica na elaboração de softwares,
                trazendo um método inovador de organização de idéias, ja ajudou muitos alunos.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 30,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );

}

export default TeacherItem;