import React from 'react';
// import CollapsibleTemplate component
import CollapsibleTemplate from '../../../TemplateComponents/CollapsibleTemplate/index'; 


// CollapsiblesAbout component
function CollapsiblesAbout() {

    return (
        <section>
            <div className='wrapper'>
                <CollapsibleTemplate 
                    label='Fiabilité'>
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. 
                    Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </CollapsibleTemplate>
           
                <CollapsibleTemplate 
                    label='Respect'>
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. 
                    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </CollapsibleTemplate>
          
                <CollapsibleTemplate 
                    label='Service'>
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                    N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </CollapsibleTemplate>
           
                <CollapsibleTemplate 
                    label='Sécurité'>
                    <p>La sécurité est la priorité de Kasa. 
                    Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
                    En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </CollapsibleTemplate>
            </div>
        </section>
    )
}

export default CollapsiblesAbout;