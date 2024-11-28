class Integrantes {
    constructor(foto, nombre, edad, descripcion, git) {
        this.foto = foto;
        this.nombre = nombre;
        this.edad = edad;
        this.descripcion = descripcion;
        this.git = git;
    }

    quienesSomos() {
        const somos = document.getElementById("somos");

        const section = document.createElement("section");
        section.classList.add("col-md-4", "col-sm-6", "col-12", "my-3", "d-flex", "justify-content-center","mt-5");

        section.innerHTML = `
            <div class="card tarjeta">
                <img src="${this.foto}" class="card-img-top tarjeta-img-top" alt="${this.nombre}">
                <div class="card-body tarjeta-body">
                    <h5 class="card-title tarjeta-title">${this.nombre}</h5>
                    <p class="card-text tarjeta-text">Edad: ${this.edad}</p>
                    <p class="card-text tarjeta-text">${this.descripcion}</p>
                    <a href="${this.git}" class="btn bot fa-brands fa-github fa-lg" target="_blank"> GitHub</a>
                </div>
            </div>`;
         
        somos.appendChild(section);
    }
}


let usua1 = new Integrantes(
    "https://scontent.ftuc2-1.fna.fbcdn.net/v/t39.30808-6/301960569_6076934522320097_1591571299176416663_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeECdIJ8qDci1l_PUUSDlCSp6g0AMfabJorqDQAx9psmikWD929UcwNZJ0RPW1Qee9taHFJWB7vdb8uf_LJXXxB4&_nc_ohc=vgtTY__It9oQ7kNvgGjh9yy&_nc_zt=23&_nc_ht=scontent.ftuc2-1.fna&_nc_gid=AWgB9tBRNMpIZ0qv1e7QaT0&oh=00_AYDwQ5BpBJh9oAInkm-7Qyk9Mi8aiOB3wyWuPqkmQ-FZYw&oe=674E5FFB",
    "José María Pérez",
    "31",
    "Actualmente estoy estudiando para programador. Mis pasatiempos son hacer actividades al aire libre y reunirme con amigos. Me gusta mucho la pizza.",
    "https://github.com/josema-P020"
);

let usua2 = new Integrantes(
    "https://images-ext-1.discordapp.net/external/ti6diDXzuH_nIY2OZdIineMgN5eYH8LtOWia5nWjI54/%3Fstp%3Ddst-jpg_s200x200%26_nc_cat%3D100%26ccb%3D1-7%26_nc_sid%3De4545e%26_nc_eui2%3DAeEJm7e1_5qGhA585QyNR70p0TfM1Uu21HDRN8zVS7bUcNBgbpX1qYC71vGuq7xJ-HU%26_nc_ohc%3DgP20C9ahEaEQ7kNvgG66GSk%26_nc_zt%3D24%26_nc_ht%3Dscontent-eze1-1.xx%26_nc_gid%3DAL5TzCpeJjRFRVPCR9bTUFZ%26oh%3D00_AYD0fuFvN6UNuCKNUW33DzTRJDg0r-KCgLAWlvEnCUzxUw%26oe%3D674F8310/https/scontent-eze1-1.xx.fbcdn.net/v/t1.6435-1/60259623_10218336369056257_6265658923181670400_n.jpg?format=webp",
    "Gerardo Solorzano",
    "42",
    "Soy músico, violinista de la orquesta sinfónica de Salta. Me encanta el arte y siento que el universo de la programación es un arte de creatividad infinita.",
    "https://github.com/gerardosolorzano-33"
);

let usua3 = new Integrantes(
    "https://movielifeplus.netlify.app/assets/img/20240731_162612.jpg",
    "Enzo Perez",
    "19",
    "Estudiante de programación en la UTN, me gustan los videojuegos, entrenar y la tecnología. También me gusta el asado los domingos y compartir con amigos.",
    "https://github.com/matperez01"
);

let usua4 = new Integrantes("https://rollinggamers.netlify.app/Assets/img/gonzaloSalazarGonzalez.jpg", "Gonzalo Salazar Gonzalez","27","Estudio programación web en rolling code, y soy técnico en una empresa de sistemas de comunicación. Hincha y socio del Club Atletico Boca Juniors","https://github.com/GonzaloSG12"

);
let usua5 = new Integrantes("https://ca.slack-edge.com/THQU1MGPN-U06R8FCDCQG-a914117f0358-512","Lucía Gallardo","24","Líder de marketing y comunicación. Su enfoque en la promoción y en conectar con la audiencia es clave para el crecimiento y éxito de la plataforma.","");

usua1.quienesSomos();
usua2.quienesSomos();
usua5.quienesSomos();
usua3.quienesSomos();
usua4.quienesSomos();
