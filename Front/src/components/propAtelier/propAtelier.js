import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

export default class PropAtelier extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get(`http://localhost:8080/newArticle/${localStorage.id}`)
            .then(response => {
                console.log('user-article ==== ', response)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    liste() {
        return <table className="table table-bordered mx-auto mt-5" id="tableget">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Titre</th>
                    <th>Auteur</th>
                    <th>Genre</th>
                    <th>Editeur</th>
                    <th>Resumé</th>
                    <th>Année de parution</th>
                    <th>Prix</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {

                        return <tr key={obj._id}>
                            <td>
                                <img width="150px" height="50px" src={'http://localhost:8080/newArticleImage/' + obj.image} alt="pdp" />
                            </td>
                            <td>{obj.titre}</td>
                            <td>{obj.duree}</td>
                            <td>{obj.debut}</td>
                            <td>{obj.place}</td>
                            <td>{obj.description}</td>
                            <td>{obj.date}</td>
                            <td>{obj.prix}Ar</td>
                            <td>
                                <Link to={"/modifierAtl/" + obj._id} className="btn deconex">Modifier</Link> <br /><br />
                                <center>
                                    {obj.visib === true ? (<button className="deconex" onClick={(e) => {
                                        e.preventDefault()
                                        axios.get("http://localhost:8080/cacherAtl/" + obj._id).then(res => {
                                            axios.get('http://localhost:8080/newArticle/' + localStorage.id).then(res => {
                                                console.log(res.data)
                                                this.setState({ profil: res.data })
                                            })
                                            console.log(res.data)
                                        })
                                    }}>Desactiver</button>) : (<button className="deconex" onClick={(e) => {
                                        e.preventDefault()
                                        console.log(obj._id)
                                        axios.get("http://localhost:8080/affichAtl/" + obj._id).then(res => {
                                            axios.get('http://localhost:8080/newArticle/' + localStorage.getItem('id')).then(res => {
                                                console.log(res.data)
                                                this.setState({ profil: res.data })
                                            })
                                            console.log(res.data)
                                        })

                                    }}>Activer</button>)}
                                </center>
                            </td>
                        </tr>

                    })) : ('')
                }
            </tbody>
        </table>
    }
    render() {
        return (
            <div className='app1'>
                {this.liste()}
            </div>
        );
    }
}