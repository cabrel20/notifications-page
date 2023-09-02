import { notifications } from "../widgets/notifications.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const datas = fetch("../../datas.json").then((res) => {
    return res.json();
  });
  datas.then((res) => {
    return notifications(res.notifications);
  });
});
