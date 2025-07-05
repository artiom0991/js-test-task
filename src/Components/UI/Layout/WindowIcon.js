import { Icon } from "components/ui/Layout/Icon";

export const WindowIcon = ({ icon, alt, className, ...props }) => {
  return (
    <div className={className} {...props}>
      <Icon
        src={chrome.runtime.getURL(`icons/${icon}`)}
        alt={alt || "icon"}
        size="24px"
      />
    </div>
  );
};
