let posts = [{ name: "Post1" }, { name: "Post2" }];

function listPosts() {
  posts.map((post) => {
    console.log(post.name);
  });
}

function addPost(post) {
  console.log("Post ekleniyor");
  const promise1 = new Promise((resolve, reject) => {
    posts.push(post);
    resolve("Post eklendi");
    reject("Post eklenemedi");
  });
  return promise1;
}

async function showPosts() {
  try {
    await addPost({ name: "Post3" });
    listPosts();
  } catch (error) {
    console.log(error);
  }
}

showPosts();
