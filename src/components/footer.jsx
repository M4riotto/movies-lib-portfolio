import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.footerText}>Desenvolvido por <Link to='https://github.com/M4riotto'>Vitor Moreira</Link> </p>
    </footer>
  );
}

export default Footer;

const styles = {
    footer:{
        backgroundColor: '#444',
        color: '#fff',
        padding:'20px',
        textAlign: 'center'
    },
    footerText:{
        fontSize: '14px'
    }
}