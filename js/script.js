function getUsers(){
    fetch("http://jsonplaceholder.typicode.com/users")
        .then(function(response) { 
            return response.json() 
        })
        .then(function(data) {
            console.log(data);
            addUsersToPage(data);
        })
        .catch(function(error) {
            console.log(error);
        })
}

function addUsersToPage(userList) {
    var HTML = ``;
    for (let index = 0; index < userList.length; index++) {
        const user = userList[index];

        HTML += `
        <div class="user" id="user-0">
            <div>${user.name}</div>
            <div>${user.email}</div>
            <div>${user.id}</div>
            <button onclick="getPostsByUser(${user.id})">Get Posts</button>
        </div>
        `;
    }
    document.getElementById("userList").innerHTML = HTML;
}

function getPostsByUser(userId) {
    document.getElementById("userId").innerHTML = "Posts from user: " + userId;
    fetch(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(function(response) { 
            return response.json() 
        })
        .then(function(data) {
            console.log(data);
            addPostsToPage(data);
        })
        .catch(function(error) {
            console.log(error);
        })
}

function addPostsToPage(postsList) {
    var HTML = ``;
    for (let index = 0; index < postsList.length; index++) {
        const post = postsList[index];

        HTML += `
        <div class="post" id="post-0">
            <div><strong>${post.title}</strong></div>
            <div>${post.body}</div>
            <br>
        </div>
        `;
    }
    document.getElementById("postsList").innerHTML = HTML;
}