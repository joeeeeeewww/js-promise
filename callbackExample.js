const userLeft = false
const UserWatchingMeme = true

// function watchTutorialCallback(callback, errorCallBack) {
//     if (userLeft) {
//         errorCallBack({
//             name: 'User Left',
//             message: ':('
//         })
//     } else if (UserWatchingMeme) {
//         errorCallBack({
//             name: 'User watching Cat Meme',
//             message: 'web simplified < CAt'
//         })

//     }
//     else {
//         callback('Thumbs up & subscribe')
//     }
// }

// watchTutorialCallback(message => {
//     console.log('Success:' + message)
// }, (error) => {
//     console.log(error.name + ' ' + error.message)
// })


function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (UserWatchingMeme) {
            reject({
                name: 'User watching Cat Meme',
                message: 'web simplified < CAt'
            })

        }
        else {
            resolve('Thumbs up & subscribe')
        }

    })

} watchTutorialPromise().then(message => {
    console.log('Success:' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})