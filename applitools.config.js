module.exports = {
    concurrency: 10,
    apiKey: process.env.APPLITOOLS_API_KEY,
    //
    browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome'},
                {width: 800, height: 600, name: 'chrome'},
                {width: 2560, height: 1440, name: 'chrome'},
                {width: 900, height: 800, name: 'chrome'},
                {width: 1024, height: 768, name: 'chrome-one-version-back'},
                {width: 700, height: 500, name: 'firefox'},
                {width: 2560, height: 1440, name: 'firefox'},
                 {width: 600, height: 800, name: 'firefox'},
                {width: 1300, height: 1200, name: 'firefox-one-version-back'},
                 {width: 1300, height: 1200, name: 'firefox'},
                {width: 1024, height: 768, name: 'edgechromium'},
                {width: 2560, height: 1440, name: 'edgechromium'},
                {width: 900, height: 800, name: 'edgechromium'},
                {width: 800, height: 600, name: 'safari'},
                 {width: 1300, height: 1200, name: 'safari-one-version-back'},
                {width: 1024, height: 768, name: 'safari'},
                {width: 2560, height: 1440, name: 'safari'},
                {width: 900, height: 800, name: 'safari'},
                // Add mobile emulation devices in Portrait mode
                {deviceName: 'iPhone XR', screenOrientation: 'portrait'},
                {deviceName: 'Pixel 2', screenOrientation: 'portrait'},
    ],
    // set batch name to the configuration
    batchName: 'Cypress-GitAcions',
    batchId: process.env.APPLITOOLS_BATCH_ID
    
}
