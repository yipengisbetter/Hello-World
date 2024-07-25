function Contact() {
  return (
    <div className="Contact">
      Contact id: { window.location.pathname.split('/').pop() }
    </div>
  );
}

export default Contact;
