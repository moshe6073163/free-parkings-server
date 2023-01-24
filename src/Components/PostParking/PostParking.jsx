import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../App'

export default function PostParking() {
  const {currentUser} = useContext(MyContext);
  const navigate = useNavigate();

  function changeNavigate(){
    navigate("/User")
  }
  useEffect(()=>{
    if(currentUser == undefined){
      changeNavigate();
    }
  }, [])
  
  return (
    <>
      {currentUser == undefined ? changeNavigate()
      :  
      <div class="vh-100" style={{backgroundColor: '#eee'}}>
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style={{borderRadius: '25px'}}>
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Post A Park</p>
  
                    <form class="mx-1 mx-md-4" onSubmit>
  
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" class="form-control"  />
                          <label class="form-label" for="form3Example1c">Adress</label>
                        </div>
                      </div>
  
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="checkbox" id="form3Example4c" class="" />
                          <label class=" form-label" for="form3Example4c">accessibility?</label>
                        </div>
                      </div>
  
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="checkbox" id="form3Example3c" class=""  />
                          <label class="form-label" for="form3Example3c">Have a Code?</label>
                        </div>
                      </div>
  
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input placeholder='Car / Trunk / Bike' type="text" id="form3Example4c" class="form-control" />
                          <label class="form-label" for="form3Example4c">Suitable for?</label>
                        </div>
                      </div>
  
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4cd" class="form-control"/>
                          <label class="form-label" for="form3Example4cd">Repeat your password</label>
                        </div>
                      </div>
  
                      <div class="form-check d-flex justify-content-center mb-5">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                        <label class="form-check-label" for="form2Example3">
                          I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>
  
                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" class="btn btn-primary btn-lg">Register</button>
                      </div>
  
                    </form>
  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      }
    </>
  )
}