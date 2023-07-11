import {
  Routes as NativeDomRoutes,
  Route as NativeDomRoute,
  Navigate as NativeDomNavigate,
  useNavigate as nativeUseNavigate,
  useLocation as nativeUseLocation,
  useParams as nativeUseParams,
  useSearchParams as nativeUseSearchParams,
} from "react-router-dom";

async function nativeOpenUrl(url){
  window.open(url)
}

export {
  NativeDomRoutes,
  NativeDomRoute,
  NativeDomNavigate,
  nativeUseNavigate,
  nativeUseLocation,
  nativeUseParams,
  nativeUseSearchParams,
  nativeOpenUrl
};
