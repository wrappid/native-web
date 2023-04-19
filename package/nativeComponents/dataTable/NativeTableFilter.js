import * as React from "react";
import NativeBox from "../layouts/NativeBox";
import NativeTooltip from "../dataDisplay/NativeTooltip";
import NativeIconButton from "../inputs/NativeIconButton";
import NativeIcon from "../dataDisplay/NativeIcon";

export default function NativeTableFilter(props) {
  const { head, filtering, ApplyFilter } = props;
  const [searchFlag, setSearch] = React.useState(false);

  const SetSearch = () => {
    setSearch(!searchFlag);
  };

  return head.id === "action" ? (
    <NativeBox component="div">
      {filtering && (
        <NativeTooltip title="Filter clear">
          <NativeIconButton onClick={props.HandleClearFilter}>
            <NativeIcon>cancel</NativeIcon>
          </NativeIconButton>
        </NativeTooltip>
      )}
      {
        <NativeTooltip title="Search">
          <NativeIconButton onClick={filtering ? ApplyFilter : SetSearch}>
            <NativeIcon>search</NativeIcon>
          </NativeIconButton>
        </NativeTooltip>
      }
      {searchFlag && !filtering && (
        <input
          style={{
            borderWidth: 0,
            borderBottomWidth: 1,
          }}
          value={props.query}
          onChange={props.HandleQueryChange}
        />
      )}
    </NativeBox>
  ) : (
    <NativeBox component="div">
      {head.isFilter !== false && head.type === "dropdown" && head.dropdowns ? (
        <select
          value={
            props.filters && props.filters[head.id]
              ? props.filters[head.id].filter
              : ""
          }
          onChange={(e) => {
            props.HandleFilterChange(e, head);
          }}
          style={{ width: "85%" }}
          className="browser-default"
        >
          <option value="">Select filter</option>
          {head.dropdowns.map((d) => (
            <option value={head.dropdownValue(d)}>
              {head.dropdownLabel(d)}
            </option>
          ))}
        </select>
      ) : head.isFilter !== false && head.type === "text" ? (
        <input
          value={
            props.filters && props.filters[head.id]
              ? props.filters[head.id].filter
              : ""
          }
          onChange={(e) => {
            props.HandleFilterChange(e, head);
          }}
          style={{ width: "85%" }}
          placeholder="Search Text"
        />
      ) : head.isFilter !== false && head.type === "date" ? (
        <input
          type="date"
          value={
            props.filters && props.filters[head.id]
              ? props.filters[head.id].filter
              : ""
          }
          onChange={(e) => {
            props.HandleFilterChange(e, head);
          }}
          style={{ width: "85%" }}
          placeholder="Pick date"
        />
      ) : head.isFilter !== false && head.type === "datetime" ? (
        <input
          type="date"
          value={
            props.filters && props.filters[head.id]
              ? props.filters[head.id].filter
              : ""
          }
          onChange={(e) => {
            props.HandleFilterChange(e, head);
          }}
          style={{ width: "85%" }}
          placeholder="Pick date"
        />
      ) : (
        // head.isFilter&&head.type === "number"?
        //   <input
        //   value={props.filters&&props.filters[head.id]?props.filters[head.id].filter:""}
        //   onChange={(e)=>{props.HandleFilterChange(e, head)}}
        //   style={{width: '50%'}} placeholder="Number"/>
        // :
        <p></p>
      )}
    </NativeBox>
  );
}

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };
