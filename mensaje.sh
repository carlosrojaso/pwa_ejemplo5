#!/bin/bash 
curl https://fcm.googleapis.com/fcm/send \
     -H "Content-Type: application/json" \
     -H "Authorization: key=AAAAA5Xq4p0:APA91bEN2qKJXj4hDLQCkNx70fxI5JQHAhCZIWzs2zJW54yE1ChtF5xoA1RLrhsh8qJPB64vV3lxFLGldhnV3mx6uALAWRNBbmsi3NjCkVypsu4FK4i8cLdiN6A1PCHO3d_Jjd-vmeiX" \
     -d '{ "notification": {"title": "Mensaje", "body": "Has conectado tu App", "click_action" : "https://www.localhost.com"},"to" : "crUfi4tva6I:APA91bHZwZKvZblqt0HD40DuDg7gPYSFNj_0MiYnWL9DNe7uznaIIQqmjZdXvLZekoQywlmxCBFw1-qzf3Mcr1OcjII0bSkqw6TarLSWSwGwAawBXXaRylZWnVlFzOeBH8lqR_8qDHYh"}'