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
}

mycoverAI(settings, config)

export const mycover = mycoverAI;
