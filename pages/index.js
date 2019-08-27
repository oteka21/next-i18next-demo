import React, { Fragment } from 'react'
import { i18n, withTranslation } from '../i18n'

class Homepage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    }
  }

  render() {
    return (
      <Fragment>
        <div>{this.props.t('title')}</div>
        <select onChange={ e => i18n.changeLanguage(e.target.value) }>
            <option value='en'>en</option>
            <option value='de'>de</option>
            <option value='fr'>fr</option>
        </select>
      </Fragment>
    )
  }
}

export default withTranslation('common')(Homepage)