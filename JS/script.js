let countModal = 0;
setInterval(function () {
  if (scrollY >= 4460 && countModal == 0) {
    $(".modal").modal("show");
    countModal++;
  }
}, 2200);
