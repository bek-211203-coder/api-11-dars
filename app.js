//// darsda yozilgan kodlar

// // let count = 0;
// // let inetval = setInterval(() => {
// //     count++
// //     console.log(`count ${count}`);
// //     if(count >= 5){
// //         clearInterval(inetval)
// //         console.log('stop');

// //     }

// // } , 1000)

// // const internet = false;

// // const getData = () => {
// //     return new Promise((resolve, reject) => {
// //         // servaerga so'rov jo'natamiz 

// //         if (internet) {
// //             resolve('Some Data hello promise');
// //         } else {
// //             reject('Some Error promise');
// //         }
// //     })
// // }
// // getData().then((data) => {
// //     console.log(data);
// // }).catch((err) => {
// //     console.log(err)
// // })
///// VAZIFA 11 

const button = document.getElementById('button');
const wrapper = document.querySelector('#wrapper');

function createCard(todo) {
    return `
        <div class="todo">
            <h3>Album ID: ${todo.albumId}</h3>
            <h3>ID: ${todo.id}</h3>
            <h3>Title: ${todo.title}</h3>
            <img src="${todo.url}" alt="${todo.title}"/> 
        </div>
    `;
}


document.addEventListener('DOMContentLoaded' , function(){
    fetch("https://jsonplaceholder.typicode.com/photos", {
        method: "GET" 
    })
    .then(response => {
        if (response.status === 200) {
            return response.json();
        }
    })
    .then(data => {
        wrapper.innerHTML = '';
        if (data.length) {
            wrapper.innerHTML = '';
            const limitedData = data.slice(0, 5000);
            const cards = limitedData.map(todo => createCard(todo)).join('');
            wrapper.innerHTML = cards;
        } else {
            wrapper.innerHTML = '';
        }
    })
    .catch(err => {
        console.error(err);
    });
})
