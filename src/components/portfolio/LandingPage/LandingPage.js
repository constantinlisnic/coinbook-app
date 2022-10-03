import { AddAssetModal } from "components/portfolio";
import { YourAssets } from "./LandingPage.styles";

function LandingPage() {
  return (
    <>
      <YourAssets>Your Assets</YourAssets>
      <AddAssetModal />
    </>
  );
}

export default LandingPage;
