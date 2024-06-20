# Event
cd ../EventService
source venv/bin/activate  
nohup python3 src/main.py
# Booking
cd ../BookingService
nohup node server.js
# User
cd ../UserAuthService    
nohup node server.js
# Paymennt
cd ../PaymentService 
deactivate
source venv/bin/activate  
nohup python3 src/main.py 
# Notifi
cd ../NotificationService
nohup npm start
# Gateway
nohup node gateway.js