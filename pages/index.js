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
        <button
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
        >
          Change locale
        </button>
      </Fragment>
    )
  }
}

export default withTranslation('common')(Homepage)