import React from 'react'
import { withTranslation } from '../i18n'

function Character ({t}) {
    return (
        <div>
            <h1>{t('title')}</h1>
            <p>this is not translated</p>
        </div>
    )
}


Character.getInitialProps = async () => {
    return {
        namespacesRequired: ['character']
    }
}

export default withTranslation('character')(Character)