function IndexPage({ locale, domain }) {
  return (
    <div>
      The domain is <strong>{domain}</strong> and the locale is{' '}
      <strong>{locale}</strong>
    </div>
  );
}

export function getStaticProps({ locale, params }) {
  return {
    props: {
      locale,
      domain: params.domain,
    },
  };
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { locale: 'en-gb', params: { domain: 'nextjs.org' } },
      { locale: 'en-ca', params: { domain: 'nextjs.org' } },
    ],
  };
}

export default IndexPage;
