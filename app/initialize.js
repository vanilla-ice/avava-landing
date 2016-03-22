document.addEventListener('DOMContentLoaded', () => {
  $('.head-slider').slick({
    arrows: false,
    autoplay: true
  });

  $('.head-main-button').on('click', () => {
    swal({
      title: "Записаться на курс",
      text: "Введите Ваш E-mail:",
      type: "input",
      type: "input",
      showCancelButton: true,
      closeOnConfirm: false,
      animation: "slide-from-top",
      inputPlaceholder: "example@mail.com" },
      (inputValue) => {
        if (inputValue === false)
          return false;
        if (inputValue === "") {
          swal.showInputError("Введите E-mail");
          return false   }
          swal("Спасибо!", "Заявка отправлена", "success");
      });
  });

  $('.button-course').on('click', () => {
    swal({
      title: "Записаться на курс",
      text: "Введите Ваш E-mail:",
      type: "input",
      type: "input",
      showCancelButton: true,
      closeOnConfirm: false,
      animation: "slide-from-top",
      inputPlaceholder: "example@mail.com" },
      (inputValue) => {
        if (inputValue === false)
          return false;
        if (inputValue === "") {
          swal.showInputError("Введите E-mail");
          return false   }
          swal("Спасибо!", "Заявка отправлена", "success");
      });
  });



});
