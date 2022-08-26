import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const PageOne = () => (
  <Link to='/page2'>
    <div>This is page one</div>
  </Link>
);

const PageTwo = () => <Link to='/'>This is page two</Link>;
export default function WithRouteExample() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageOne />} />
        <Route path='/page2' element={<PageTwo />} />
      </Routes>
    </BrowserRouter>
  );
}
