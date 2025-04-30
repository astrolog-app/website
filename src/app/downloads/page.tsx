import Page from "@/components/page/page";
import NavBar from "@/components/navBar";
import PageContent from "@/components/page/pageContent";
import Footer from "@/components/footer";
import DownloadSelection from "@/components/page/downloadSelection";
import PageTitle from "@/components/page/pageTitle";

export default function Downloads() {
    return (
        <Page>
            <NavBar/>
            <PageContent>
                <PageTitle>Downloads</PageTitle>
                <DownloadSelection className='mt-12' />
            </PageContent>
            <Footer/>
        </Page>
    );
}
