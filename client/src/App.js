import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error, Landing, Register, ProtectedRoute } from './pages';
import {
	AllJobs,
	Profile,
	SharedLayout,
	Stats,
	AddJob,
} from './pages/dashboard';
// css
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<ProtectedRoute>
								<SharedLayout />
							</ProtectedRoute>
						}>
						<Route index element={<Stats />} />
						<Route path='profile' element={<Profile />} />
						<Route path='all-jobs' element={<AllJobs />} />
						<Route path='add-job' element={<AddJob />} />
					</Route>
					<Route path='/register' element={<Register />} />
					<Route path='/landing' element={<Landing />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</BrowserRouter>
			<ToastContainer />
		</>
	);
}

export default App;
