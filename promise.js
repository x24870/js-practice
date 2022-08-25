let posts = [
    {title: 'post 1', body: 'post 1 body'},
    {title: 'post 2', body: 'post 2 body'}
];

// promise
function getPost(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const err = false; // if true catch this err
            if(!err){
                resolve();
            }else{
                reject('Error: something went wrong');
            }
        }, 1000);
    });
}

createPost({title: 'new post'})
.then(getPost)
.catch(err => console.log(err));

fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data);
})
.catch((e) => {
    console.error(e);
})

// async and await
// async function fetchUser(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     console.log(res);
//     const data = await res.json();
//     console.log(data);
// }

// fetchUser();