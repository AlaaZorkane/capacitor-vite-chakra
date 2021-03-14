import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.appname.app",
  appName: "appname",
  webDir: "dist",
  bundledWebRuntime: false,
  /* Uncomment this to have fast-refresh in the mobile app */
  // server: {
  //   url: "http://192.168.1.64:3000",
  //   cleartext: true,
  // },
};

export default config;
