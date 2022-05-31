enum UserOptions {
  yes,
  no
}

interface Settings {
  requestEmail?: boolean;
  requestDOB?: boolean;
  requestFirstName?: boolean
  requestLastName?: boolean
  requestUserOptions?: UserOptions,
}

interface Config {
  onClose: () => void,
}

const settings = {
  requestEmail: true,

}
const config = {
  onClose() {

  }
}

function mycoverAI(settings: Settings, config: Config) {
  console.log('Mycover AI SDK installed!!', config)
  //mounting iframe..
  mountIframe()
}

function mountIframe() {
  const iframe = document.createElement('iframe')
  iframe.setAttribute('id', 'mycover-sdk')
  iframe.setAttribute('title', 'Mycover SDK')
  iframe.setAttribute('width', '300')
  iframe.setAttribute('height', '200')
  iframe.setAttribute('allow', 'fullscreen')
  iframe.setAttribute('src', './mycover.html')
  iframe.setAttribute('style', 'position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:9999999999;')

  document.body.appendChild(iframe);
}

mycoverAI(settings, config)

export const mycover = mycoverAI;
