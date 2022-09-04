import React from "react";
import { useTranslation } from "react-i18next";
export default function MyContainer() {
  const { t } = useTranslation();
  return <div>{t("This is the front page")}</div>;
}
