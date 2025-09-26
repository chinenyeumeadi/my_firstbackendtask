

export async function  getUser (){
    try {
        
        console.log('gotten users')
    } catch (error) {
        console.log(error)
    }
}


export async function postUser(req, res, next) {
    try {
            console.log('the products has been read');

    } catch (err) {
        next(err)
    }
}