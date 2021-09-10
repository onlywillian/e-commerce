module.exports = app => {
    const controller = app.controllers.towels;

    app.route('/api/v1/towels-list')
        .get(controller.towelsList)
}