import * as jose from 'jose'

const alg = "HS256"
const contraseña = new TextEncoder().encode('contraseña')

const jwt = await new jose.SignJWT({
    "id": 5
}).setProtectedHeader({ alg })
.sign(contraseña)

console.log(jwt)