
import './App.css';



function App() {
	return (
		<>
			<div className='photoBack'>
				<div className='picture' >
					<img alt="" src='https://source.unsplash.com/gYl-UtwNg_I/1500x1500' style={{width:"100%", height:"100%"}}/>
					<div className="text">Hey</div>
				</div>

				<div className='picture'>
					<img alt="" src='https://source.unsplash.com/rFKUFzjPYiQ/1500x1500' style={{width:"100%", height:"100%"}}></img>
					<div className ="text">Let's</div>
				</div>


				<div className='picture'>
					<img style={{width:"100%", height:"100%"}} alt="" src='https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d' className='picture'></img>
					<div className ="text">Give</div>
				</div>


				<div className='picture'>
					<img style={{width:"100%", height:"100%"}} alt="" src='https://source.unsplash.com/ITjiVXcwVng/1500x1500' ></img>
					<div className ="text">all</div>
				</div>


				<div className='picture'>
					<img style={{width:"100%", height:"100%"}} alt="" src='https://source.unsplash.com/3MNzGlQM7qs/1500x1500' ></img>
					<div className ="text">you can</div>
				</div>


			</div>
		</>
	)
}
export default App;
