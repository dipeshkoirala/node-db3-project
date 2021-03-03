
const db = require("../../data/db-config")
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  try {
    const { scheme_id } = req.params
    const scheme = await db("schemes").where({ scheme_id }).first()

    if (!scheme) {
      return res.status(404).json({
        message: `scheme with scheme_id <${scheme_id}> not found`,
      })
    }

    req.scheme = scheme
    next()
  } catch(err) {
    next(err)
  }

}



function validateschemeId() {
	return async (req, res, next) => {
			}
}

module.exports = {
  checkSchemeId,
	validateschemeId,
}


/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {

}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {

}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
