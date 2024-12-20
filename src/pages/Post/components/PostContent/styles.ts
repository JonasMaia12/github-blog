import styled from "styled-components"

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors["brand-blue"]};
    font-size: ${({ theme }) => theme.textSizes["title-l"]};
  }

  strong {
    color: ${({ theme }) => theme.colors["brand-blue"]};
    font-size: ${({ theme }) => theme.textSizes["title-s"]};
  }

  img {
    width: 100%;
  }

  ul {
    list-style: inherit;
    padding-inline: 2rem;
  }

  ol {
    list-style: decimal;
    padding-inline: 2rem;
  }

  code {
    display: inline-block;
    background-color: #4f6173;
    color: ${({ theme }) => theme.colors["base-text"]};
    padding: 0.2em 0.4em;
    border-radius: 4px;
  }

  blockquote {
    padding-inline: 2rem;
    font-style: italic;
  }

  blockquote::before {
    content: "“";
    font-size: ${({ theme }) => theme.textSizes["title-l"]};
    color: ${({ theme }) => theme.colors["brand-blue"]};
  }

  blockquote::after {
    content: "”";
    font-size: ${({ theme }) => theme.textSizes["title-l"]};
    color: ${({ theme }) => theme.colors["brand-blue"]};
  }
`
