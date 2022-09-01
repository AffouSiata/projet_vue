import {helpers,required} from "@vuelidate/validators"




const nonvide = helpers.withMessage('ce champ doit être obligatoirement remplir',required)






export {nonvide}


// mounted: function() {
    //     var v = this;
    //     v.$http.get(`http://localhost:4600/countries`)
    //     .then(function(resp) {
    //         v.countryList = resp.data;
    //     })
    //     .catch(function(err) {
    //         console.log(err)
    //     });
    // },






    // function convertirDate(){
//     let date =document.querySelector('.mise')
//     console.log("zzzzzzz",date);
//     let dateLocal = new Date().toLocaleDateString('fr-FR',{
//     //    weekday:'long',
//        year:'numeric',
//        month:'long',
//        day:'numeric',



//     })
//     console.log('dakrte',dateLocal);
//    date.textContent=dateLocal


// }
// convertirDate()