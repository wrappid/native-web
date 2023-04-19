import React from "react";

import { useNavigate } from "react-router-dom";

import { urls } from "./../../../config/constants";
import { __IconTypes } from "../../surfaces/NativeIcon";
import { NativeMenu } from "../../inputs/NativeMenu";

export default function QuickAddPopOver(props) {
  const navigate = useNavigate();
  const { onClose } = props;
  const addMenu = [
    {
      icon: "personal_injury",
      id: "createPatient",
      label: "Add Patient",
      link: urls.CREATE_PATIENT,
    },
    {
      icon: {
        icon: "fa-file-prescription",
        type: __IconTypes.FONTAWESOME_V5_SOLID_ICON,
      },
      id: "createPrescription",
      label: "Create Prescription",
      link: urls.PRESCRIPTION,
    },
    {
      icon: {
        icon: "fa-calendar-check",
        type: __IconTypes.FONTAWESOME_V5_SOLID_ICON,
      },
      id: "scheduleAppointment",
      label: "Schedule Appointment",
      link: urls.APPOINTMENT_SCHEDULE,
    },
  ];

  const OnMenuClick = (item) => {
    navigate(item.link);
    onClose();
  };

  return (
    <NativeMenu
      menu={addMenu}
      miniDrawer={false}
      multiLevel={false}
      open={true}
      OnMenuClick={OnMenuClick}
    />
  );
}
