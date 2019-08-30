import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {

            nom: '',
            prenom: '',
            email: '',
            telephone: '',
            adresse: '',
            prêt: '',
            remise: '',
            profil: []
        };
        this.onChange = this.onChange.bind(this)

    }
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        axios.get('http://localhost:8080/newArticle')
            .then(response => {
                this.setState({ profil: response.data });
                console.log('profil: ', this.state.profil);
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    render() {
        let imgUrl = './image/livre6.jpg';
        return (
            <div>
                <div style={{
                    backgroundImage: 'url(' + imgUrl + ')',
                    backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat',
                }} id="image"

                >
                    <div className="text-white  px-md-5 mx-md-5 py-5 px-4">
                        <div className="py-5">
                            {/* <h2 id="h2">ATELIER DE CUISINE</h2>
                            <p  id="verdana" className="mb-4 pb-2 px-md-5 ">
                                <span>Aimez-vous cuisiner?Personnes âgés de 25 à 35 ans?</span> <br /><br />
                                Un atelier de cuisine est fait pour vous si vous aimez <br />la cuisine facile et créative !
                            </p> */}
                        </div>
                    </div>
                </div>
                    <div className="row" >
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.filter((params)=>params.visib).map((obj) => {
                                return <div className="col-md-4 mx-auto mt-5" key={obj._id}>
                                    <div className="" >
                                        <img class="card-img-top" id="sary" src={'http://localhost:8080/newArticleImage/' + obj.image} alt="Cardimagecap" />
                                        <div class="card-body">
                                            <h3 class="card-title "><b> <Link to="/">Titre: {obj.titre}</Link></b></h3>
                                            {/* <h3 class="card-text titre2">{obj.description}</h3>
                                            <h3 className="card-title titre3">Le {obj.date} à {obj.debut}</h3>
                                            <h3 class="card-text titre3">Durée:{obj.duree}h</h3>
                                            <h3 class="card-text titre3">Places disponible:{obj.place}</h3>
                                            <h3 class="card-text titre3">Places réservées:{obj.placeRes}</h3> */}
                                            <h3 className="card-text ">Prix:{obj.prix}Ar </h3>
                                            <center>
                                                <button className="btn btn1"
                                                onClick={() => {
                                                    confirmAlert({
                                                        customUI: ({ onClose }) => {
                                                            return (
                                                                <div id="popup" >
                                                                    <input className="" name="nom" onChange={this.onChange} value={this.state.value} placeholder="Nom" /><br></br>
                                                                    <input name="prenom" placeholder="Prenom" onChange={this.onChange} value={this.state.value} /><br></br>
                                                                    <input name="phone" placeholder="Numero téléphone" onChange={this.onChange} value={this.state.value} /><br></br>
                                                                    <input name="email" placeholder="Email" onChange={this.onChange} value={this.state.value} /><br></br>
                                                                    <center>
                                                                    <button
                                                                        onClick={(e) => {
                                                                            e.preventDefault()
                                                                            axios.post("http://localhost:8080/achatLivre/" + obj._id, {
                                                                                nom: this.state.nom,
                                                                                prenom: this.state.prenom,
                                                                                phone: this.state.phone,
                                                                                email: this.state.email

                                                                            }).then(res => {
                                                                                axios.get("http://localhost:8080/newArticle").then(res => {

                                                                                    this.setState({ profil: res.data })
                                                                                })
                                                                                onClose()
                                                                            })

                                                                        }} >Confirmer
                                                                    </button>
                                                                    <button onClick={onClose}>Annuler</button>
                                                                    </center>
                                                                    
                                                                </div>
                                                            );
                                                        }
                                                    });
                                                }}
                                                id="inscrire-btn"
                                                >Acheter</button>

                                                <button className="btn btn1"
                                                    onClick={() => {
                                                        confirmAlert({
                                                            customUI: ({ onClose }) => {
                                                                return (
                                                                    <div id="popup" >
                                                                        <input className="" name="nom" onChange={this.onChange} value={this.state.value} placeholder="Nom" /><br></br>
                                                                        <input name="prenom" placeholder="Prenom" onChange={this.onChange} value={this.state.value} /><br></br>
                                                                        <input name="phone" placeholder="Numero téléphone" onChange={this.onChange} value={this.state.value} /><br></br>
                                                                        <input name="email" placeholder="Email" onChange={this.onChange} value={this.state.value} /><br></br>
                                                                        <input name="prêt" placeholder="Date de prêt" onChange={this.onChange} value={this.state.value} /><br></br>
                                                                        <input name="remise" placeholder="Date de remise" onChange={this.onChange} value={this.state.value} /><br></br>
                                                                        <center>
                                                                        <button
                                                                            onClick={(e) => {
                                                                                e.preventDefault()
                                                                                axios.post("http://localhost:8080/particulier/" + obj._id, {
                                                                                    nom: this.state.nom,
                                                                                    prenom: this.state.prenom,
                                                                                    phone: this.state.phone,
                                                                                    prêt: this.state.prêt,
                                                                                    remise: this.state.remise,
                                                                                    email: this.state.email

                                                                                }).then(res => {
                                                                                    axios.get("http://localhost:8080/newArticle").then(res => {

                                                                                        this.setState({ profil: res.data })
                                                                                    })
                                                                                    onClose()
                                                                                })

                                                                            }} >Confirmer
                                                                        </button>
                                                                        <button onClick={onClose}>Annuler</button>
                                                                        </center>
                                                                        
                                                                    </div>
                                                                );
                                                            }
                                                        });
                                                    }}
                                                    id="inscrire-btn">Emprunter</button>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            })) : ('')
                        }
                    </div>
                </div>
        );
    }
}