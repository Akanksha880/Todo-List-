import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 MyWebsite. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#20232a',
    color: '#ffffff',
    textAlign: 'center',
    padding: '20px',
  },
};

export default Footer;
