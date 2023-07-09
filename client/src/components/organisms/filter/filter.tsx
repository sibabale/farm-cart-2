import Link from "../../atoms/link/link";

import {
  FilterItem,
  FilterItems,
  FilterImage
} from "./filter.styles";


type ItemProps   = {
  items: Array<{
    link: string
    text: string
    image: string
  }>
}

export const Filter = ({ items }: ItemProps) => {

  return (
    <FilterItems>
      {
        items.map((item, index) => (
        <FilterItem key={index} >
          <Link to={item.link}>
              <FilterImage src={item.image}  alt={item.text} />
            <span>{item.text}</span>
          </Link>
        </FilterItem>
        ))
      }
    </FilterItems>
  );
};
