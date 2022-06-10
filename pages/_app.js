import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>
        <p>Copyright 2022 - Joshua Saps</p>
      </footer>
    </div>
  );
}

export default MyApp;
