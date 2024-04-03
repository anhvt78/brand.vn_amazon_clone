import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";
// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";



import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const _menuItem = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      {/* <Typography>{title}</Typography>
      <Link to={to} /> */}
      {title}
    </MenuItem>
  );
};

const _subMenu = ({title, items}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <div>
      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px" }}
        >
        {title}
      </Typography>
        {
                  
          items.map((item) => { 
                      // console.log(item.to);
                      return (
                      <_menuItem
                      key={item.title}
                      title={item.title}
                      to={item.to}
                      icon={item.icon}
                      selected={selected}
                      setSelected={setSelected}
                    />)
                    })
                }
    </div>
    
  );

}

const LeftBar = ({title, items}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (

    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >



<Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" color={colors.grey[100]}>
                  {title}
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
                                    
{items &&
           <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {
              items.map((el) => {
                return (
                  <_subMenu key={el.title} title={el.title} items={el.items}/>
                )
              })             
            }           
          </Box>
          }
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default LeftBar;
