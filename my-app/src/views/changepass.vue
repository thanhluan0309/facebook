
<template>
     <div class="formchange">
        <div class="formbody" >
            <label>Password </label>
            <input type="password" name="" id="oldpass" style="margin-left: 10px;" class="form-control" >   
            <label>new password  </label>
            <input type="password" name="" id="newpass" style="margin-left: 10px;" class="form-control" >
            <label>Password confirm  </label>
            <input type="password" name="" id="passconfirm" style="margin-left: 10px;" class="form-control" >
            <button type="submit" class="btn btn-primary w-100" style="margin-top:20px" @click="handlechangepass()" > change password</button>

        </div>
    </div>
   

</template>
<script src="./handleApi/loginBehavior.js"></script>
<script>
export default {
    data() {
    return {
      num0: 0,
      userid: localStorage.getItem("userid"),
      username: localStorage.getItem("username"),
      
    }
  },
    methods: {
      
        async handlechangepass() {
            const req = {
                 userid : this.userid,
                oldpass : document.getElementById('oldpass').value,
                newpass : document.getElementById('newpass').value,
                passconfirm : document.getElementById('passconfirm').value
            }
            if(  document.getElementById('newpass').value !==  document.getElementById('passconfirm').value){
                return alert('newpass and password is matched');
            }
            try {
                const config = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req),
                };
                try {
                const fetchResponse = await fetch(`http://localhost:6969/user/change`, config);
                const data = await fetchResponse.json();
                console.log("data", data);
                if(data.success){
                         
                    alert(`${data.message}`)
                     window.location.href = "http://localhost:8080/login";
                }else {
                     alert(`${data.message}`)
                }
                return
                } catch (e) {
                return e;
                }
            } catch (error) {
                console.log(error);
            }
                    }
    }
}
</script>
<style>
body {
    height: 100%;
}

.login {
    display: flex;
    height: 500px;
    width: 100%;
}

.Alldisplay {
    margin: auto;
    display: flex;
    margin-right: 16%;
}

.left {
    width: 584px;
    margin-right: 116px;
    margin-top: 8%;
}

.left-title {
    font-size: 3.2rem;
    text-align: 20px;
    margin-left: 167px;
    color: #1877f2;

}

.left-body {
    width: 302px;
    padding: 0px 10px;
    text-align: center;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
    margin-left: 220px;
}

.right {
    background-color: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    box-sizing: border-box;
    margin: 40px 0 0;
    padding: 20px 0 28px;
    width: 396px;
    display: grid;
    height: 350px;
    padding: 12px;
}

.right-body {
    margin-bottom: 5px;
    height: 52px;
    border-radius: 5px;
    border: antiquewhite 1px solid;
    padding: 14px;
}

.right-body_btnlogin {
    background-color: #1877f2;
    color: white;
    font-size: 1.0rem;
    font-weight: 600;
    cursor: pointer;
}

.right-body_btnlogin:hover {
    opacity: .8;
}

.right-body_btnCreate {
    width: 228px;
    margin: auto;
    background: #42b72a;
    font-size: 1.0rem;
    font-weight: 600;
    color: white;
    cursor: pointer;
}

.right-body_btnCreate:hover {
    opacity: .8;
}
.formchange{
    display: flex;
    width: 400px;
    margin-top: 5%;
    margin-left: 40%;
    height: 300px;
    background-color: white;
    padding: 15px 15px;
    border-radius: 10px;
    box-shadow: 10px 10px 20px #aaaaaa;
   
}
.formbody{
    margin:auto
}
</style>
