module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`BTask PAI - PORTA ${app.get("port")}`);
    });
}