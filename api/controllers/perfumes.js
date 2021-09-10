module.exports = app => {
    const perfumes = app.data.perfumes;
    const controller = {};
    
    controller.perfumeList = (req, res) => res.status(200).json(perfumes)
    
    return controller;
}
