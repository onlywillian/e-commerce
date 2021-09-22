module.exports = app => {
    const towels = app.data.itensList;
    const controller = {}
    
    controller.towelsList = (req, res) => res.status(200).json(towels);
    
    return controller;
}