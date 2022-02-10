const settings = {
  graphql: {
    uri: "http://localhost:5001/api/graphql",
  },
  meta: {
    rootUrl: "http://localhost:5000",
    title: "Merican Limited Nairobi Kenya",
    description: "Commercial Kitchen Equipment or Appliance in Kenya",
    social: {
      graphic:
        "https://cheatcode-assets.s3.amazonaws.com/default-social-graphic.png",
      twitter: "@MericanLimited",
    },
  },
  routes: {
    authenticated: {
      pathAfterFailure: "/login",
    },
    public: {
      pathAfterFailure: "/documents",
    },
  },
};

export default settings;
