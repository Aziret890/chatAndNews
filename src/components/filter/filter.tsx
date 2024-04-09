import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import "../filter/filter.scss";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "все новости",
  },
  {
    key: "2",
    label: "по рейтингу",
  },
  {
    key: "3",
    label: "новые",
  },
];

function Filter() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function HandleDropdown(drop: boolean) {
    setIsDropdownOpen(drop);
  }
  return (
    <>
      <Dropdown
        menu={{ items }}
        placement="bottom"
        arrow
        visible={isDropdownOpen}
        onVisibleChange={HandleDropdown}
      >
        <Button className="filter__btn">
          Фильтрация
          {isDropdownOpen ? (
            <IoMdArrowDropup size={28} />
          ) : (
            <MdArrowDropDown size={28} />
          )}
        </Button>
      </Dropdown>
    </>
  );
}

export default Filter;
