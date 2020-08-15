import React from 'react';

const Search = () => {
    return (
        <div className="container h-100 w-100 mt-2 rtl">
          <div className="d-flex justify-content-center w-100">
            <div className="searchbar">
              <input
                className="search_input "
                type="text"
                name=""
                placeholder="جستجو ..."
              />
              <a href="/" className="search_icon">
                <i className="fa fa-search"></i>
              </a>
            </div>
          </div>
        </div>
    );
}

export default Search;
