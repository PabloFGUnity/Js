const {Type} = require("@sinclair/typebox")
const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const addErrors = require("ajv-errors");

const LoginDTOSchema = Type.Object({
    email: Type.String({
        format: 'email',
        errorMessage: {
            type: 'El tipo de email debe de ser string',
            format: 'Email debe contener un correo electrónico válido'
        }
    }),
    password: Type.String({
        errorMessage: {
            type: 'El tipo de password debe de ser un string'
        }
    }),
},{
    additionalProperties: false,
    errorMessage: {
        type: 'Debe ser un objeto',
        additionalProperties: 'El formato del objeto no es válido',
        required: {
            email: 'El email es requerido',
            password: 'La password es requerida'
        }
    }
});

const ajv = new Ajv({ allErrors: true });
addFormats(ajv, ['email']);
addErrors(ajv, {keepErrors: false});

const validate = ajv.compile(LoginDTOSchema);

const validateLoginDto = (req, res, next) => {

    const isDTOvalid = validate(req.body);
    if(!isDTOvalid) return res.status(400).send(ajv.errorsText(validate.errors, {separator: '\n'}));

    next();

};

module.exports = validateLoginDto;