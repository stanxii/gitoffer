import React, {Component, PropTypes} from 'react';
import serialize from 'serialize-javascript';
import DocumentMeta from 'react-document-meta';
const cdn = '//cdnjs.cloudflare.com/ajax/libs/';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.object,
    store: PropTypes.object
  }

  render() {
    const {assets, component, store} = this.props;
    return (
      <html lang="en-us">
        <head>
          <meta charSet="utf-8"/>
          {DocumentMeta.rewind({asReact: true})}

          <link rel="shortcut icon" href="/favicon.ico" />

          {/* Page styles */} 
          <link href="http://fonts.useso.com?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en" rel="stylesheet" />
          <link href="http://fonts.useso.com/icon?family=Material+Icons" rel="stylesheet" />
  	      <link rel="stylesheet" href="/react-mdl/material.min.css" />
          <link rel="stylesheet" href="/css/main.css" />

          {/* styles (will be present only in production with webpack extract text plugin) */}
          {Object.keys(assets.styles).map((style, i) =>
            <link href={assets.styles[style]} key={i} media="screen, projection"
                  rel="stylesheet" type="text/css"/>
          )}
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{__html: React.renderToString(component)}}/>
          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} />
          <script src={assets.javascript.main}/>
          <script src='/react-mdl/material.min.js' />
        </body>
      </html>
    );
  }
}
