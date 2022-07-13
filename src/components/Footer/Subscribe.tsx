const Subscribe = () => {
  return (
    <div className="mailing">
      <h2>Get On The List</h2>
      <p>
        We'll send you updates on our latest E-NFT releases and more, so you can
        keep up with all things Emmersive. Need to take off? You can unsubscribe
        at any time.
      </p>
      <form action="/register/">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <input type="hidden" name="marketing_agree" value="1" />
        <input className="btn-blue-dark" type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default Subscribe;
