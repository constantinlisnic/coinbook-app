import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDays } from "date-fns";
import { useGetSearchResultsQuery } from "store/apiSlice";
import { addCoin } from "store/portfolioSlice";
import {
  AddAssetButton,
  ButtonWrapper,
  ModalWrapper,
  Header,
  CloseIcon,
  ModalTitle,
  Body,
  Input,
  CoinWrapper,
  ImgWrapper,
  InputsWrapper,
  Footer,
  CoinNameWrapper,
  SaveButton,
  ResultItemContainer,
  ResultItemImg,
  ResultsWrapper,
  NewCoinIMG,
  DateInput,
} from "./AddAssetModal.styles";

function SearchResultItem({ coinName, imgURL, symbol, id, ...props }) {
  const handleClick = () =>
    props.handleClick({
      coinName,
      id,
      symbol,
      imgURL,
    });
  return (
    <ResultItemContainer onClick={handleClick}>
      <ResultItemImg src={imgURL} alt={symbol} />
      <div>
        {coinName} ({symbol})
      </div>
    </ResultItemContainer>
  );
}

function AddAssetModal() {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [newCoin, setNewCoin] = useState({});
  const [modalIsExpanded, setModalIsExpanded] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const savedCoins = useSelector((state) => state.portfolio.savedCoins);
  const { data: searchResults } = useGetSearchResultsQuery(
    inputValue || "random-string-to-avoid-404"
  );

  const handleClick = () => setModalIsExpanded(!modalIsExpanded);
  const handleChange = (e) => {
    setShowSearchResults(true);
    setInputValue(e.target.value);
  };
  const handleSelectCoin = (coin) => {
    setNewCoin(coin);
    setShowSearchResults(false);
    setInputValue(coin.coinName);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setModalIsExpanded(false);
    dispatch(addCoin(newCoin.id));
    setNewCoin({});
    setInputValue("");
  };

  console.log(savedCoins);
  return (
    <>
      <ButtonWrapper>
        <AddAssetButton onClick={handleClick}>Add Asset</AddAssetButton>
      </ButtonWrapper>
      {modalIsExpanded && (
        <ModalWrapper>
          <Header>
            <ModalTitle>Add Asset</ModalTitle>
            <CloseIcon onClick={handleClick} />
          </Header>
          <form onSubmit={handleSubmit}>
            <Body>
              <CoinWrapper>
                <ImgWrapper>
                  {Object.keys(newCoin).length !== 0 && (
                    <NewCoinIMG
                      src={newCoin.imgURL}
                      alt={`${newCoin.id} icon`}
                    />
                  )}
                </ImgWrapper>
                <CoinNameWrapper>
                  {Object.keys(newCoin).length !== 0 && (
                    <>
                      {newCoin.coinName} ({newCoin.symbol.toUpperCase()})
                    </>
                  )}
                </CoinNameWrapper>
              </CoinWrapper>
              <InputsWrapper>
                <Input
                  type="text"
                  placeholder="Coin"
                  value={inputValue}
                  onChange={handleChange}
                  required
                />
                <ResultsWrapper>
                  {searchResults &&
                    showSearchResults &&
                    searchResults.map((result) => {
                      return (
                        <SearchResultItem
                          coinName={result.name}
                          imgURL={result.large}
                          symbol={result.symbol}
                          key={result.id}
                          id={result.id}
                          handleClick={handleSelectCoin}
                        />
                      );
                    })}
                </ResultsWrapper>
                <Input type="number" placeholder="Purchase Amount" required />
                <DateInput
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  maxDate={addDays(new Date(), 0)}
                />
              </InputsWrapper>
            </Body>
            <Footer>
              <SaveButton>Save</SaveButton>
            </Footer>
          </form>
        </ModalWrapper>
      )}
    </>
  );
}

export default AddAssetModal;
