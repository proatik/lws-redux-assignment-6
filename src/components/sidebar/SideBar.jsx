import { useDispatch, useSelector } from "react-redux";

import {
  changeSortParam,
  changeFilterParam,
} from "../../redux/features/filter/filterSlice";

const SideBar = () => {
  const dispstch = useDispatch();
  const { filterParam } = useSelector((state) => state.filter);

  const sortParamChangeHandler = (e) => {
    const param = e.target.value;
    dispstch(changeSortParam(param));
  };

  const filterParamChangeHandler = (e) => {
    const param = e.target.value;
    dispstch(changeFilterParam(param));
  };

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            name="sort"
            id="lws-sort"
            onChange={sortParamChangeHandler}
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
          >
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            <div>
              <input
                type="radio"
                value="all"
                name="filter"
                id="lws-all"
                className="radio"
                checked={filterParam === "all"}
                onChange={filterParamChangeHandler}
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                value="saved"
                name="filter"
                id="lws-saved"
                className="radio"
                checked={filterParam === "saved"}
                onChange={filterParamChangeHandler}
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
