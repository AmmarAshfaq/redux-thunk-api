
export function getData() {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((data) => {

                // console.log(data)
                data.json()
                    .then((userData) => {

                        dispatch({
                            type: "DATA",
                            payload: userData
                        })
                    })
            })
    }
}