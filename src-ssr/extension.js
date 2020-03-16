/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 *
 * WARNING!
 * If you import anything from node_modules, then make sure that the package is specified
 * in package.json > dependencies and NOT in devDependencies
 *
 * Note: This file is used for both PRODUCTION & DEVELOPMENT.
 * Note: Changes to this file (but not any file it imports!) are picked up by the
 * development server, but such updates are costly since the dev-server needs a reboot.
 */
const rimraf = require('rimraf');
const path = require('path');
const fs = require('fs');
const os = require('os');
const QRCode = require('qrcode');

const QR_PREFIX = 'qr-dir-';

function deleteTempFolder(folderUrl) {
    rimraf(folderUrl, {}, (err) => {
        if (err) {
            console.log(err.message);
        }
    });
}

module.exports.extendApp = function ({ app, ssr }) {
    app.get('/api/download/:url', (req, res) => {
      const url = decodeURIComponent(req.params.url);
      const fileName = `qrcode.${req.query.e}`;

      fs.mkdtemp(path.join(os.tmpdir(), QR_PREFIX), (err, folderUrl) => {
        if (err) {
          res.status(502).send({
              error: 'CREATE_DIR',
              serverErrorMessage: err.message
          });
          return;
        }

        const fullFileUrl = path.resolve(folderUrl, fileName);
        QRCode.toFile(fullFileUrl, url, {
            version: req.query.v,
            errorCorrectionLevel: req.query.q,
            width: req.query.s,
            type: req.query.e
        }, (err) => {
            if (err) {
                deleteTempFolder(folderUrl);
                res.status(502).send({
                    error: 'CONVERT_MODULE',
                    serverErrorMessage: err.message
                });
                return;
            }

            res.download(fullFileUrl, (err) => {
                if (err) {
                    deleteTempFolder(folderUrl);
                    res.status(502).send({
                        error: 'DOWNLOAD_URL',
                        serverErrorMessage: err.message
                    });
                    return;
                }

                deleteTempFolder(folderUrl);
            });
        });
      });
    });
};
