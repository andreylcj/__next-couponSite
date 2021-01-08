import React, { useEffect, useContext } from 'react';
import TopCategoryItem from '../snnipets/TopCategoryItem';
import ShowContentWithLoadingOrError from '../snnipets/ShowContentWithLoadingOrError';
import { DataContext } from '../store/GlobalState';
import ACTION from '../store/Actions';
import { getData } from '../assets/utils/fetchData';

function TopCategories(props) {
    const [state, dispatch] = useContext(DataContext);
    const { listTopCategories } = state
    const { loading, error, topCategories } = listTopCategories;
    useEffect(async () => {

        dispatch({
            type: ACTION.TOP_CATEGORIES_REQUEST
        });
        try {
            const data = await getData(props.apiURL);
            dispatch({ type: ACTION.TOP_CATEGORIES_SUCCESS, payload: data })
        } catch (error) {
            dispatch({ type: ACTION.TOP_CATEGORIES_FAIL, payload: error.message })
        }

    }, [dispatch]);
    return (
        <section className="top-categories">
            <div className="suggestion-container container">
                <h2 className="section-title">Top 20 Categorias</h2>
                <hr className="subTitle-hr" />
                <ul className="category-list">
                    <ShowContentWithLoadingOrError loading={loading} error={error}>
                        {topCategories.map((category) => (
                            <TopCategoryItem key={category._id} category={category} />
                        ))}
                    </ShowContentWithLoadingOrError>

                    {/*
                    <li><a className="animais-e-pet" href="cupom/animais-e-pet" data-event="AllCategories" data-action="Top Categories"
                        data-label="Animais e Pet">Animais e Pet</a></li>
                    <li><a className="bebe-e-crianca" href="cupom/bebe-e-crianca" data-event="AllCategories"
                        data-action="Top Categories" data-label="Bebê e Criança">Bebê e Criança</a></li>
                    <li><a className="eletrodomesticos" href="cupom/eletrodomesticos" data-event="AllCategories"
                        data-action="Top Categories" data-label="Eletrodomésticos">Eletrodomésticos</a></li>
                    <li><a className="eletronicos" href="cupom/eletronicos" data-event="AllCategories" data-action="Top Categories"
                        data-label="Eletrônicos">Eletrônicos</a></li>
                    <li><a className="esportes-e-fitness" href="cupom/esportes-e-fitness" data-event="AllCategories"
                        data-action="Top Categories" data-label="Esportes e Fitness">Esportes e Fitness</a></li>
                    <li><a className="games" href="cupom/games" data-event="AllCategories" data-action="Top Categories"
                        data-label="Games">Games</a></li>
                    <li><a className="informatica" href="cupom/informatica" data-event="AllCategories" data-action="Top Categories"
                        data-label="Informática">Informática</a></li>
                    <li><a className="passagem-aerea" href="cupom/passagem-aerea" data-event="AllCategories"
                        data-action="Top Categories" data-label="Passagem Aérea">Passagem Aérea</a></li>
                    <li><a className="tv" href="cupom/tv" data-event="AllCategories" data-action="Top Categories" data-label="TV">TV</a>
                    </li>
                    <li><a className="moda-e-acessorios" href="cupom/moda-e-acessorios" data-event="AllCategories"
                        data-action="Top Categories" data-label="Moda e Acessórios">Moda e Acessórios</a></li>
                    <li><a className="moveis-e-decoracao" href="cupom/moveis-e-decoracao" data-event="AllCategories"
                        data-action="Top Categories" data-label="Móveis e Decoração">Móveis e Decoração</a></li>
                    <li><a className="moda-esportiva" href="cupom/moda-esportiva" data-event="AllCategories"
                        data-action="Top Categories" data-label="Moda Esportiva">Moda Esportiva</a></li>
                    <li><a className="perfume-beleza-e-maquiagem" href="cupom/perfume-beleza-e-maquiagem" data-event="AllCategories"
                        data-action="Top Categories" data-label="Perfume, Beleza e Maquiagem">Perfumes e Beleza</a></li>
                    <li><a className="viagem-e-turismo" href="cupom/viagem-e-turismo" data-event="AllCategories"
                        data-action="Top Categories" data-label="Viagem e Turismo">Viagem e Turismo</a></li>
                    <li><a className="calcados" href="cupom/calcados" data-event="AllCategories" data-action="Top Categories"
                        data-label="Calçados">Calçados</a></li>
                    <li><a className="saude-e-cuidados-pessoais" href="cupom/saude-e-cuidados-pessoais" data-event="AllCategories"
                        data-action="Top Categories" data-label="Saúde e Cuidados Pessoais">Saúde</a></li>
                    <li><a className="celulares-e-smartphones" href="cupom/celulares-e-smartphones" data-event="AllCategories"
                        data-action="Top Categories" data-label="Celulares e Smartphones">Smartphones</a></li>
                    <li><a className="taxi" href="cupom/taxi" data-event="AllCategories" data-action="Top Categories"
                        data-label="Táxi">Táxi</a></li>
                        */}
                </ul>
            </div>
        </section>
    )
}

export default TopCategories
