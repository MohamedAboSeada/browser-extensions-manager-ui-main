import React from "react";
import { useExtentionContext } from "../../contexts/ExtenstionsContext";
import Button from "../Button/Button";

export default function Toolbar() {
  const { filterCode, setFilterCode } = useExtentionContext();
  return (
    <div className="flex flex-col gap-4 md:flex-row items-center justify-between">
      <h2 className="text-3xl font-700 text-neutral-900 dark:text-neutral-100">
        Extensions List
      </h2>
      <div className="flex items-cent er gap-2">
        <Button
          variant={"normal-btn"}
          size={"lg"}
          onClick={() => setFilterCode(0)}
          isActive={filterCode === 0}
        >
          All
        </Button>
        <Button
          variant={"normal-btn"}
          size={"lg"}
          onClick={() => setFilterCode(1)}
          isActive={filterCode === 1}
        >
          Active
        </Button>
        <Button
          variant={"normal-btn"}
          size={"lg"}
          onClick={() => setFilterCode(-1)}
          isActive={filterCode === -1}
        >
          InActive
        </Button>
      </div>
    </div>
  );
}
