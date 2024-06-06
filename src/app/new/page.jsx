"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [desciption, setDesciption] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/task/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setTitle(data.title);
          setDesciption(data.desciption);
        });
    }
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      const res = await fetch(`/api/task/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, desciption }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const data = res.json();
      // console.log(data)
      // router.refresh();
      // router.push("/");
    } else {
      const res = await fetch("/api/task", {
        method: "POST",
        body: JSON.stringify({ title, desciption }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // const data = await res.json();
      //  console.log(data)
      // router.refresh()
      // router.back();
    }
    router.refresh()
    router.back();
  };

  
  return (
    <div className="h-screen flex justify-center items-center">
      <form
        className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title" className="font-bold text-sm text-white">
          Titulo de tarea
        </label>
        <input
          type="text"
          id="title"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="titulo"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="description" className="font-bold text-sm text-white">
          Descripción de la tarea
        </label>
        <textarea
          rows="3"
          id="description"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Describe tu tarea"
          onChange={(e) => setDesciption(e.target.value)}
          value={desciption}
        ></textarea>
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Crear
          </button>
          {
            params.id && (
          <button
          type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={ async () => {
              const res = await fetch(`/api/task/${params.id}`, {
                method: "DELETE",
              });
              const data = await res.json();
              // console.log(data);
               router.refresh();
              router.back()
            }}
          >
            Borrar
          </button>

            )
          }
        </div>
      </form>
    </div>
  );
}

export default NewPage;
