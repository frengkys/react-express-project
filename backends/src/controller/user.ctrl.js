import model from '../models/'

/**
 * Get user
 * @returns {User}
 */

function getAll(req, res) {
    model.User.findAll().then(users => {
        return res.json(users);
    })
}

export default {getAll}