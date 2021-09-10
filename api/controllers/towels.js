module.exports = app => {
    const towels = app.data.towels;
    const controller = {}
    
    controller.towelsList = (req, res) => res.status(200).json(towels);
    
    return controller;
}