import { AddAssetModal, AssetList } from "components/portfolio";
import { YourAssets } from "./LandingPage.styles";

function LandingPage() {
  return (
    <>
      <YourAssets>Your Assets</YourAssets>
      <AddAssetModal />
      <AssetList />
    </>
  );
}

export default LandingPage;
