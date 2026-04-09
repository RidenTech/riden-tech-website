import Hero from 'components/Hero'
import About from 'components/About';
import Services from 'components/Services';
import Blog from 'components/Blog';
import FAQ from 'components/FAQ';

export default function Home() {
    return (
        <>
            <Hero />

            <About />
            <Services />
            <Blog />
            <FAQ />
        </>
    );
}
