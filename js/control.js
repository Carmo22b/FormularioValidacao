const passar_cadastro = document.getElementById("btn_passar_cadastro");
const passar_login = document.getElementById("btn_passar_login");
const form = document.querySelector(".form");
const form_login = document.querySelector(".form_login");
const div_cadastrar = document.querySelector(".cadastrar");
const div_logar = document.querySelector(".logar");
const div_checkbox = document.querySelector("#interesses");
const div_radio = document.querySelector("#genero");

const user_form = document.getElementById("form");
const user_nome = document.getElementById("user_nome");
const user_sobrenome = document.getElementById("user_sobrenome");
const user_email = document.getElementById("user_email");
const user_senha = document.getElementById("user_senha");
const user_senha_2 = document.getElementById("user_senha_2");
const user_checkbox = document.querySelectorAll("input[name='interesses']");
const user_radio = document.querySelectorAll("input[name='genero']");
const user_mensagem = document.getElementById("user_mensagem");
const user_mensagem_login_1 = document.getElementById("user_mensagem_login_1");
const user_mensagem_login_2 = document.getElementById("user_mensagem_login_2");
const user_mensagem_login_3 = document.getElementById("user_mensagem_login_3");
const user_mensagem_2 = document.getElementById("user_mensagem_2");
const user_mensagem_3 = document.getElementById("user_mensagem_3");
const user_mensagem_4 = document.getElementById("user_mensagem_4");
const user_mensagem_5 = document.getElementById("user_mensagem_5");
const user_submit = document.getElementById("user_submit");
const olho = document.getElementById("olho");
const olho_2 = document.getElementById("olho_2");

const user_form_login = document.getElementById("form_login");
const user_nome_login = document.getElementById("user_nome_login");
const user_sobrenome_login = document.getElementById("user_sobrenome_login");
const user_email_login = document.getElementById("user_email_login");
const user_senha_login = document.getElementById("user_senha_login");
const olho_login = document.getElementById("olho_login");


passar_cadastro.addEventListener("click", () => {
    form_login.style.transform = "translateX(100%)";
    form_login.style.visibility = "hidden";
    form_login.style.opacity = "0";
    div_cadastrar.style.background = "rgb(255, 255, 255)";

    form.style.transform = "translateX(0)";
    form.style.visibility = "visible";
    form.style.opacity = "1";
    div_logar.style.background = "rgb(94, 94, 94)";
});


passar_login.addEventListener("click", () => {
    form.style.transform = "translateX(-100%)";
    form.style.visibility = "hidden";
    form.style.opacity = "0";
    div_logar.style.background = "rgb(255, 255, 255)";

    form_login.style.transform = "translateX(0)";
    form_login.style.visibility = "visible";
    form_login.style.opacity = "1";
    div_cadastrar.style.background = "rgb(94, 94, 94)";
});


user_form_login.addEventListener("submit", (evento) => {
    evento.preventDefault();

    input_user_nome_login()
    input_user_sobrenome_login()
    input_user_email_login()
    input_user_senha_login()

});


function input_user_nome_login() {
    const user_nome_login_value = user_nome_login.value;

    if (user_nome_login_value === "") {
        error_input(user_nome_login, user_mensagem_login_1, "Preencha todos os campos");
    } else {
        sucesso_input(user_nome_login, user_mensagem_login_1);
    };

};


function input_user_sobrenome_login() {
    const user_sobrenome_login_value = user_sobrenome_login.value;

    if (user_sobrenome_login_value === "") {
        error_input(user_sobrenome_login, user_mensagem_login_1, "Preencha todos os campos");
    } else {
        sucesso_input(user_sobrenome_login, user_mensagem_login_1);
    };
};


function input_user_email_login() {
    const user_email_login_value = user_email_login.value;

    if (user_email_login_value === "") {
        error_input(user_email_login, user_mensagem_login_2, "Preencha o seu E-mail");
    } else {
        sucesso_input(user_email_login, user_mensagem_login_2);
    };
};


function input_user_senha_login() {
    const user_senha_login_value = user_senha_login.value;

    if (user_senha_login_value === "") {
        error_input(user_senha_login, user_mensagem_login_3, "Senha é obrigatória");
    } else if (user_senha_login_value.length < 8) {
        error_input(user_senha_login, user_mensagem_login_3, "A senha deve ter ao menos 8 caracteres");
    } else {
        sucesso_input(user_senha_login, user_mensagem_login_3);
    };

};



user_form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    input_user_nome()
    input_user_sobrenome()
    input_user_email()
    input_user_senha()
    input_user_senha_2()
    input_user_checkbox()
    input_user_radio()

});

function input_user_nome() {
    const user_nome_value = user_nome.value;

    if (user_nome_value === "") {
        error_input(user_nome, user_mensagem, "Preencha todos os campos");
    } else {
        sucesso_input(user_nome, user_mensagem);
    };

};


