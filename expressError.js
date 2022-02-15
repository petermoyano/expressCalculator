class ExpressError extends Error {
    contructor(message, status){
        super();
        this.message = message;
        this.status = status;
        console.error(this.stack);
    }
}

module.exports = ExpressError;