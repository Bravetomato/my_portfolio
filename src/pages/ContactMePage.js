import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// emailjs

export default function ContactMePage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_coerutr', 'template_qrouigp', form.current, 'PiIaBL-OiLfDgQxug')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
      <>
      <section id="contactme">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
         <div className="flex flex-col w-full mb-20"> 
          <h1 className="sm:text-4xl text-3xl font-medium title-font mt-4 mb-4 text-slate-400">
          CONTACT ME
          </h1>
          <i className="fa-solid fa-user"></i>
          <span className="mb-8 leading-relaxed">
            좋은 곳에서 일할 기회를 기다리고 있습니다. 
            <br />
            포트폴리오를 보고 저에 관한 궁금한 사항이나, 
            <br />
            멋진 제안이 있으시다면
            <br />
            언제든 편하게 연락주세요.
          </span>
          <div className="flex justify-center">
           <a href="https://github.com/Bravetomato">
           <i className="icon fa-brands fa-github fa-2x pl-5 pr-4"></i></a>
           <a href="https://blog.naver.com/princeps1c">
           <i className="icon fa-solid fa-blog fa-2x pl-3 pr-4"></i></a> 
          </div> 
          <div className="flex justify-center">
          <form ref={form} onSubmit={sendEmail} className="inline-flex flex-col border-slate-400 border-2 rounded p-3 mt-5">
           <i className="fa-solid fa-envelope fa-1x px-4"></i><span className="mt-2 mb-4">princeps2nd@gmail.com</span>
            <label className="input-group input-group-vertical">
              <span>NAME</span>
            <input type="text" name="name" placeholder="성함" className="input input-bordered input-md mb-3"/>
            </label>
            <label className="input-group input-group-vertical">
              <span>E-MAIL</span>
            <input type="email" name="email" placeholder="메일주소" className="input input-bordered input-md mb-3"/>
            </label>
            <label className="input-group input-group-vertical">
              <span>PHONE</span>
            <input type="text" name="phone" placeholder="연락처" className="input input-bordered input-md mb-3"/>
            </label>
            <label className="input-group input-group-vertical">
              <span>TEXT</span>
            <textarea name="message" placeholder="내용" className="input input-bordered input-md mb-3"/>
            </label>
            <input type="submit" value="SEND" className="flex justify-center ml-2 mt-2 py-1 px-3 bg-slate-400 border-0 hover:bg-sky-200 rounded cursor-pointer"/>
          </form>
          </div>
         </div>
        </div> 
      </section>      
      </>
    );
  }

 