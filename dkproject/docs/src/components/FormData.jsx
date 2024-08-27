import { useRef } from "react";
import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const navigate = useNavigate();
  const nameElement = useRef();
  const emailElement = useRef();
  const phoneElement = useRef();
  const bodyElement = useRef();
  // const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameElement.current.value;
    const email = emailElement.current.value;
    const phone = phoneElement.current.value;
    const body = bodyElement.current.value;

    nameElement.current.value = "";
    emailElement.current.value = "";
    phoneElement.current.value = "";
    bodyElement.current.value = "";

    fetch("http://localhost:8080/details", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        body: body,
      }),
    })
      .then((res) => res)
      .then((res) => {
        navigate("/orders");
      });
  };

  return (
    <main className="h-[77vh] w-[100vw]  pt-[100px]  bg-black ">
      <h1 className="bg-[red] text-center text-[whitesmoke] w-[100vw] uppercase font-black font-serif">
        Form
      </h1>
      <Form
        method="POST"
        onSubmit={handleSubmit}
        className="m-auto rounded-[20px] h-[87%] w-[80%] bg-[green] border-[3px] border-[green] "
      >
        <div className="p-[10px] ">
          <label htmlFor="name" className=""></label>
          <input
            className="p-[7px] rounded-[12px] border-[4px] border-[green] w-[100%]"
            type="text"
            ref={nameElement}
            id="name"
            placeholder="Enter Full name.."
          />
        </div>

        <div className="p-[10px]">
          <label htmlFor="email"></label>
          <input
            className="p-[7px] rounded-[12px] border-[4px] border-[green] w-[100%]"
            type="email"
            ref={emailElement}
            id="email"
            placeholder="Enter your email id.."
          />
        </div>
        <div className="p-[10px]">
          <label htmlFor="phone"></label>
          <input
            className="p-[7px] rounded-[12px] border-[4px] border-[green] w-[100%]"
            type="phone"
            ref={phoneElement}
            id="phone"
            placeholder="Enter your Phone no.."
          />
        </div>
        <div className="p-[10px] ">
          <label htmlFor="body"></label>
          <textarea
            className="p-[7px] overflow-scroll rounded-[12px] border-[4px] border-[green] w-[100%]"
            type="text"
            ref={bodyElement}
            id="body"
            cols=""
            rows="3"
            placeholder="Tell us reason about it"
          ></textarea>
        </div>

        <button
          type="submit"
          className="rounded-[17px] text-[34px]  font-extrabold w-[100%] mt-[19px] bg-[green] h-[64px]"
        >
          Post
        </button>
      </Form>
    </main>
  );
};

export default FormData;
