function shortData(){
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(response => response.json())
    .then(data => displaySearch(data.data.tools))

}
const displaySearch = tools => {
    // console.log(tools);
    const button = document.getElementById('button');
    button.innerHTML = `<button class="btn btn-outline">Default</button>
    <button class="btn btn-outline">Default</button>
    <button class="btn btn-outline">Default</button>`;
    const container = document.getElementById('card');
    for(const tool of tools){
        console.log(tool);
        const div = document.createElement('div');
        div.classList.add = ('card w-96 bg-base-100 shadow-xl');
        div.innerHTML = `
        <figure><img src="${tool.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            ${tool.name}
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-center">
          </div>
        </div>
        </div>
        
        `;
        container.appendChild(div);
    }
    

}