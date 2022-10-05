import { AddAssetModal, AssetList } from "components/portfolio";
import { YourAssets, Container } from "./LandingPage.styles";

function LandingPage() {
  return (
    <Container>
      <YourAssets>Your Assets</YourAssets>
      <AddAssetModal />
      <AssetList />
    </Container>
  );
}

export default LandingPage;
