# GET / 
Jika user belum login
```
{ auth: false }
```
Jika user sudah login
```
{ 
  auth: true, 
  userSession : {
    id: "idnya user", 
    username: "usernamenya user", 
    email: "contoh@contoh.com"
  } 
}
```

# POST /register
Error email yang sudah terdaftar
```
{ 
  message: "Email telah terdaftar sebelumnya", 
  success: false 
}
```
Error username yang sudah terdaftar
```
{ 
  message: "Username telah terdaftar sebelumnya", 
  success: false 
}
```
Registrasi berhasil
```
{ success: true }
```

# POST /login
Input password atau email yang salah
```
{ 
  message: "Email atau password anda salah", 
  success: false 
}
```
Login berhasil
```
{ 
  success: true,  
  userSession : {
    id: "idnya user", 
    username: "usernamenya user", 
    email: "contoh@contoh.com"
  } 
}
```

# POST /logout
Logout berhasil
```
{ success: true }
```
