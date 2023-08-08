import Link from "../../atoms/link/link";

import {
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
    <div className="hidden mt-10 md:flex items-center justify-center">
      {
        items.map((item, index) => (
        <div key={index} className="mx-5">
          <Link to={item.link}>
              <FilterImage src={item.image}  alt={item.text} className="my-0 mx-auto" />
            <span className="text-center">{item.text}</span>
          </Link>
        </div>
        ))
      }
    </div>
  );
};
