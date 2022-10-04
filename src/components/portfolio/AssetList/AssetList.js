import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolioData } from "store/portfolioSlice";

function AssetList() {
  const dispatch = useDispatch();
  const { savedCoins } = useSelector((state) => state.portfolio);
  useEffect(() => {
    dispatch(getPortfolioData());
    // eslint-disable-next-line
  }, []);

  console.log(savedCoins);
  return (
    <div>
      <div>Asset List</div>
    </div>
  );
}

export default AssetList;
