let electron = require('electron')
let {app} = electron

app.on('ready', () => {
  let {powerMonitor} = electron

  powerMonitor.on('suspend', () => {
    console.log('suspend');
  });

  powerMonitor.on('resume', () => {
    console.log('resume');
  });

  powerMonitor.on('on-ac', () => {
    console.log('on-ac');
  });

  powerMonitor.on('on-battery', () => {
    console.log('on-battery');
  });
})
