module.exports = {
    concurrency: 10,
    apiKey: 'Ukw1VB3104G0A4ur0h2cvy7eLXzXrjd3YLi4yWUs19vW4110',
    //
    browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome'},
        {width: 700, height: 500, name: 'firefox'},
        {width: 1600, height: 1200, name: 'ie11'},
        {width: 1024, height: 768, name: 'edgechromium'},
        {width: 800, height: 600, name: 'safari'},
        // Add mobile emulation devices in Portrait mode
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        {deviceName: 'Pixel 2', screenOrientation: 'portrait'}
    ],
    // set batch name to the configuration
    batchName: 'Cypress-GitAcions',
    batchId: process.env.APPLITOOLS_BATCH_ID
    
}
