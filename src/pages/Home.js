import { FooterPage } from "../components/Footer";

export function HomePage() {
    return `
        <div className="bg-red-400">
            <h1> HOME PAGE </h1>
        </div>
   ${FooterPage()}`
}