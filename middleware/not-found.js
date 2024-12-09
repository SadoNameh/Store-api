const notFound = (req, res) => res.status(404).send('My custom error: Route does not exist')

module.exports = notFound
