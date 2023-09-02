export const notifications = (items) => {
  let notifs = document.querySelector(".notifications");
  items.forEach((item) => {
    notifs.innerHTML += `<div class="notifs">
    <div class="item  ${item.noRead ? "item--blue" : ""}">
      <img
        class="item__avatar"
        src="./assets/images/${item.avatar}"
        alt="avatar"
      />
      <div class="item__text">
        <div class="infos">
          
          <span class="link link--bold link--blue">${item.name}</span>
          <span> ${item.actions}</span>
           <div class="alert">
           ${
             item.message
               ? `<span class="link link--gray link--bold">${item.message}</span>`
               : ``
           }
           ${item.noRead ? `<div class="red-point"></div>` : ``}
           </div>
          </div>
         
      
        <span class="item__time">${item.time}</span>
        ${item.response ? `<p class="item__message">${item.response}</p>` : ``}
      </div>
    </div>
   ${
     item.image
       ? `<img
       class="notifs__img"
       src="./assets/images/${item.image}"
       alt="person"
     />`
       : ``
   }
  </div>
      `;
  });

  return notifs;
};
