import React from "react";
// import { ColorModeContext, useMode } from "@/theme";
import { LeftBar, Topbar } from "@/scenes/global/index";
import { useState } from "react";
// import Topbar from "@/scenes/global/Topbar";

// import { ColorModeContext, useMode } from "@/theme";
import { CssBaseline } from "@mui/material";

const seller = () => {
  // console.log("theme", theme);

  const [isSidebar, setIsSidebar] = useState(true);

  return (
    // <ColorModeContext.Provider value={colorMode}>
    //   <ThemeProvider theme={theme}>
    <div>
      <div>
        {/* <LeftBar isSidebar={isSidebar} /> */}
        <LeftBar />
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
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
