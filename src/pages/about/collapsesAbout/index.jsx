import React from 'react';
import CollapseTemplate from '../../../components/collapseTemplate/index';


function CollapsesAbout() {

    return (
        <section>
            <div>
                <CollapseTemplate 
                title='Fiabilité'
                content='Les annonces postées sur Kasa...'/>
            </div>
            <div>
                <CollapseTemplate 
                title='Respect'
                content='La bienveillance fait partie des valeurs...'/>
            </div>
            <div>
                <CollapseTemplate 
                title='Service'
                content='Nos équipes se tiennent à votre disposition...'/>
            </div>
            <div>
                <CollapseTemplate 
                title='Sécurité'
                content='La sécurité est la priorité de Kasa...'/>
            </div>
        </section>
    )
}

export default CollapsesAbout;