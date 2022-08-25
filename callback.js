let posts = [
    {title: 'post 1', body: 'post 1 body'},
    {title: 'post 2', body: 'post 2 body'}
];

function getPost(){
    setTimeout(() => {
        let output = ''
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback()
    }, 2000);
}

let newPost = {title: 'post 3', body: 'post 3 body'};
createPost(newPost, getPost);