function input_user_sobrenome() {
    const user_sobrenome_value = user_sobrenome.value;

    if (user_sobrenome_value === "") {
        error_input(user_sobrenome, user_mensagem, "Preencha todos os campos");
    } else {
        sucesso_input(user_sobrenome, user_mensagem);
    };
};


function input_user_email() {
    const user_email_value = user_email.value;

    if (user_email_value === "") {
        error_input(user_email, user_mensagem, "Preencha todos os campos");
    } else {
        sucesso_input(user_email, user_mensagem);
    };
};


function input_user_senha() {
    const user_senha_value = user_senha.value;

    if (user_senha_value === "") {
        error_input(user_senha, user_mensagem_5, "Senha é obrigatória");
    } else if (user_senha_value.length < 8) {
        error_input(user_senha, user_mensagem_5, "A senha deve ter ao menos 8 caracteres");
    } else {
        sucesso_input(user_senha, user_mensagem_5);
    };

};


function input_user_senha_2() {
    const user_senha_value = user_senha.value;
    const user_senha_2_value = user_senha_2.value;

    if (user_senha_2_value === "") {
        error_input(user_senha_2, user_mensagem_4, "Confirmação de senha é obrigatória");
    } else if (user_senha_2_value.length < 8) {
        error_input(user_senha_2, user_mensagem_4, "A confirmação de senha deve ter ao menos 8 caracteres");
    } else if (user_senha_2_value !== user_senha_value) {
        error_input(user_senha_2, user_mensagem_4, "As senhas não coincidem");
    } else {
        sucesso_input(user_senha_2, user_mensagem_4);
        sucesso_input(user_senha, user_mensagem_4);
    };

};


function input_user_email() {
    const user_email_value = user_email.value;

    if (user_email_value === "") {
        error_input(user_email, user_mensagem, "Preencha todos os campos");
    } else {
        sucesso_input(user_email, user_mensagem);
    };
};


function input_user_checkbox() {
    const checkbox_marcado = Array.from(user_checkbox).some(checkbox => checkbox.checked);

    if (!checkbox_marcado) {
        div_checkbox.style.border = "solid 1px red";
        div_checkbox.style.borderRadius = "20px";
        div_checkbox.style.padding = "4px";
        div_checkbox.style.marginBottom = "0px";

        user_mensagem_2.style.visibility = "visible";
        let mensagem = "Marque pelo menos uma das opições";
        user_mensagem_2.style.color = "red";
        user_mensagem_2.innerHTML = mensagem;
    } else {
        div_checkbox.style.border = "none";
        div_checkbox.style.borderRadius = "0px";
        div_checkbox.style.padding = "0px";
        div_checkbox.style.marginBottom = "18px";

        user_mensagem_2.style.visibility = "hidden";
        user_mensagem_2.innerHTML = "";
    };
};


function input_user_radio() {
    const radio_marcado = Array.from(user_radio).some(radio => radio.checked);

    if (!radio_marcado) {
        div_radio.style.border = "solid 1px red";
        div_radio.style.borderRadius = "10px";
        div_radio.style.padding = "4px";
        div_radio.style.marginBottom = "0px";

        user_mensagem_3.style.visibility = "visible";
        let mensagem_2 = "Gênero é obrigatório";
        user_mensagem_3.style.color = "red";
        user_mensagem_3.innerHTML = mensagem_2;
    } else {
        div_radio.style.border = "none";
        div_radio.style.borderRadius = "0px";
        div_radio.style.padding = "0px";
        div_radio.style.marginBottom = "18px";

        user_mensagem_3.style.visibility = "hidden";
        user_mensagem_3.innerHTML = "";
    };
};


function error_input(input, mensagem_elemento, mensagem) {

    mensagem_elemento.innerHTML = mensagem;
    mensagem_elemento.style.visibility = "visible";
    mensagem_elemento.style.color = "red";
    input.style.border = "solid 1px red";

};

function sucesso_input(input, mensagem_elemento) {
    mensagem_elemento.style.visibility = "hidden";
    input.style.border = "solid 1px #ccc";
};



olho.addEventListener("click", () => {
    if (olho.src.includes("visibility_off_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png")) {
        olho.src = "SRC/imgs/visibility_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";

        user_senha.type = "text";

    } else {
        olho.src = "SRC/imgs/visibility_off_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";

        user_senha.type = "password";
    };

});

olho_2.addEventListener("click", () => {
    if (olho_2.src.includes("visibility_off_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png")) {
        olho_2.src = "SRC/imgs/visibility_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";

        user_senha_2.type = "text";

    } else {
        olho_2.src = "SRC/imgs/visibility_off_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";

        user_senha_2.type = "password";
    };

});

olho_login.addEventListener("click", () => {
    if (olho_login.src.includes("visibility_off_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png")) {
        olho_login.src = "SRC/imgs/visibility_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";

        user_senha_login.type = "text";

    } else {
        olho_login.src = "SRC/imgs/visibility_off_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";

        user_senha_login.type = "password";
    };

});

