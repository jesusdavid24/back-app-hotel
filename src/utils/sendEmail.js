const emailBooking = (user) => {
  const styles = {
    container: `
      background-color: #f5f5f5;
      border: 1px solid #e0e0e0;
    `,
    title: `
      font-size: 2rem;
      color: #325AD8 ;
    `
  };

  const email = {
    from: 'Hotel Gruop<hotelgruop@gmail.com>',
    to: user.email,
    subject: 'Welcome to Make it Real Camp',
    html: `
      <div style='${styles.container}'>
        <h1 style='${styles.title}'>Bienvenido a Make It Real</h1>
        <p>Gracias por unirte a nuestra App</p>
      </div>
    `,
    text: `Bienvenido a Make it Real Camp`,
  };

  return email;
};

module.exports = { emailBooking };
