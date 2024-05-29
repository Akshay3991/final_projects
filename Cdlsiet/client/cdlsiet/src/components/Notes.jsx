import { useEffect, useContext } from 'react'
import { PostList } from '../Store/post-list-store';

const Notes = () => {
  const { NotesList, addnotesList } = useContext(PostList);
  // console.log(NotesList)
  useEffect(() => {
    async function getNotes() {
      await fetch('https://cdlsiet-server.onrender.com/cdlsiet/notes')
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          addnotesList(data)
        })

    }
    getNotes();
  }, [addnotesList])


  let notesitems = NotesList.map((data) => {
    return (
      <NotesItems key={data.id} data={data} />
    )
  })
  return (
    <main className="h-[70vh] mt-[70px] bg-[black] pt-[20px] ">

      <section className="h-[95%] w-[95vw] rounded-[20px] m-auto bg-[whitesmoke] overflow-scroll  flex flex-wrap ">
        {notesitems}
      </section>
    </main>
  )
}

export default Notes;
const NotesItems = ({ data }) => {

  return (
    <div className='m-[10px] p-[20px] bg-[#ece8e8]  h-[20vh] w-[20vw] rounded-[12px]  shadow-xl shadow-black'>
      <h2 className='font-bold uppercase bg-[green] rounded-[5px] p-[1px] text-[white]'>{data.subject}</h2>
      <h3 className='font-black uppercase' >{data.stream}</h3>
      <h3 className='font-black uppercase'>{data.year} year</h3>
      {/* <object data={data.url} type="application/pdf" width="100%" height="100%">
      </object> */}
      <p className='font-black  text-[#1f1d1d]'>Link to pdf --> <a className='bg-[red] p-[2px] rounded-[5px] text-[whitesmoke]' href={data.url}>here!</a></p>
    </div>
  )

}