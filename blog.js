function createBlog() {
    const blogContents = document.querySelector('.blog-contents')

    let text = ""

    for (let i = 0; i < blogsData.length; i++) {
        text += `
        <div class="blocks-blog">
            <img src="${blogsData[i].imgUrl}" alt="${blogsData[i].imgAlt}">
            <h1>${blogsData[i].title}</h1>
            <p>${blogsData[i].textBlock}</p>
            <button class="read-more-btn-blog">Mehr</button>

            <div class="show-blog-text">
                <p>${blogsData[i].moreBlogText}</p> 
                <div class="btn-close-blog">
                    <i class="far fa-times-circle"></i>
                </div>
            </div>
        </div> 
    `
    }
    blogContents.innerHTML = text
}
createBlog()


const readMoreBtnBlog = document.querySelectorAll('.read-more-btn-blog')
const showBlogText = document.querySelectorAll('.show-blog-text')
const btnCloseBlog = document.querySelectorAll('.btn-close-blog')

for (let i = 0; i < readMoreBtnBlog.length; i++) {
    readMoreBtnBlog[i].addEventListener('click', function() {
        showBlogText[i].classList.add('active-blog-btn')
    })
}
for (let i = 0; i < btnCloseBlog.length; i++) {
    btnCloseBlog[i].addEventListener('click', function() {
        showBlogText[i].classList.remove('active-blog-btn')
    })
}