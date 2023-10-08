export const GtmBodyScript = () => {
  return (
    <noscript id="google-tag-manager-body">
      <iframe
        title="gtml"
        src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
};
