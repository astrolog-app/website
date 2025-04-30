import Page from "@/components/page/page";
import NavBar from "@/components/navBar";
import PageContent from "@/components/page/pageContent";
import DownloadSelection from "@/components/page/downloadSelection";
import Footer from "@/components/footer";

export default function Downloads() {
    return (
        <Page>
            <NavBar/>
            <PageContent>
                <DownloadSelection className='mt-80' />
            </PageContent>
            <Footer/>
        </Page>
    );
}