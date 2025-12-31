class CustomeError extends Error {
    constructor(code){
        super();
        this.code = code;
    }
}

module.exports = CustomeError;