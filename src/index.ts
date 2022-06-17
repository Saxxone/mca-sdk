interface Config {
  requestEmail?: boolean;
  requestDOB?: boolean;
  requestFirstName?: boolean
  requestLastName?: boolean
}

function mountIframe(config: Config) {
  const iframe = document.createElement('iframe')
  iframe.setAttribute('id', 'mycover-sdk')
  iframe.setAttribute('allow', 'fullscreen')
  iframe.setAttribute('src', 'https://www.mycover.ai/sdk/mycover.html')
  iframe.setAttribute('style', 'position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:9999999999; background-color: rgba(42, 41, 41, 0.93);')
  document.body.appendChild(iframe);
  iframe.onload = function () {
    // @ts-ignore
    iframe.contentWindow.postMessage(config, "*");
  };
}

function mycover(config: Config) {
  mountIframe(config)
}


export default mycover
