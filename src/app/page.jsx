import { prisma } from "@/libs/prisma";
import TareaCard from "@/components/TareaCard";

const fetchUsers = async () => {
const res =await prisma.task.findMany();

// const data = await res.json();
console.log(res);
return res
// si tuviesemos el back separado del front, usariamos fetch. Pero con prisma, y teniendo en el mismo proyecto el back y el front, podemos usar esta manera de conectar  consutlar al back/servidor
};

// async function fetchUsers() {
//   const res = await fetch("http://localhost:3000/api/task");
//   const data = await res.json();
//   // console.log(data)
//   return data;
// }

async function Home() {
  const tareas = await fetchUsers();

  return (
    <section className="container mx-auto bg-slate-900 h-screen">

    <div className="grid grid-cols-3 gap-3 p-10">
      {/* <h1>Tareas</h1> */}
      {tareas.map((task) => 
        <TareaCard key={task.id} task={task} />
      )}
    </div>
      </section>
  );
}

export default Home;
