function IndexPage({ locale }) {
  return (
    <div>
      This is `index.js` at work for the locale: <strong>{locale}</strong>.
    </div>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      locale,
    },
  };
}

export default IndexPage;
