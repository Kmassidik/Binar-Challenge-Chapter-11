import { render } from "@testing-library/react";
import { GameDetails, Home, Games, Leaderboard, Profile} from "./pages"
import { describe,test } from "@jest/globals";
import { ModalSignup, ModalSignin } from "./components";


describe("test all pages render", () => { 
  test("renders Register pages", () => {
    render(<ModalSignup/>)
  })
  test("renders Login pages", () => {
    render(<ModalSignin/>)
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
  test("renders Games pages", () => {
    render(<GameDetails/>)
  })
  test("renders Leaderboard pages", () => {
    render(<Leaderboard/>)
  })
})