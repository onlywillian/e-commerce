module.exports = app => {
    const controller = app.controllers.perfumes;

    app.route('/api/v1/perfume-list')
        .get(controller.perfumeList);
}