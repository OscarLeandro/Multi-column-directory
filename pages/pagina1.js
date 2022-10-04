import { useRouter } from "next/router";

export default function Pagina1() {
  const router = useRouter();
  let currentPath = router.asPath;

  return (
    <>
      {
      currentPath === '/pagina2' ? 
      <button onClick={()=>router.push('/pagina2')}  className='px-8 bg-red-500'>pagina2 </button>
      :
      <button onClick={()=>router.push('/pagina1')}  className='px-8 bg-black'>pagina1 </button>
    }
    </>
  );
}
