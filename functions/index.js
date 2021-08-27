const functions = require("firebase-functions");

const admin = require('firebase-admin');
const { firestore } = require("firebase-admin");
const { firebaseConfig } = require("firebase-functions");

admin.initializeApp();

const db = admin.firestore()

//sending student data to the firestore db


exports.postStudent = functions.https.onRequest(async(req, res)=>{
    const Data = req.query.data;

    const data = {
        name:Data.name,
        id:Data.id,

        parent:{
            name:Data.parent.name,
            address:Data.parent.address,
            email:Data.parent.email
        },

        arrival:[
            {date: Data.arrival.date, status:Data.arrival.status}
            
        ]
    }


    await db.collection('class1').doc(data.id).set(data).then(resp =>{
        console.log('successful added')
    }).catch(err=>{
        console.log(err)
    })

    res.send('added')


})

//updating student arrival

exports.updatingArrival = functions.https.onRequest(async(req, res)=>{
    const arrived = true;
    const studentId = '001'
    const arrival = {date:'02/01/2021',status:false}

    await db.collection('class1').doc(studentId).update({arrival:admin.firestore.FieldValue.arrayUnion(arrival)})

    res.send('updated')
})

//event trigger and sending email
const SENDGRID_API_KEY = functions.config().sendgrid.key
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey('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')

exports.sendEmail = functions.firestore.document('class1/{id}')
        .onUpdate((snap, context) =>{
            const id = context.params.id;

            const data = snap.after.data()
           
            if(snap.before.data() !== data){
                const msg = {
                    to:data.parent.email,
                    from:'adulrazzaqlukamba@gmail.com',
                    templateId: 'd-f421589746184c608ec7ec4bd37ba90d',
                    substitutionWrapper: ['{{','}}'],
                    substitutions: {
                        name: data.name,
                    }
                };
                return sgMail.send(msg).then(()=> console.log('email send'))
                .catch((err) =>{
                    console.log(err,'error ccured')
                })  
            }
        })

//getting student data

exports.getStudent = functions.https.onRequest(async(req, res)=>{
    const studentId = req.query.id;
    //const classId = req.params.class;

    await db.collection('class1').get().then((snapshot)=>{
        res.send(snapshot.doc(studentId))
    }).catch(err=>{
        console.log(err)
    })
    
   
})

// sendgridAPI-key= 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        

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
