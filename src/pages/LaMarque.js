import React from 'react'
import Layout from '../Component/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import './lamarque.css';

export default function LaMarque() {
    return (
        <div>
            <Layout>
            <div className="LaMarque">
               <div className="about__section">
               <div className="container">
                   {/* First__Section */}
                    <div className="row  mx-auto mt-auto">
                        <div className="col-xl-6 col-lg-6 col-sx-12 d-flex justify-content-end">
                        <StaticImage
                        src="../assets/images/image.png"
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A Gatsby astronaut"
                        style={{ marginBottom: `1.5rem` }}
                        />
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sx-12 m-lg-5 ">
                            <h3 className="mt-lg-5 mt-sm-5">Qui sommes-nous?</h3>
                            <p className=" text-sm-start mt-lg-4">Colia est une entreprise d’origine Suisse 
                                avec des boutiques situées à Lausanne, Genève et Montreux 
                            </p>
                        </div>
                    </div>
                    {/* Second Section */}
                    <div className="row d-flex justify-content-end">
                        <div className="col-xl-4 col-lg-6 col-sx-12">
                        <p className="mt-lg-6 mt-sm-5 pb-5">
                        La marque est née en 2016 et a démarré son activité en proposant sa propre ligne de gaines: sculptantes, amincissantes et post-opératoires fabriquées spécialement pour toi, directement en Colombie, avec les meilleures matières, et sans cesse améliorées.
                        La gamme s’est très vite étoffée en offrant également des robes bandages incontournables ; de la petite robe noire à la robe de soirée ou encore pour un évènement d’exception,”les robes” c’est leur spécialité ! Tu trouveras aussi des maillots de bains, des chaussures, des vêtements de sport et autres accessoires de mode exclusifs et à la pointe de la fast-fashion. En effet, les collections sont sans cesse renouvelées ou en édition limitée. Tu l’auras compris, Colia a pour mission de mettre en valeur ses Coliettes (ils s’agit de nos splendides clientes) et de les rendre uniques. Chez Colia, tout le monde peut être sexy: l’objectif est que tu te sentes belle,
                        stylée et exceptionnelle dans la tenue que tu choisiras !
                        </p>
                        <div className="sociallink__wrapper d-flex justify-content-between">
                            <div className="row border-5">
                            <div className="col-xs-12 border-1">
                                <h4 className="social__heading">Social</h4>
                            </div>
                            </div>
                            <div className="about__sociallink">
                                <ul className="nav">
                                    <li className="p-lg-2 mx-sm-1">
                                    <FontAwesomeIcon
                                    icon={faYoutube}
                                    color="yellow"
                                    size="1x"
                                    className="icon"
                                    />
                                    </li>
                                    <li className="p-lg-2 mx-sm-1">
                                    <FontAwesomeIcon
                                    icon={faFacebook}
                                    color="yellow"
                                    size="1x"
                                    className="icon"
                                    /> 
                                    </li>
                                    <li className="p-lg-2 mx-sm-1">
                                    <FontAwesomeIcon
                                    icon={faInstagram}
                                    color="yellow"
                                    size="1x"
                                    className="icon"
                                    /> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-sx-12 m-lg-5 ">
                        <StaticImage
                        src="../assets/images/image1.jpg"
                        width={500}
                        height={800}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A Gatsby astronaut"
                        style={{ marginBottom: `1.5rem` }}
                        />
                        </div>
                    </div>
                </div>
               </div>
            </div>
            </Layout>
        </div>
    )
}
