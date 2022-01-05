
exports.get = (req, res) => {
    const id = req.params.id;
    res.send(`OK GET id = ${id}`);
}

exports.getAll = (req, res) => {
    res.send('OK GET ALL');
}

exports.add = (req, res) => {
    res.send('OK ADD');
}

exports.update = (req, res) => {
    res.send('OK UPDATE');
}

exports.delete = (req, res) => {
    res.send('OK DELETE');
}
