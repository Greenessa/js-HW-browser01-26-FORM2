import dayjs from "dayjs";

export default class SearchTicket {
  constructor() {
    this.checkEl = document.querySelector("#check");
    this.backEl = document.querySelector(".backdate");
    this.dateEl = document.getElementById("date");
    this.backdateEl = document.getElementById("backdate");
    this.checkEl.addEventListener("click", () => {
      if (this.checkEl.checked) {
        this.backEl.style.display = "block";
      } else {
        this.backEl.style.display = "none";
      }
    });
  }
  init() {
    const today = dayjs().format("YYYY-MM-DD");
    console.log(today);
    this.dateEl.min = today;
    this.backdateEl.min = dayjs().add(1, "day").format("YYYY-MM-DD");
  }
}
