import About from "@/components/pagesDetails/About";
import Categories from "@/components/productsDetails/Categories";
import Main from "@/components/pagesDetails/Main";
import Services from "@/components/pagesDetails/Services";

export default function page() {
    return <>
        <Main />
        <Categories />
        <About />
        <Services />
    </>
}
