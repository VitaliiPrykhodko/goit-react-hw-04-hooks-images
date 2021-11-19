(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{14:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__3hU23"}},15:function(e,t,a){e.exports={overlay:"Modal_overlay__2KmEu",modal:"Modal_modal__1Bygc"}},26:function(e,t,a){e.exports={img:"ImageGalleryItem_img__2sY6r"}},27:function(e,t,a){e.exports={btn:"Button_btn__1MER8"}},6:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__3oIMI",form:"Searchbar_form__1oaXW",buttonForm:"Searchbar_buttonForm__2GPIS",input:"Searchbar_input__3MsgX",buttonIcon:"Searchbar_buttonIcon__3W7Pc"}},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),o=a.n(c),s=a(16),i=a(5),u=a(7),l=(a(34),a(6)),b=a.n(l),m=a(25),j=a(0),f=a(2);function g(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],o=r[1];return Object(f.jsx)("header",{className:b.a.searchbar,children:Object(f.jsxs)("form",{className:b.a.form,onSubmit:function(e){e.preventDefault(),""!==c?(t(c),o("")):u.b.error("Enter the data in the form!")},children:[Object(f.jsx)("button",{type:"submit",className:b.a.buttonForm,children:Object(f.jsx)(j.b.Provider,{value:{className:b.a.buttonIcon},children:Object(f.jsx)("span",{className:b.a.buttonLabel,children:Object(f.jsx)(m.a,{})})})}),Object(f.jsx)("input",{onChange:function(e){var t=e.currentTarget.value;o(t)},className:b.a.input,type:"text",autoComplete:"off",autoFocus:!0,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Search images and photos",name:"query",value:c})]})})}var h=a(26),d=a.n(h),O=function(e){var t=e.webformatURL,a=e.user,n=e.largeImageURL;return Object(f.jsx)("img",{className:d.a.img,src:t,alt:a,"data-image":n})},p=a(14),x=a.n(p),_=function(e){var t=e.pictures,a=e.handleLargeImage;return Object(f.jsx)("ul",{className:x.a.gallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.user,c=e.largeImageURL;return Object(f.jsx)("li",{onClick:function(){return a(c,r)},className:x.a.galleryItem,children:Object(f.jsx)(O,{webformatURL:n,user:r,largeImageURL:c,handleLargeImage:a})},t)}))})},v=a(27),y=a.n(v),I=function(e){var t=e.onClick;return Object(f.jsx)("button",{onClick:t,className:y.a.btn,children:"Load more"})},w=a(28),L=a.n(w),S="23495092-fcdd3993ee353ca97f61af1fc",k=a(29),N=a.n(k),C=function(){return Object(f.jsx)(N.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})},R=a(15),U=a.n(R);function E(e){var t=e.onClose,a=e.largeImage,r=e.alt;function c(e){"Escape"===e.code&&t()}return Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}})),Object(f.jsx)("div",{className:U.a.overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(f.jsx)("div",{className:U.a.modal,children:Object(f.jsx)("img",{src:a,alt:r})})})}function F(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(1),o=Object(i.a)(c,2),l=o[0],b=o[1],m=Object(n.useState)(""),j=Object(i.a)(m,2),h=j[0],d=j[1],O=Object(n.useState)(!1),p=Object(i.a)(O,2),x=p[0],v=p[1],y=Object(n.useState)(""),w=Object(i.a)(y,2),k=w[0],N=w[1],R=Object(n.useState)(""),U=Object(i.a)(R,2),F=U[0],M=U[1];return Object(n.useEffect)((function(){h&&(v(!0),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return L.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(S,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits.map((function(e){return e}))}))}(h,l).then((function(e){0===e.length&&u.b.warning("\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e!"),r((function(t){return[].concat(Object(s.a)(t),Object(s.a)(function(e){return e.map((function(e){return{id:e.id,webformatURL:e.webformatURL,user:e.user,largeImageURL:e.largeImageURL}}))}(e)))}))})).catch((function(e){return u.b.error(e.message)})).finally((function(){v(!1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}),[h,l]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(g,{onSubmit:function(e){d(e),b(1),r([])}}),x&&Object(f.jsx)(C,{}),a.length>0&&Object(f.jsx)(_,{pictures:a,handleLargeImage:function(e,t){N(e),M(t)}}),a.length>11&&Object(f.jsx)(I,{onClick:function(){b((function(e){return e+1}))}}),k&&Object(f.jsx)(E,{largeImage:k,alt:F,onClose:function(){N(""),M("")}}),Object(f.jsx)(u.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}var M=r.a.memo(F);a(74);o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(M,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.42ebada8.chunk.js.map