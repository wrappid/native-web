import * as React from "react";
import { useNavigate } from "react-router-dom";
import NativeResponsiveButton from "../inputs/custom/NativeResponsiveButton";

export default function NativeTableAction(props) {
  const navigation = useNavigate();
  const { tableUUID, actions = [], rowData = {} } = props;
  return (
    <>
      {actions &&
        Array.isArray(actions) &&
        actions.length > 0 &&
        actions.map((action) =>
          action.hide && action.hide(rowData) ? null : (
            <NativeResponsiveButton
              key={`${tableUUID}-${action?.id}`}
              label={action?.label}
              icon={action?.icon}
              disabled={action.disabled}
              OnClick={() => {
                if (action?.action) action?.action(rowData); // TODO: support local action
                if (action.route) {
                  navigation(action.route, rowData);
                }
              }}
            />
          )
        )}
    </>
  );
}
