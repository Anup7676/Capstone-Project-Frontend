function apiCreateNewJob(jobpost, form) {

        const headers = {
                'content-type' : 'application/json'
        }
    
        axios.post('http://localhost:8080/jobpost/', jobpost, { headers })
                .then(res => {
                        form.reset()
                        showSuccessModal()
                })
                .catch(err => console.log(err))
    }
    
    function setupForm() {
        const formJobpost = document.getElementById('formJobpost')
    
        formJobpost.onsubmit = ev => { // when form is submitted, this function would be called
               
                ev.preventDefault() // stop the default behaviour of refreshing the page
                console.log(ev)
    
                // const invoice = { id : 12,  client : 'abc', invDt : '2022-01-01', amt : 98.02 }
    
                const formData = new FormData(ev.target) // ev.target points to form tag in the html
    
                for(let key of formData.keys()) {
                        console.log(key) // this is mapped to name attribute of input tags
                }
    
                for(let val of formData.values()) {
                        console.log(val) // this is mapped to name attribute of input tags
                }
    
        
    
                const jobpost = Object.fromEntries(formData.entries()) // you are converting form data to js object
                console.log(jobpost)
    
                apiCreateNewJob(jobpost, formJobpost) // we are pass form object to reset the form on success
        }
    }
    setupForm()
    
    function showSuccessModal() {
        const myModalEl = document.getElementById('successModal');
        const modal = new bootstrap.Modal(myModalEl)
        modal.show()
    }