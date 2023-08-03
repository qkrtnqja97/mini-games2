$(document).ready(function() {
    function User(email,password){
        this.email = email;
        this.password = password;
    }///Constructor
    
    var loginInfo = [rriki = new User('rriki@gmail.com','1234'),
                     alice = new User ('alice@gmail.com','2345'),
                     soobeom = new User('soobeom@gmail.com','3456')]
    $('#login-btn').click(function(e) {
        var emailInput = $('#exampleInputEmail1').val()
        var passwordInput = $('#exampleInputPassword1').val();
        if(emailInput == ''){
            e.preventDefault;
            alert("Email is null");
        } else if( /\S+@\S+\.\S+/.test(emailInput) == false){
            e.preventDefault;
            alert("It's not an email type");
        } else if(passwordInput ==''){
            e.preventDefault;
            alert("Password is null");
        } 
        else {
            let loginIndex = loginInfo.findIndex(e => e.email == emailInput)
            if (loginIndex >= 0){
                if (loginInfo[loginIndex].password == passwordInput){
                    location.href = 'miniGames.html'
                }
                else {
                    alert("Wrong Passwords.");
                }
            }
            else{
                alert("Wrong Email.");
            }
        }
    })
    
});
