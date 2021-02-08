module.exports = {
  getPlanes: (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance
    .get_planes()
    .then((planes) => {
      res.status(200).send(planes)
    })
    .catch((err) => console.log(err))
  },

  addPlane: (req, res) => {
    const dbInstance = req.app.get('db');
    const { type, passengers } = req.body;
    dbInstance
    .add_plane([type, passengers])
    // !Change inside db file addPlane as well if want to use object style
    // .add_plane({passengers, type})
    .then((planes) => {
      res.status(200).send(planes)
    })
    .catch((err) => res.status(500).send(err))
  },


};