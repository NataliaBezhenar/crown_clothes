import {
  DirectoryItemContainer,
  DirectoryItemBackgroundImage,
  DirectoryItemBody,
  DirectoryItemTitle,
  DirectoryItemContent,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <DirectoryItemBackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <DirectoryItemBody>
        <DirectoryItemTitle>{title}</DirectoryItemTitle>
        <DirectoryItemContent>Shop Now</DirectoryItemContent>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
