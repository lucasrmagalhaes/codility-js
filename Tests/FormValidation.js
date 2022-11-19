function solution() {  
    const person = document.getElementById('type_person').checked;

    if (person) {
        const firstName = document.getElementById('first_name').value;
        const lastName = document.getElementById('last_name').value;
        const email = document.getElementById('email').value;
        
        if (firstName.length === 0 || lastName.length === 0) {
            return false;
        }
        
        const emailParts = email.split('@'); 

        if (emailParts.length !== 2) {
            return false;
        }
        
        if (emailParts[0].length > 64 || emailParts[1].length > 64) {
            return false;
        }
        
        const emailRegExp = RegExp("^[a-zA-Z0-9.]*$");
        
        if (!emailRegExp.test(emailParts[0]) || !emailRegExp.test(emailParts[1])) {
            return false;
        }
    } else {
        const companyName = document.getElementById('company_name').value;
        const phone = document.getElementById('phone').value;
        
        if (companyName.length === 0) {
            return false;
        }
        
        const phoneRegExp = RegExp("^[0-9- ]*$");
        
        if (!phoneRegExp.test(phone)) {
            return false;
        }

        let phoneNumberLength = 0;
        
        const phoneParts = phone.split('-');
        
        phoneParts.forEach(part => {
           phoneNumberLength += part.replace(/\s/g, '').length;
        });
 
        if (phoneNumberLength < 6) {
            return false;
        }
    }
 
    return true;
}