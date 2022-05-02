import React from 'react';

const styles = {
  footer: {
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    bottom: '0',
    position: 'absolute',
    height: '60px',
    width: '100%',
  },
};

function Footer() {
  return (
    <div className="bg-dark" style={styles.footer}>
      Copyright @ MiaUps
    </div>
  );
}

export default Footer;
