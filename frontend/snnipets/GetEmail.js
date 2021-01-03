import React from 'react'
import Link from 'next/link';

function GetEmail() {
    return (
        <div className="get-email item">
            <div className="get-email-icon">
                <div className="message-container">
                    <i className="fas fa-envelope"></i>
                </div>
            </div>
            <div id="get-email-field" className="get-email-field">
                <form 
                    method="post" 
                    id="email-form" 
                    className="email-form action-email" 
                    action="/newsletter/add" 
                    data-action="ListHome"
                >
                    <input type="hidden" name="placement" value="list-subscribe" />
                    <label className="email-label" htmlFor="email-field">
                        Receba emails semanais com os melhores cupons
                    </label>
                    <input 
                        type="email" 
                        placeholder="Digite seu email..." 
                        className="email-input js-sign-newsletter" 
                        name="email" 
                        id="email-field" 
                    />
                    <button 
                        type="submit" 
                        className="email-submit" 
                        name="email-submit" 
                        id="email-submit" 
                        value="Assinar" 
                        data-loading=""
                    >
                        Assinar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default GetEmail
