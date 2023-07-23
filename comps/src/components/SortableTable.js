import Table from "./Table";
import React from "react";
import {GoArrowDown, GoArrowUp} from "react-icons/go";
import useSort from "../hooks/useSort";

export default function SortableTable(props) {

    const { config, data } = props;

    const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column?.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => <th className={"cursor-pointer hover:bg-gray-100"} onClick={() => setSortColumn(column.label)}>
                <div className={"flex items-center"}>
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
        }
    });

    return (
        <div>
            <Table {...props} config={updatedConfig} data={sortedData} />
        </div>
    )
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return (
            <div>
                <GoArrowUp />
                <GoArrowDown />
            </div>
        )
    }

    if (sortOrder === null) {
        return (
            <div>
                <GoArrowUp />
                <GoArrowDown />
            </div>
        )
    } else if (sortOrder === "asc") {
        return (
            <div>
                <GoArrowDown />
            </div>
        )
    } else if (sortOrder === "desc") {
        return (
            <div>
                <GoArrowUp />
            </div>
        )
    }

}