function Response(props) {
  return (
    <>
      <section>
        <h3>Response</h3>
        <button
          onClick={() => {
            navigator.clipboard.writeText(
              JSON.stringify(props.jsonResponse, null, 2)
            );
          }}
        >
          Copy JSON
        </button>
        <pre>{JSON.stringify(props.jsonResponse, null, 2)}</pre>
      </section>
    </>
  );
}

export default Response;
