<template>
    <div id="example" class="login">
        <div class="Alldisplay">

            <div class="left">
                <div class="left-title">
                    Socialbook
                </div>
                <div class="left-body">
                    Facebook helps you connect and share with the people in your life.
                </div>
            </div>
            <div class="right">

                <input id="username" class="right-body right-body_username" type="text"
                    placeholder="Email address or phone number" />

                <input id="password" class="right-body right-body_password" type="password" placeholder="Password" />
                <button class="right-body right-body_btnlogin" @click="handlelogin()" type="button">login</button>
                <a href="#">Forgotten password?</a>

                <button class="right-body right-body_btnCreate" @click="gotocreate()" type="button">Create New
                    Acoount</button>

            </div>

        </div>

    </div>

</template>
<script src="./handleApi/loginBehavior.js"></script>
<script>
export default {
    methods: {
        gotocreate(){
            return window.location.href = "http://localhost:8080/register";
        },
        async handlelogin() {
            const req = {
                username : document.getElementById('username').value,
                password : document.getElementById('password').value
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
                    const fetchResponse = await fetch(
                        `http://localhost:6969/user/login`,
                        config
                    );
                    const data = await fetchResponse.json();
                    console.log("data",data)
                    if(data.success){
                        
                            localStorage.setItem("userid",data.userLogin._id)
                            localStorage.setItem("token",data.accesstoken)
                            
                            localStorage.setItem("username",data.userLogin.username)
                       return window.location.href = "http://localhost:8080/home";
                    }else {
                        return alert(`${data.message}`)
                    }
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
</style>