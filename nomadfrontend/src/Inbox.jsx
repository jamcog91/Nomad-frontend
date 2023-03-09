import NavBar from './NavBar'

function Inbox() {

    return (
        <div>
            <div className="h-56 grid grid-cols-6 mb-8 gap-2 content-start">
        <img src="https://t4.ftcdn.net/jpg/01/20/99/55/240_F_120995537_2VWZ0wfkHbpOqL8M9j8UTE7yFlVmvhxo.jpg" alt="pine-logo" className="mt-2 rounded-full ml-4" />
        <h1 className="text-green-600 font-serif mt-48 text-6xl content-baseline first-line:text-5x1">Nomad</h1>
        </div>
               <NavBar /> 
               <p className="text-3xl ml-12 mb-10">Your inbox</p>
        </div>

    )
}
export default Inbox