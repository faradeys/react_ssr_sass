function htmlTemplate( reactDom, reduxState, helmetData ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            ${helmetData.title.toString()}
            ${helmetData.meta.toString()}
            ${helmetData.link.toString()}
            ${helmetData.script.toString()}
            ${helmetData.noscript.toString()}
            <link rel="stylesheet" href="style.css">
        </head>

        <body>
            <div id="app">${ reactDom }</div>
            <script>
                window.REDUX_DATA = ${ JSON.stringify( reduxState ) }
            </script>
            <script src="app.bundle.js"></script>
        </body>
        </html>
    `;
}

module.exports = htmlTemplate;
