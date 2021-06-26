import { ReactNode } from "react";
import cx from "classnames";
import { QuestionStyled, QuestionUserInfoStyled } from "./styled";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <QuestionStyled
      className={cx({
        answered: isAnswered,
        highlighted: isHighlighted && !isAnswered,
      })}
    >
      <p>{content}</p>
      <footer>
        <QuestionUserInfoStyled>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </QuestionUserInfoStyled>
        <div>{children}</div>
      </footer>
    </QuestionStyled>
  );
}
