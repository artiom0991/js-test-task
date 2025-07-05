import styled from "styled-components";

export const SelectLanguage = styled.select`
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background-color: white;
  color: #111827;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;

  &:hover {
    border-color: #cbd5e1;
  }
`;

export const OptionLanguage = styled.option`
  padding: 8px;
  font-size: 14px;
`;
