import "./App.css";
import { Routes, Route } from "react-router-dom";
import Frontend from "./Layout/Frontend";
import Backend from "./Layout/Backend";
import Home from "./pages/Home";
import NewsRoom from "./pages/NewsRoom";
import Blogs from "./pages/Blogs";
import Soloution1 from "./pages/Soloution1";
import Solution2 from "./pages/Solution2";
import Product from "./pages/Product";
import WhyRazorEdge from "./pages/WhyRazorEdge";
import Career from "./pages/Career";
import CaseStudies from "./pages/CaseStudies";
import SingleBlog from "./pages/SingleBlog";
import SingleNews from "./pages/SingleNews";
import SingleCaseStudy from "./pages/SingleCaseStudy";
import Client from "./pages/Client";
import Partners from "./pages/Partners";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import AdminBlogsPage from "./Admin/adminPages/AdminBlogsPage";
import AdminSingleBlogPage from "./Admin/adminPages/AdminSingleBlogPage";
import AdminAddBlogPage from "./Admin/adminPages/AdminAddBlogPage";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminSingleNewsPage from "./Admin/adminPages/AdminSingleNewsPage";
import AdminAddNewsPage from "./Admin/adminPages/AdminAddNewsPage";
import AdminCaseStudyPage from "./Admin/adminPages/AdminCaseStudyPage";
import AdminSingleCaseStudyPage from "./Admin/adminPages/AdminSingleCaseStudyPage";
import AdminAddCaseStudyPage from "./Admin/adminPages/AdminAddCaseStudyPage";
import AdminProductPage from "./Admin/adminPages/AdminProductPage";
import AdminNewsRoom from "./Admin/adminPages/AdminNewsRoom";
import ProductAddNewBullet from "./Admin/adminComponents/ProductPage/ProductAddNewBullet";
import ProductAddNewAccordian from "./Admin/adminComponents/ProductPage/ProductAddNewAccordian";
import SingleTestimonial from "./Admin/adminComponents/Testimonial/SingleTestimonial";
import AdminClientPage from "./Admin/adminPages/AdminClientPage";
import ClientSingleGalleryPage from "./Admin/adminComponents/Client/ClientSingleGalleryPage";
import ClientAddGalleryPage from "./Admin/adminComponents/Client/ClientAddGalleryPage";
import AdminPartnersPage from "./Admin/adminPages/AdminPartnersPage";
import SinglePartner from "./Admin/adminComponents/Partners/SinglePartner";
import AdminCareerPage from "./Admin/adminPages/AdminCareerPage";
import CareerSingleGalleryPage from "./Admin/adminComponents/Career/CareerSingleGalleryPage";
import CareerAddNewGallery from "./Admin/adminComponents/Career/CareerAddNewGallery";
import CareerSingleBenefits from "./Admin/adminComponents/Career/CareerSingleBenefits";
import AdminRazorEdgePage from "./Admin/adminPages/AdminRazorEdgePage";
import WRESingleAccordian from "./Admin/adminComponents/WhyRazorEdge/WRESingleAccordian";
import WREAddAccordian from "./Admin/adminComponents/WhyRazorEdge/WREAddAccordian";
import AdminPrivacyPolicy from "./Admin/adminPages/AdminPrivacyPolicy";
import AdminDisclaimer from "./Admin/adminPages/AdminDisclaimer";
import HomeBulletSingle from "./Admin/adminComponents/Home/HomeBulletSingle";
import HomeAddNewBullet from "./Admin/adminComponents/Home/HomeAddNewBullet";
import HomeSingleAccordian from "./Admin/adminComponents/Home/HomeSingleAccordian";
import HomeAddNewAccordian from "./Admin/adminComponents/Home/HomeAddNewAccordian";
import HomeSingleProductList from "./Admin/adminComponents/Home/HomeSingleProductList";
import DevelopmentSingle from "./Admin/adminComponents/Career/DevelopmentSingle";
import OperationSingle from "./Admin/adminComponents/Career/OperationSingle";
import ManagementSingle from "./Admin/adminComponents/Career/ManagementSingle";
import ManagementAdd from "./Admin/adminComponents/Career/ManagementAdd";
import DevelopmentAdd from "./Admin/adminComponents/Career/DevelopmentAdd";
import OperationAdd from "./Admin/adminComponents/Career/OperationAdd";
import AdminSolutionPage from "./Admin/adminPages/AdminSolutionPage";
import AdminSolutionPageAdd from "./Admin/adminPages/AdminSolutionPageAdd";
import AdminEditHeader from "./Admin/adminPages/AdminEditHeader";
import AdminSolution1Page from "./Admin/adminPages/AdminSolution1Page";
import AddTestimonial from "./Admin/adminComponents/Testimonial/AddTestimonial";
import AdminProductPageAdd from "./Admin/adminPages/AdminProductPageAdd";
import PageNotFound from "./pages/PageNotFound";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frontend />}>
        <Route index element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="/newsroom" element={<NewsRoom />} />
        <Route path="/newsroom/:id" element={<SingleNews />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:id" element={<SingleCaseStudy />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/why-razor-edge" element={<WhyRazorEdge />} />
        <Route path="/career" element={<Career />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/solution/:id" element={<Solution2 />} />
        <Route path="/solution1/:id" element={<Soloution1 />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Route>
      <Route path="/" element={<Backend />}>
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route
          path="admin-dashboard/update-header/:id"
          element={<AdminEditHeader />}
        />
        <Route
          path="admin-dashboard/bullet/:id"
          element={<HomeBulletSingle />}
        />
        <Route path="admin-dashboard/add" element={<HomeAddNewBullet />} />
        <Route
          path="admin-dashboard/accordian/:id"
          element={<HomeSingleAccordian />}
        />
        <Route
          path="admin-dashboard/accordian-add"
          element={<HomeAddNewAccordian />}
        />
        <Route
          path="admin-dashboard/productList/:id"
          element={<HomeSingleProductList />}
        />
        <Route path="admin-blogs" element={<AdminBlogsPage />} />
        <Route path="admin-news" element={<AdminNewsRoom />} />
        <Route path="admin-news/:id" element={<AdminSingleNewsPage />} />
        <Route path="admin-news-add" element={<AdminAddNewsPage />} />
        <Route path="admin-case-studies" element={<AdminCaseStudyPage />} />
        <Route
          path="admin-case-studies/:id"
          element={<AdminSingleCaseStudyPage />}
        />
        <Route
          path="admin-case-studies-add"
          element={<AdminAddCaseStudyPage />}
        />
        <Route path="admin-product/:id" element={<AdminProductPage />} />
        <Route path="admin-product-add" element={<AdminProductPageAdd />} />
        <Route
          path="admin-product/bullet-add/:id"
          element={<ProductAddNewBullet />}
        />
        <Route
          path="admin-product/accordian-add/:id"
          element={<ProductAddNewAccordian />}
        />
        <Route path="admin-testimonial/:id" element={<SingleTestimonial />} />
        <Route path="admin-testimonial-add" element={<AddTestimonial />} />
        <Route path="admin-client" element={<AdminClientPage />} />
        <Route path="admin-client/:id" element={<ClientSingleGalleryPage />} />
        <Route path="admin-client-add" element={<ClientAddGalleryPage />} />
        <Route path="admin-partners" element={<AdminPartnersPage />} />
        <Route path="admin-partners/:id" element={<SinglePartner />} />
        <Route path="admin-career" element={<AdminCareerPage />} />
        <Route
          path="admin-career/development/:id"
          element={<DevelopmentSingle />}
        />
        <Route
          path="admin-career/operation/:id"
          element={<OperationSingle />}
        />
        <Route
          path="admin-career/management/:id"
          element={<ManagementSingle />}
        />
        <Route path="admin-career/management/add" element={<ManagementAdd />} />
        <Route
          path="admin-career/development/add"
          element={<DevelopmentAdd />}
        />
        <Route path="admin-career/operation/add" element={<OperationAdd />} />
        <Route path="admin-career/:id" element={<CareerSingleGalleryPage />} />
        <Route path="admin-career-add" element={<CareerAddNewGallery />} />
        <Route path="admin-benefits/:id" element={<CareerSingleBenefits />} />
        <Route path="admin-why-razor-edge" element={<AdminRazorEdgePage />} />
        <Route
          path="admin-why-razor-edge/accordian/:id"
          element={<WRESingleAccordian />}
        />
        <Route
          path="admin-why-razor-edge/accordian-add"
          element={<WREAddAccordian />}
        />
        <Route path="admin-privacy-policy" element={<AdminPrivacyPolicy />} />
        <Route path="admin-disclaimer" element={<AdminDisclaimer />} />
        <Route path="admin-solution/:id" element={<AdminSolutionPage />} />
        <Route path="admin-solution-add" element={<AdminSolutionPageAdd />} />
        <Route path="admin-solution1/:id" element={<AdminSolution1Page />} />
        <Route path="admin-blogs/:id" element={<AdminSingleBlogPage />} />
        <Route path="admin-blog-add" element={<AdminAddBlogPage />} />
        <Route path="/create-account" element={<Signup />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="case-studies/:id" element={<SingleCaseStudy />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="clients" element={<Client />} />
        <Route path="why-razor-edge" element={<WhyRazorEdge />} />
        <Route path="career" element={<Career />} />
        <Route path="partners" element={<Partners />} />
        <Route path="solution/:id" element={<Solution2 />} />
        <Route path="solution1/:id" element={<Soloution1 />} />
      </Route>
      <Route path="/login" element={<Signin />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
