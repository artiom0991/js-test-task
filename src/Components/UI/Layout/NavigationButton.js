import styled from "styled-components";
import { Icon } from "components/ui/Layout/Icon";

const NavigationComponent = ({ icon, alt, className, ...props }) => {
  return (
    <div className={className} {...props}>
      <Icon src={chrome.runtime.getURL(`icons/${icon}`)} alt={alt || "icon"} />
    </div>
  );
};

export const NavigationButton = styled(NavigationComponent)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: rgb(226, 226, 226);
  border-radius: 8px;
  border-left: 1px solid rgb(190, 190, 190);
  background-image: "";
  cursor: pointer;
  transition: 0.3s all ease;

  &:hover {
    background-color: rgb(200, 200, 200);
    border-left-color: rgb(160, 160, 160);
    transition: 0.3s all ease;
  }
`;
