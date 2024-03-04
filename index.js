const AllPostsCard = async (result) => {
    const url = " https://openapi.programming-hero.com/api/retro-forum/posts";
    const cetagory = ` https://openapi.programming-hero.com/api/retro-forum/posts?category=${result}`
    const res = await fetch(result ? cetagory : url);
    const data = await res.json();
    const allData = data.posts;
    AllCard(allData)
}

const AllCard = (allData) => {
    
    const letCard = document.getElementById("let-card");
    letCard.textContent = "";
    allData.forEach(item => {
        
        const div = document.createElement("div")
        console.log(item);
        div.innerHTML = `<div
        class="card lg:card-side mb-5 md:h-[277px] lg:h-[277px]  bg-base-100 shadow-xl border border-cyan-950 p-4 lg:p-7">
        <div>
            <div class="avatar relative">
                <div class="  ${item.isActive ? 'bg-green-600' : ' bg-red-600 '} h-4 w-4 rounded-full absolute right-0 bottom-16 border border-neutral-50">
            </div>
            <div class="w-24 rounded-full">
                <img src="${item.image}" />
            </div>
        </div>

        </div>
        <div class="card-body">
            <div class="flex">
                <p class="font-medium text-sm font-inter "> # ${item.category}</p>
                <p class="font-medium text-sm font-inter ">Author : ${item.author.name}</p>
            </div>
            <h2 class="font-bold text-xl text-[#12132D]">${item.title}
            </h2>
            <p class="text-base font-normal">${item.description}</p>
            <div class="border border-dashed border-slate-400 my-5 w-full"> </div>
            <div class="flex justify-between">
                <div class="flex  gap-5">
                    <!-- comment and follow icon -->
                    <div class="flex gap-1">
                        <img src="./images/icon/Group 13.png" alt="">
                        <p class="text-base font-normal font-inter">${item.comment_count}</p>
                    </div>
                    <div class="flex gap-1">
                        <img src="./images/icon/Group 16.png" alt="">
                        <p class="text-base font-normal font-inter">${item.view_count}</p>
                    </div>
                    <div class="flex gap-1">
                        <img src="./images/icon/Group 18.png" alt="">
                        <p class="text-base font-normal font-inter">${item.posted_time} min</p>
                    </div>
                </div>
                <button onclick="hendelClick('${item.title}', '${item.view_count}')"><img src="./images/icon/Vector.png" alt=""></button>
            </div>
        </div>
    </div>`

        letCard.appendChild(div)
    });
}
let count = 1;
const hendelClick = (title, view) => {
    const incount = count++;
    const increment = document.getElementById('increment')
    increment.innerHTML = `<p class="text-base font-normal">(${incount})</p>`
    console.log(count);
    console.log(title, view);
    const titleViewShow = document.getElementById("title-view");
    const div = document.createElement("div");

    div.innerHTML = `
    <div  class="flex justify-between bg-white m-4 p-4">
        <h5 class="text-base font-semibold text-[#12132D]">${title}</h5>

        <div class="flex gap-1 justify-center items-center">
            <img src="./images/icon/Group 16.png" alt="">
            <p class="text-base font-normal font-inter">${view}</p>
        </div>

    </div>
    
    `
    titleViewShow.appendChild(div)
}

const searchHebndel = () => {
    const searchInput = document.getElementById("search-input");
    const searchresult = searchInput.value;
    AllPostsCard(searchresult)
}
AllPostsCard()