import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import Layout from "./components/Layout";
import Home from "./components/Home";
import Quotes from './components/appscomponents/Quotes';
import Trivia from "./components/appscomponents/Trivia";
import Planets from "./components/appscomponents/Planets";
import Thesaurus from "./components/appscomponents/Thesaurus";
import HistoricalEvents from "./components/appscomponents/HistoricalEvents";
import HistoricalFigures from "./components/appscomponents/HistoricalFigures";
import Riddles from "./components/appscomponents/Riddles";
import Geocoding from "./components/appscomponents/Geocoding";
import Facts from "./components/appscomponents/Facts";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/", 
          element: <Home />,
        },
        {
          path: "/quotes", 
          element: <Quotes />,
        },
        {
          path: "/facts", 
          element: <Facts />,
        },
        {
          path: "/riddles", 
          element: <Riddles />,
        },
        {
          path: "/trivia", 
          element: <Trivia />,
        },
        {
          path: "/historical-events", 
          element: <HistoricalEvents />,
        },
        {
          path: "/historical-figures", 
          element: <HistoricalFigures />,
        },
        {
          path: "/planets", 
          element: <Planets />,
        },
        {
          path: "/geocoding", 
          element: <Geocoding />,
        },
        {
          path: "/thesaurus", 
          element: <Thesaurus />,
        },
      ],
    },
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App
