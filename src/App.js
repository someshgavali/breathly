import "./App.css";
import BottomNavbar from "./components/Home/BottomNavbar";
import MainHomeComp from "./components/Home/MainHomeComp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sleep from "./components/Sleep/Sleep";
import Header from "./components/Home/Header";
import MyFavSleep from "./components/Sleep/MyFavSleep";
import StoriesSleep from "./components/Sleep/StoriesSleep";
import MusicSleep from "./components/Sleep/MusicSleep";
import Meditation from "./components/Meditation/Meditation";
import MeditationNature from "./components/Meditation/MeditationNature";
import MeditationMusical from "./components/Meditation/MeditationMusical";
import MeditationCategory from "./components/Meditation/MeditationCategory";
import Relax from "./components/Relax/Relax";
import RelaxFavourite from "./components/Relax/RelaxFavourite";
import RelaxBeginners from "./components/Relax/RelaxBeginners";
import RelaxSelf from "./components/Relax/RelaxSelf";
import Setting from "./components/Setting/Setting";
import Account from "./components/Account/Account";
import Songs from "./components/Songs/Songs";
import SleepSongs from "./components/Songs/SleepSongs";
import Subscriptions from "./components/Subscriptions/Subsciptions";
import Firstpage from "./components/Firstpage/Firstpage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Melodies from "./components/Melodies/Melodies";
import Melodiesnature from "./components/Melodies/Melodiesnature";
import Melodiesmusical from "./components/Melodies/Melodiesmusical";
import Melodiescategories from "./components/Melodies/Melodiescategories";
import { useLocation } from "react-router-dom";
import Community from "./components/Subscriptions/Community";
import Pro from "./components/Subscriptions/Pro";
import Premium from "./components/Subscriptions/Premium";

function App() {
  const location = useLocation();
  const isFirstPge = location.pathname === "/firstpage";
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";
  return (
    <div>
      {!isFirstPge && !isSignupPage && !isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<MainHomeComp />} />
        <Route path="/sleep" element={<Sleep />} />
        <Route path="/sleep/myfav" element={<MyFavSleep />} />
        <Route path="/sleep/stories" element={<StoriesSleep />} />
        <Route path="/sleep/music" element={<MusicSleep />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/meditation/nature" element={<MeditationNature />} />
        <Route path="/meditation/musical" element={<MeditationMusical />} />
        <Route path="/meditation/category" element={<MeditationCategory />} />
        <Route path="/relax" element={<Relax />} />
        <Route path="/relax/favourite" element={<RelaxFavourite />} />
        <Route path="/relax/beginners" element={<RelaxBeginners />} />
        <Route path="/relax/self" element={<RelaxSelf />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/account" element={<Account />} />
        <Route path="/songs/:id" element={<Songs />} />
        <Route path="/sleepsongs/:id" element={<SleepSongs />} />
        <Route path="/melodies" element={<Melodies />} />
        <Route path="/nature" element={<Melodiesnature />} />
        <Route path="/musical" element={<Melodiesmusical />} />
        <Route path="/categories" element={<Melodiescategories />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/subscriptions/cummunity" element={<Community />} />
        <Route path="/subscriptions/pro" element={<Pro />} />
        <Route path="/subscriptions/premium" element={<Premium />} />
        <Route path="/firstpage" element={<Firstpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {!isFirstPge && !isSignupPage && !isLoginPage && <BottomNavbar />}
    </div>
  );
}

export default App;
