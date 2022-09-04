import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "inherit" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/">{t("Home")}</Link>
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/about">{t("About")}</Link>
            </Typography>
          </Box>
          <Button onClick={() => changeLanguageHandler("fi")} color="inherit">
            FI
          </Button>
          <Button onClick={() => changeLanguageHandler("en")} color="inherit">
            EN
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
