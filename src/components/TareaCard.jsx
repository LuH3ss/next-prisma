'use client'

import { useRouter } from 'next/navigation'

function TareaCard({task}) {

  const router = useRouter();

  return (
    <div key={task.id} className="bg-yellow-200 p-3 hover:bg-orange-500 hover:text-yellow-300 hover:cursor-pointer" >
    <h3 className="font-bold mb-2 text-2xl">{task.title}</h3>
    <p>{task.desciption}</p>
    <button className='bg-red-300 p-1 rounded hover:bg-slate-900 hover:text-yellow-200'
    onClick={() => {

      router.push('/task/edit/' + task.id)
    }
    }
    >
      Actualizar Tarea
    </button>
  </div>
  )
}

export default TareaCard