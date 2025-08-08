module.exports = app =>{
    app.get("/", (req, res) => {
        res.json({statusbar: "Btask API"});
    });
};