import { useState } from 'react';
import { SortingOptions } from '../../const';

type SortingProps = {
  handleSorting: (sortingOption: string) => void;
}

export default function Sorting({handleSorting}: SortingProps): JSX .Element {
  const [isOpened, setIsOpened] = useState(false);
  const [activeOption, setActiveOption] = useState<string>(SortingOptions.POPULAR);

  const toggleListVisibility = () => {
    setIsOpened(!isOpened);
  };

  const updateSorting = (option: string) => {
    setActiveOption(option);
    handleSorting(option);
    toggleListVisibility();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleListVisibility}>
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isOpened && 'places__options--opened'}`}
      >
        {Object.values(SortingOptions).map((option: string) =>
          (
            <li
              tabIndex={0}
              key={option}
              className={`places__option ${option === activeOption && 'places__option--active'}`}
              onClick={() => updateSorting(option)}
            >
              {option}
            </li>
          )
        )}
      </ul>
    </form>
  );
}
