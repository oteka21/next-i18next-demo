import React, { Fragment } from 'react'
import Link from 'next/link';
import { withTranslation } from '../i18n'

class Error extends React.Component{
    static getInitialProps({ res, err }) {
      const statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return { 
          statusCode,
          namespacesRequired: ['error']
         }
    }
  
    render() {
        const { statusCode } = this.props
      return (
          <Fragment>
                {
                    statusCode === 404 
                    ? <div className="message">
                        <h1>{this.props.t('title')}</h1>
                        <Link href='/'>
                            <a>
                                <h3>Volver a la home! o que?</h3>
                            </a>
                        </Link>
                    </div>
                    : <div className="message">
                    <h1>Ha ocurrido un error generico</h1>
                    <Link href='/'>
                            <a>
                                <h3>Volver a la home!</h3>
                            </a>
                        </Link>
                </div>
                }
                <style jsx>{`
                    .message{
                        padding: 100px;
                        text-align: center;
                    }
                `}</style>
            </Fragment>
      )
    }
  }


  export default withTranslation('error')(Error)