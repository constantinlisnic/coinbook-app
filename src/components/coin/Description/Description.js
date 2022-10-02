import { Container, DescriptionDiv, StackIcon } from "./Description.styles";

function Description(props) {
  const descriptionAndNewTabs = props.description.en
    .split("<a ")
    .reduce((acc, el) => (acc = acc + `<a target="_blank" ${el}`), "")
    .slice(19);
  return (
    <Container>
      <StackIcon />
      {descriptionAndNewTabs ? (
        <DescriptionDiv
          dangerouslySetInnerHTML={{ __html: descriptionAndNewTabs }}
        ></DescriptionDiv>
      ) : (
        <div>No Description</div>
      )}
    </Container>
  );
}

export default Description;
