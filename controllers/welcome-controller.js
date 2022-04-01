const welcomeController = (app) => {
    app.get('/', (req, res) => {
        res.send('Welcome to the web dev server!')
    });
}
export default welcomeController;
