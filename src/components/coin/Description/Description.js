import { Container, DescriptionDiv } from "./Description.styles";

function Description(props) {
  const descriptionAndNewTabs = props.description.en
    .split("<a ")
    .reduce((acc, el) => (acc = acc + `<a target="_blank" ${el}`), "")
    .slice(19);
  return (
    <Container>
      <img
        src="https://i.ibb.co/vz0fLdP/Icon-awesome-layer-group.png"
        alt="stack icon"
      />
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
