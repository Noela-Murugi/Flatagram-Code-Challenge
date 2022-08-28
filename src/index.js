// write your code here
document.addEventListener('DOMContentLoaded', () => {
function getImageDetails(id){
    fetch (`http://localhost:3000/images/${id}`)
    .then((res) => res.json())
    .then((data) => {
        document.querySelector('#card-title').textContent = data.title;
        document.querySelector('#card-image').src = data.image;
        document.querySelector('#like-button').addEventListener('click', function (){
            let countLike = document.querySelector('#like-count')
            data.likes ++;
            countLike.textContent = `${data.likes} likes`;
        })
    })
}
getImageDetails(1)


})
