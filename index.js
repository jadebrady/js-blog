function resetBtn() {
    document.getElementById("photo").value = null;
}

const blogPost1 = JSON.stringify({
    title: title,
    blog: blog,
    photo: photo,
    author: author,
});
$.post("http://localhost:63342/js-blog/home.html", blogPost1, (data, status) => {
    console.log(data, status);
});
