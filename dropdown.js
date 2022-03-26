let dropdown = document.querySelectorAll('li.dropdown-custom');


dropdown.forEach((item) => {
    item.addEventListener('click', e =>{

        console.log(e.target)
    //   let dropdownMenu = document.querySelectorAll('ul.dropdown-menu-custom');

    //   dropdownMenu.forEach((item) => {
    //     console.log(item)
    //   })
    })

})