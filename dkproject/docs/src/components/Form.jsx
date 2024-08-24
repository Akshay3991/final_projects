import { useRef } from "react";
import { usenavigate } from "react-router-dom";

function Form() {
  const navigate = usenavigate();
  const formnameElement = useRef();
  const formPhoneElement = useRef();
  const formEmailElement = useRef();
  const formBodyElement = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = formnameElement.current.value;
    const phone = formPhoneElement.current.value;
    const email = formEmailElement.current.value;
    const body = formBodyElement.current.value;

    name.current.value = "";
    phone.current.value = "";
    email.current.value = "";
    body.current.value = "";

    fetch("http://localhost:8080/details", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        body: body,
      }),
    })
      .then((res) => res)
      .then((data) => {
        console.log(data);
        navigate("/orders");
      });
  };

  return (
    <main className="h-[77vh] w-[100vw]  pt-[100px]  bg-black ">
      <Form
        method="POST"
        onSubmit={handleSubmit()}
        className="m-auto rounded-[20px] h-[87%] w-[80%] bg-[green] border-[3px] border-[green] "
      >
        <div className="p-[10px]">
          <label htmlFor="name"></label>
          <input
            className="p-[7px] rounded-[12px] border-[4px] border-[green] w-[100%]"
            type="text"
            ref={formnameElement}
            id="author"
            placeholder="Enter  Name.."
          />
        </div>
        <div className="p-[10px] ">
          <label htmlFor="phone" className=""></label>
          <input
            className="p-[7px] rounded-[12px] border-[4px] border-[green] w-[100%]"
            type="text"
            ref={formPhoneElement}
            id="title"
            placeholder="Enter your mobile no.."
          />
        </div>

        <div className="">
          <label htmlFor="email" className=""></label>
          <input
            type="text"
            className=""
            id="tags"
            ref={formEmailElement}
            placeholder="Please enter email id..."
          />
        </div>

        <div className="p-[10px] ">
          <label htmlFor="body"></label>
          <textarea
            className="p-[7px] overflow-scroll rounded-[12px] border-[4px] border-[green] w-[100%]"
            type="text"
            ref={formBodyElement}
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
          Submit
        </button>
      </Form>
    </main>
  );
}

export default Form;
