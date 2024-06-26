import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import CashCardListContainer from "./components/CashCardList/CashCardListContainer";
import CashCardDetailContainer from "./components/CashCardDetail/CashCardDetailContainer";
import CashCardFormContainer from "./components/CashCardForm/CashCardFormContainer";
import Login from "./components/common/Login";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/home/Home";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/cashcards"
            element={
              <PrivateRoute>
                <CashCardListContainer />
              </PrivateRoute>
            }
          />
          <Route
            path="/cashcards/new"
            element={
              <PrivateRoute>
                <CashCardFormContainer />
              </PrivateRoute>
            }
          />
          <Route
            path="/cashcards/:id"
            element={
              <PrivateRoute>
                <CashCardDetailContainer />
              </PrivateRoute>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <CashCardListContainer />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
