import InputDiv from "../components/InputDiv"
import TaskSection from "../components/TaskSection"

function Home() {
  return (
    <div className=" w-[90%] md:w-[70%] flex flex-col gap-y-5 items-center">
        <InputDiv />
        <TaskSection />
    </div>
  )
}

export default Home