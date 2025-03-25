const SocialLogin = () => {
    return (
      <div className="social-login">
     <button className="social-button">

   <a href="https://accounts.google.com/v3/signin/identifier?ifkv=AXH0vVvny7G9AJs89kmRRWYsrk5NS5YTlTTWfJHjxSk7O_08SgaePAp1GuMK2nizfCEzGiQt4cgUiw&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S305814189%3A1742898119293956"> <img src="google.svg" alt="Google" className="social-icon" /> 
        </a>
          Google
        </button>
        
        <button className="social-button">
         <a href="https://account.apple.com/sign-in"> <img src="apple.svg" alt="Apple" className="social-icon" /></a>
          Apple
        </button>
      </div>
    )
  }
  
  export default SocialLogin;