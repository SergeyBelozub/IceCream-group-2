!function(){!function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),openModalBtn2:document.querySelector("[data-modal-mob-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector(".body")};function t(){e.body.classList.toggle("no-scroll"),e.modal.classList.toggle("modal--is-hidden")}e.openModalBtn.addEventListener("click",t),e.openModalBtn2.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.modal.addEventListener("click",(function(t){t.target===document.querySelector(".modal")&&e.modal.classList.add("modal--is-hidden")}))}();var e={checkboxes:document.querySelectorAll(".form__choose"),productContainer:document.querySelector(".form__products"),formCard:document.querySelectorAll(".form__card"),quantity:document.querySelector(".quantity"),deleteBtn:document.querySelectorAll(".quantity__btn")};e.productContainer.addEventListener("click",(function(e){if("INPUT"===e.target.nodeName){var t=e.target;if(t.checked){var o=document.getElementById(t.name);t.parentNode.classList.add("form__card--checked"),o.classList.remove("isHidden")}else{var d=document.getElementById(t.name);t.parentNode.classList.remove("form__card--checked"),d.classList.add("isHidden")}}}));var t=!0,o=!1,d=void 0;try{for(var n,r=e.deleteBtn[Symbol.iterator]();!(t=(n=r.next()).done);t=!0){n.value.addEventListener("click",a)}}catch(e){o=!0,d=e}finally{try{t||null==r.return||r.return()}finally{if(o)throw d}}function a(t){t.preventDefault(),t.target.parentNode.classList.add("isHidden");var o=!0,d=!1,n=void 0;try{for(var r,a=e.checkboxes[Symbol.iterator]();!(o=(r=a.next()).done);o=!0){var c=r.value;c.name===t.target.id&&(c.checked=!1,c.parentNode.classList.remove("form__card--checked"))}}catch(e){d=!0,n=e}finally{try{o||null==a.return||a.return()}finally{if(d)throw n}}}}();
//# sourceMappingURL=index.0e109cfa.js.map
