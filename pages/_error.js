import React, { Fragment } from 'react'
import Link from 'next/link';
import { withTranslation } from '../i18n'

class Error extends React.Component{
    static async getInitialProps({ res, err }) {
      const statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return { 
          statusCode,
          namespacesRequired: ['error']
         }
    }
  
    render() {
        const { statusCode } = this.props
      return (
        <div className="message">
            <h1>{this.props.t('title')}</h1>
            <Link href='/'>
                <a>
                    <h3>{this.props.t('subtitle')}</h3>
                </a>
            </Link>
        </div>
      )
    }
  }

  export default withTranslation('error')(Error)