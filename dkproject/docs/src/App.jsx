// src/App.jsx
import { useState, useRef, useEffect } from 'react';
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from './firebase';

function App() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [verificationId, setVerificationId] = useState('');
  const [otp, setOtp] = useState(Array(6).fill(''));
  const inputs = useRef([]);

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: (response) => {
          console.log('reCAPTCHA solved');
        },
        'expired-callback': () => {
          console.log('reCAPTCHA expired');
        }
      });
    }
  }, []);

  const handleMobileNumberSubmit = async (e) => {
    e.preventDefault();
    try {
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(auth, mobileNumber, appVerifier);
      setVerificationId(confirmationResult.verificationId);
      setShowOtpInput(true);
    } catch (error) {
      console.error('Error during phone number sign-in', error);
    }
  };

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (value.match(/^\d$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < otp.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
    if (value === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp.join(''));
      await auth.signInWithCredential(credential);
      alert('Successfully signed in!');
    } catch (error) {
      console.error('Error during OTP verification', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div id="recaptcha-container"></div>
      {!showOtpInput ? (
        <form onSubmit={handleMobileNumberSubmit} style={{ textAlign: 'center' }}>
          <h3>Enter your mobile number</h3>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Mobile Number"
            style={{ width: '250px', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <button type="submit" style={{ padding: '10px 20px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>
            Send OTP
          </button>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit}>
          <h3>Enter the OTP sent to your mobile number</h3>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {otp.map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={otp[index]}
                onChange={(e) => handleOtpChange(e, index)}
                ref={(el) => (inputs.current[index] = el)}
                style={{ width: '40px', height: '40px', margin: '0 5px', textAlign: 'center', fontSize: '18px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            ))}
          </div>
          <button type="submit" style={{ padding: '10px 20px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', marginTop: '10px' }}>
            Verify OTP
          </button>
        </form>
      )}
    </div>
  );
}


export default App;
