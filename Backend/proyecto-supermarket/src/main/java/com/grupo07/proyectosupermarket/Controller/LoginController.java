package com.grupo07.proyectosupermarket.Controller;

import com.grupo07.proyectosupermarket.Model.LoginParams;
import com.grupo07.proyectosupermarket.Model.LoginResponse;
import com.grupo07.proyectosupermarket.Model.ResetParams;
import com.grupo07.proyectosupermarket.Model.ResetResponse;
import com.grupo07.proyectosupermarket.Model.User;
import com.grupo07.proyectosupermarket.Service.InterfaceLoginSer;
import com.grupo07.proyectosupermarket.Util.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Login")
public class LoginController {

    @Autowired
    InterfaceLoginSer service;

    
    @GetMapping("/{id}")
    public ResponseEntity<User> ListarId(@PathVariable("id") Integer id) throws Exception{
        User obj= service.ListarId(id);
        if(obj == null){
            throw new Exception("No se encontro el ID");
        }
        return new ResponseEntity<User>(obj, HttpStatus.OK);
    }


    @PostMapping()
    @ResponseBody
    public ResponseEntity<LoginResponse> login( @RequestBody LoginParams params  ){
        
        User obj = service.Login( params.name , params.password);

        LoginResponse loginResponse = new LoginResponse();

        if( obj == null ){
            loginResponse.message = "USER NOT FOUND";
        }
        else{
            loginResponse.user = obj;
            loginResponse.message ="USER SUCCEFULL LOGIN";
            loginResponse.token = JwtUtil.getToken( obj);
        }
        return new ResponseEntity<LoginResponse>(loginResponse  , HttpStatus.OK);

    }

    @PutMapping()
    @ResponseBody
    public ResponseEntity<ResetResponse> login( @RequestBody ResetParams params  ){
        
        ResetResponse response = new ResetResponse();
        if( params.password.equals( params.passwordagain ) ){ 
            service.Reset(params.name, params.password);
            response.message = "PASSWORD SUCCESFULLY CHANGED";
        }
        else{
            response.message = "PASSWORD DO NOT MATCH";
        }

        return new ResponseEntity<ResetResponse>(response  , HttpStatus.OK);

    }


}

