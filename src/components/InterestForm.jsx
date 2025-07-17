import './InterestForm.css';

const InterestForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (data.firstName) data.firstName = data.firstName.trim();
    if (data.lastName) data.lastName = data.lastName.trim();
    if (data.email) data.email = data.email.trim();
    console.table(data);
    alert('Thanks for your interest! Check the console for the form data.');
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Join the Waiting List</h2>
        <p>Be the first to know when the Spidr Air Fryer drops.</p>
      </div>

      <form onSubmit={handleSubmit} className="spidr-form" noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name<span className='required-asterisk'>*</span></label>
            <input type="text" id="firstName" name="firstName" placeholder="Ian" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name<span className='required-asterisk'>*</span></label>
            <input type="text" id="lastName" name="lastName" placeholder="Fowler" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number<span className='required-asterisk'>*</span></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(630) 383-2070"
            maxLength="14"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address<span className='required-asterisk'>*</span></label>
          <input type="email" id="email" name="email" placeholder="you@example.com" required />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="costGuess">Guess the Air Fryer's Cost<span className='required-asterisk'>*</span></label>
            <div className="input-with-prefix">
              <span>$</span>
              <input type="number" id="costGuess" name="costGuess" placeholder="299" min="0" step="1" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="spidrPin">Secret Spidr PIN<span className='required-asterisk'>*</span></label>
            <input
              type="text"
              id="spidrPin"
              name="spidrPin"
              placeholder="####-####-####-####"
              maxLength="19"
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          I'm In!
        </button>
      </form>
    </div>
  );
};

export default InterestForm;