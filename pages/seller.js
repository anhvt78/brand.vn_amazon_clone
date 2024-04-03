import React from "react";
// import { ColorModeContext, useMode } from "@/theme";
import { LeftBar, Topbar } from "@/scenes/global/index";
import { useState } from "react";
// import Topbar from "@/scenes/global/Topbar";

// import { ColorModeContext, useMode } from "@/theme";
import { CssBaseline } from "@mui/material";

import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import Team from "@/scenes/team";
import FAQ from "@/scenes/faq";
import Invoices from "@/scenes/invoices";
import Contacts from "@/scenes/contacts";
import Form from "@/scenes/form";
import Calendar from "@/scenes/calendar";
// import Line from "@/scenes/line";
const seller = () => {
  // console.log("theme", theme);

  const Items = [{title: "Sản phẩm", items: 
                                  [{title: "Thêm sản phẩm mới", to: "/team", icon: <PeopleOutlinedIcon />},
                                  {title: "Danh sách sản phẩm", to: "/team", icon: <PeopleOutlinedIcon />},
                                  // {title: "Manage Team", to: "/team", icon: <PeopleOutlinedIcon />}
                                  ]
                                
                  },
                  {title: "Quản lý đơn hàng", items: 
                                  [{title: "Danh sách đơn hàng", to: "/team", icon: <PeopleOutlinedIcon />},
                                  {title: "Tình trạng đơn hàng", to: "/team", icon: <PeopleOutlinedIcon />},
                                  // {title: "Manage Team", to: "/team", icon: <PeopleOutlinedIcon />}
                                  ]
                                
                  },
                  {title: "Đơn hàng ngoại lệ",  items: 
                                  [{title: "Danh sách đơn hàng ngoại lệ", to: "/team", icon: <PeopleOutlinedIcon />},
                                  {title: "Tình trạng xử lý đơn ngoại lệ", to: "/team", icon: <PeopleOutlinedIcon />},
                                  {title: "Manage Team", to: "/team", icon: <PeopleOutlinedIcon />}
                                  ]
                                
                  },
                  {title: "Quản lý bán hàng",  items: 
                        [{title: "Tình trạng kinh doanh", to: "/team", icon: <PeopleOutlinedIcon />},
                        {title: "Danh sách nhãn hàng", to: "/team", icon: <PeopleOutlinedIcon />},
                        {title: "Đăng ký đại lý", to: "/team", icon: <PeopleOutlinedIcon />},
                        {title: "Kiểm soát chất lượng dịch vụ", to: "/team", icon: <PeopleOutlinedIcon />},
                        ]
                
                  },
                ]

  const [isSidebar, setIsSidebar] = useState(true);

  return (
    // <ColorModeContext.Provider value={colorMode}>
    //   <ThemeProvider theme={theme}>
    <div>
      <Topbar setIsSidebar={setIsSidebar} />
    <div className="w-full flex flex-row">
        {/* <LeftBar isSidebar={isSidebar} /> */}
        <LeftBar title = "Người bán" items ={Items}/>
        <main className="content">
          
          <Team />
          <FAQ />
          <Invoices />
          <Contacts />
          <Form />
          <Calendar />
          {/* <Line /> */}
          {/* <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes> */}
        </main>
        
      </div>
    </div>

    //   </ThemeProvider>
    // </ColorModeContext.Provider>
  );
};

export default seller;
