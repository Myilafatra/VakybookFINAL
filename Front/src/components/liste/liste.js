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
        return (
            <div>
                    <div className="row" >
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.filter((params)=>params.visib).map((obj) => {
                                return <div className="col-md-6 mx-auto mt-5" key={obj._id}>
                                   <div class="col-12 mt-3">
                                    <div class="card">
                                        <div class="card-horizontal">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <img class="" id="sary" src={'http://localhost:8080/newArticleImage/' + obj.image} alt="Card" />
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card-body">
                                                        <h1 className="card-text"><b id="b">Titre: </b>{obj.titre}</h1>
                                                        <h1 className="card-text "><b id="b">Auteur: </b>{obj.duree}</h1>
                                                        <h1 className="card-text"><b id="b">Editeur: </b> {obj.place}</h1>
                                                        <h1 className="card-text "><b id="b">Genre:</b> {obj.debut}</h1>
                                                        <h1 className="card-text "><b id="b">Année de parution: </b>{obj.date}</h1>
                                                        <h1 className="card-text "><b id="b">Prix:</b>{obj.prix}Ar </h1><br/>
                                                        <b id="b" className="more">
                                                            <a className="more-text" href="#!" id="plusmoins">
                                                                <span className="plus">Resumé</span>
                                                                <span className="moins" id="moinsmoins"></span>
                                                            </a>
                                                            <b className="hidetext">
                                                                <p className="card-text"><b id="b">Resumé:</b><br/>{obj.description}</p>
                                                            </b>
                                                        </b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer">
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
                            </div>
                               
                            })) : ('')
                        }
                    </div>
                </div>
        );
    }
}

// import React, { Component } from 'react';
// import axios from 'axios';
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';

// export default class ListTout extends Component {

//     constructor(props) {
//         super(props);
//         this.state = { produit: [] };

//     }
//     componentDidMount() {
//         axios.get('http://localhost:8080/newArticle')
//             .then(response => {
//                 console.log('i am a response', response)
//                 this.setState({ produit: response.data });
//                 console.log('i am a produit', this.state.produit)
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//     }

//     liste() {
//         return <div>
//             <center><h2 id="titre">Tous les livres</h2></center>
//             <div className="container-fluid">
//                 <div className="row">

//                     {
//                         (this.state.produit.length > 0) ? (this.state.produit.filter((params) => params.visib).map((obj) => {
//                             return <div className="col-md-6 mx-auto mt-5" key={obj._id}>
                               
//                                 <div class="col-12 mt-3">
//                                     <div class="card">
//                                         <div class="card-horizontal">
//                                             <div className="row">
//                                                 <div className="col-md-6">
//                                                     <img class="" id="sary" src={'http://localhost:8080/newArticleImage/' + obj.image} alt="Card" />
//                                                 </div>
//                                                 <div className="col-md-6">
//                                                     <div className="card-body">
//                                                         <h1 className="card-text"><b id="b">Titre: </b>{obj.titre}</h1>
//                                                         <h1 className="card-text "><b id="b">Auteur: </b>{obj.duree}</h1>
//                                                         <h1 className="card-text"><b id="b">Editeur: </b> {obj.place}</h1>
//                                                         <h1 className="card-text "><b id="b">Genre:</b> {obj.debut}</h1>
//                                                         <h1 className="card-text "><b id="b">Année de parution: </b>{obj.date}</h1>
//                                                         <h1 className="card-text "><b id="b">Prix:</b>{obj.prix}Ar </h1><br/>
//                                                         <b id="b" className="more">
//                                                             <a className="more-text" href="#!" id="plusmoins">
//                                                                 <span className="plus">Resumé</span>
//                                                                 <span className="moins" id="moinsmoins"></span>
//                                                             </a>
//                                                             <b className="hidetext">
//                                                                 <p className="card-text"><b id="b">Resumé:</b><br/>{obj.description}</p>
//                                                             </b>
//                                                         </b>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div class="card-footer">
//                                         <center>
//                                     <button className="btn btn1"
//                                         onClick={() => {
//                                             confirmAlert({
//                                                 customUI: ({ onClose }) => {
//                                                     return (
//                                                         <div id="popup">
//                                                             <input name="nom" onChange={this.onChange} value={this.state.value} placeholder="Nom" /><br></br>
//                                                             <input name="prenom" placeholder="Prenom" onChange={this.onChange} value={this.state.value} /><br></br>
//                                                             <input name="telephone" placeholder="Numero téléphone" onChange={this.onChange} value={this.state.value} /><br></br>
//                                                             <input name="email" placeholder="Email" onChange={this.onChange} value={this.state.value} /><br></br>
//                                                             <input name="prêt" placeholder="Date de prêt" onChange={this.onChange} value={this.state.value} /><br></br>
//                                                             <input name="remise" placeholder="Date de remise" onChange={this.onChange} value={this.state.value} /><br></br>
//                                                             <center>
//                                                             <button
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault()
//                                                                                 axios.post("http://localhost:8080/particulier/" + obj._id, {
//                                                                                     nom: this.state.nom,
//                                                                                     prenom: this.state.prenom,
//                                                                                     phone: this.state.phone,
//                                                                                     adresse: this.state.adresse,
//                                                                                     pret: this.state.pret,
//                                                                                     remise: this.state.remise,
//                                                                                     email: this.state.email

//                                                                                 }).then(res => {
//                                                                                     axios.get("http://localhost:8080/newArticle").then(res => {

//                                                                                         this.setState({ profil: res.data })
//                                                                                     })
//                                                                                     onClose()
//                                                                                 })

//                                                                             }} >Confirmer
//                                                                         </button>
//                                                                         <button onClick={onClose}>Annuler</button>
//                                                                         </center>
//                                                         </div>
//                                                     );
//                                                 }
//                                             });
//                                         }}
//                                     id="inscrire-btn">S'inscrire</button>
//                                 </center>
//                                  </div>
//                                     </div>
//                                 </div>  
//                             </div>
//                         })) : ('')
//                     }
//                 </div>
//             </div>
//         </div>
//     }
//     render() {
//         return (
//             <div>
//                 {this.liste()}
//             </div>
//         );
//     }
// }