import Page from "@/components/page/page";
import NavBar from "@/components/navBar";
import PageContent from "@/components/page/pageContent";
import Footer from "@/components/footer";
import DownloadSelection from "@/components/page/downloadSelection";

export default function Downloads() {
    return (
        <Page>
            <NavBar/>
            <PageContent>
                <DownloadSelection className="mt-80" />
            </PageContent>
            <Footer/>
        </Page>
    );
}
