enum UserOptions {
    yes,
    no
}

interface Config {
    readonly  requestEmail?: boolean,
    readonly  requestDOB?: boolean
    readonly  requestFirstName?: boolean
    readonly  requestLastName?: boolean
    readonly  requestUserOptions?: UserOptions
}

const config = {
    requestEmail: true
}

function initialize(config: Config) {
    console.log('Mycover AI SDK installed!!', config)
}

initialize(config)

export default initialize;