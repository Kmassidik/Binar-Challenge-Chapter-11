import { render } from "@testing-library/react";
import Register from "../src/pages/Register"
import Login from "../src/pages/Login"
import Home from "../src/pages/Home"
import Profile from "../src/pages/Profile"
import Games from "../src/pages/Games"
import Leaderboard from "../src/pages/Leaderboard"
import { describe,test } from "@jest/globals";


describe("test all pages render", () => { 
  test("renders Register pages", () => {
    render(<Register/>)
  })
  test("renders Login pages", () => {
    render(<Login/>)
  })
  test("renders Home pages", () => {
    render(<Home/>)
  })
  test("renders Profile pages", () => {
    render(<Profile/>)
  })
  test("renders Games pages", () => {
    render(<Games/>)
  })
  test("renders Leaderboard pages", () => {
    render(<Leaderboard/>)
  })
})