import './App.css';
import DashLayout from './Components/DashLayout';
import { Route, Routes } from 'react-router-dom';
import DashHome from './Components/DashHome';
import DashStudent from './Components/DashStudent';
import DashCourse from './Components/DashCourse';
import DashFaculty from './Components/DashFaculty';
import DashAttendance from './Components/DashAttendance';
import DashFees from './Components/DashFees';
import DashSetting from './Components/DashSetting';

//color used - bg-amber-300 #FCD34D , bg-indigo-400 #818CF8


function App() {

    return (
      <>
          <Routes>
              <Route path = "/" element = {<DashLayout/>} >
                  <Route index  element = {<DashHome/>} />
                  <Route path = "/student" element = {<DashStudent/>} />
                  <Route path = "/course" element = {<DashCourse/>} />
                  <Route path = "/faculty" element = {<DashFaculty/>} />
                  <Route path = "/attendance" element = {<DashAttendance/>} />
                  <Route path = "/fees" element = {<DashFees/>} />
                  <Route path = "/setting" element = {<DashSetting/>} />
              </Route>
          </Routes>
      </>
  )
}
export default App;
